import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { soundManager } from './sounds';
import { storageManager, Achievement } from './storage';
import { getRandomQuestionsForQuiz, Question } from './questionBank';

const categories = ['Science', 'History', 'Geography', 'Technology', 'Sports', 'Entertainment'];

interface Lifelines {
  fiftyFifty: number;
  hint: number;
  skip: number;
}

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [totalTime, setTotalTime] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSelectingCategories, setIsSelectingCategories] = useState(false);
  const [lifelines, setLifelines] = useState<Lifelines>({
    fiftyFifty: 5,
    hint: 1,
    skip: Infinity
  });
  const [usedLifelines, setUsedLifelines] = useState<Set<string>>(new Set());
  const [availableOptions, setAvailableOptions] = useState<Set<string>>(new Set(['1', '2', '3', '4']));
  const [showHint, setShowHint] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [categoryResults, setCategoryResults] = useState<{[key: string]: {correct: number, total: number}}>({});
  const [stats, setStats] = useState(storageManager.getStats());
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'simple' | 'complex' | 'extremely complex'>('all');
  const [highScores, setHighScores] = useState(storageManager.getHighScores());
  const [enhancedStats, setEnhancedStats] = useState(storageManager.getEnhancedStats());
  const [showAchievements, setShowAchievements] = useState(false);
  const [showLearningProgress, setShowLearningProgress] = useState(false);
  const [visibleAchievements, setVisibleAchievements] = useState<Achievement[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentQuestion) {
      setAvailableOptions(new Set(currentQuestion.options));
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isStarted && !showResult && !isAnswered && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          if (prev <= 5) {
            soundManager.playSound('tick');
          }
          return prev - 1;
        });
        setTotalTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStarted, showResult, isAnswered, timeLeft]);

  useEffect(() => {
    if (showStats) {
      setHighScores(storageManager.getHighScores());
    }
  }, [showStats]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    soundManager.playSound('incorrect');
    updateCategoryResults(false);
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
      } else {
        endQuiz();
      }
    }, 1000);
  };

  const updateCategoryResults = (isCorrect: boolean) => {
    const category = currentQuestion.category;
    setCategoryResults(prev => ({
      ...prev,
      [category]: {
        correct: (prev[category]?.correct || 0) + (isCorrect ? 1 : 0),
        total: (prev[category]?.total || 0) + 1
      }
    }));
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const startQuiz = () => {
    if (selectedCategories.length === 0) {
      alert('Please select at least one category');
      return;
    }

    // Get questions based on selected difficulty
    let difficultyDistribution = {
      easy: 15,    // 30% easy questions
      complex: 20,  // 40% complex questions
      hard: 10,    // 20% hard questions
      'extremely complex': 5 // 10% extremely complex questions
    };

    if (selectedDifficulty === 'simple') {
      difficultyDistribution = {
        easy: 50,    // 100% easy questions
        complex: 0,
        hard: 0,
        'extremely complex': 0
      };
    } else if (selectedDifficulty === 'complex') {
      difficultyDistribution = {
        easy: 0,
        complex: 50,  // 100% complex questions
        hard: 0,
        'extremely complex': 0
      };
    } else if (selectedDifficulty === 'extremely complex') {
      difficultyDistribution = {
        easy: 0,
        complex: 0,
        hard: 0,
        'extremely complex': 50  // 100% extremely complex questions
      };
    }

    // Get questions based on selected categories and difficulty
    const quizQuestions = getRandomQuestionsForQuiz(
      selectedCategories,
      50, // Total questions per quiz
      difficultyDistribution
    );

    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setIsStarted(true);
    setShowResult(false);
    setShowStats(false);
    setUsedLifelines(new Set());
    setAvailableOptions(new Set(['1', '2', '3', '4']));
    setCategoryResults({});
  };

  const handleAnswer = (selectedAnswer: string) => {
    if (!currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newStats = storageManager.getStats();

    // Update basic stats
    newStats.totalQuestions++;
    if (isCorrect) {
      newStats.correctAnswers++;
      newStats.currentStreak++;
      if (newStats.currentStreak > newStats.longestStreak) {
        newStats.longestStreak = newStats.currentStreak;
      }
    } else {
      newStats.incorrectAnswers++;
      newStats.currentStreak = 0;
    }

    // Update total score and average
    newStats.totalScore += isCorrect ? 1 : 0;
    newStats.averageScore = newStats.totalScore / newStats.totalQuestions;

    // Update last played
    newStats.lastPlayed = new Date().toISOString();

    // Update categories played
    if (!newStats.categoriesPlayed.includes(currentQuestion.category)) {
      newStats.categoriesPlayed.push(currentQuestion.category);
    }

    // Update difficulty levels
    newStats.difficultyLevels[currentQuestion.difficulty]++;

    // Save updated stats
    storageManager.saveStats(newStats);

    // Update UI state
    setSelectedAnswer(selectedAnswer);
    setIsAnswered(true);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(30);
    setShowHint(false);
    setAvailableOptions(new Set(questions[currentQuestionIndex + 1].options));
  };

  const endQuiz = () => {
    setShowResult(true);
    soundManager.playSound('victory');
    
    // Calculate final category results
    const finalResults: { [key: string]: { correct: number, total: number } } = {};
    categories.forEach(category => {
      const categoryQuestions = questions.filter(q => q.category === category);
      const correctAnswers = categoryResults[category]?.correct || 0;
      if (categoryQuestions.length > 0) {
        finalResults[category] = {
          correct: correctAnswers,
          total: categoryQuestions.length
        };
      }
    });

    // Save high score
    storageManager.addHighScore({
      score,
      totalQuestions: questions.length,
      categories: selectedCategories.length ? selectedCategories : categories,
      timeSpent: totalTime,
      date: new Date().toISOString()
    });

    // Update enhanced statistics
    storageManager.updateEnhancedStats(
      score,
      questions.length,
      finalResults,
      selectedCategories.length ? selectedCategories : categories
    );

    // Update local stats state
    setEnhancedStats(storageManager.getEnhancedStats());
    setHighScores(storageManager.getHighScores());
    setStats(storageManager.getStats());

    // Show newly unlocked achievements
    const newAchievements = enhancedStats.achievements
      .filter(a => a.unlocked && new Date(a.dateUnlocked!).toDateString() === new Date().toDateString());
    setVisibleAchievements(newAchievements);
  };

  // Add useEffect to update stats when component mounts
  useEffect(() => {
    setEnhancedStats(storageManager.getEnhancedStats());
    setHighScores(storageManager.getHighScores());
    setStats(storageManager.getStats());
  }, []);

  const restartQuiz = () => {
    setIsSelectingCategories(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsAnswered(false);
    setTimeLeft(30);
    setTotalTime(0);
    setShowStats(false);
    setIsStarted(false);
    setLifelines({
      fiftyFifty: 5,
      hint: 1,
      skip: Infinity
    });
  };

  const useFiftyFifty = () => {
    if (lifelines.fiftyFifty === 0 || isAnswered) return;
    
    const correctAnswer = currentQuestion.correctAnswer;
    const wrongOptions = currentQuestion.options.filter(opt => opt !== correctAnswer);
    const remainingWrong = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 1);
    const newOptions = new Set([correctAnswer, ...remainingWrong].sort(() => Math.random() - 0.5));
    
    setAvailableOptions(newOptions);
    setLifelines(prev => ({ ...prev, fiftyFifty: prev.fiftyFifty - 1 }));
  };

  const useHint = () => {
    if (lifelines.hint === 0 || isAnswered) return;
    setShowHint(true);
    setLifelines(prev => ({ ...prev, hint: 0 }));
  };

  const useSkip = () => {
    if (lifelines.skip === 0 || isAnswered) return;
    setLifelines(prev => ({ ...prev, skip: 0 }));
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      endQuiz();
    }
  };

  const toggleMute = () => {
    const isMuted = soundManager.toggleMute();
    setIsMuted(isMuted);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Update achievement notification component
  const AchievementNotification = ({ achievement, onClose }: { achievement: Achievement, onClose: () => void }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // 10 seconds timeout

      return () => clearTimeout(timer);
    }, [onClose]);

    return (
      <div className="achievement-notification">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="achievement-icon">{achievement.icon}</div>
        <div className="achievement-content">
          <h3>New Achievement Unlocked!</h3>
          <p className="achievement-name">{achievement.name}</p>
          <p className="achievement-description">{achievement.description}</p>
        </div>
      </div>
    );
  };

  // Add learning progress component
  const LearningProgress = () => (
    <div className="learning-progress">
      <h3>Learning Progress</h3>
      <div className="progress-grid">
        {Object.entries(enhancedStats.learningProgress).map(([category, progress]) => (
          <div key={category} className="progress-card">
            <div className="progress-header">
              <span className="category-icon">{getCategoryIcon(category)}</span>
              <span>{category}</span>
            </div>
            <div className="progress-content">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${((progress.correct / progress.total) * 100)}%` }}
                />
              </div>
              <p>{((progress.correct / progress.total) * 100).toFixed(1)}%</p>
              <p className="progress-detail">
                {progress.correct}/{progress.total} correct
              </p>
              <p className="progress-date">
                Last studied: {new Date(progress.lastStudied).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Update the stats view to use enhancedStats instead of stats
  const renderStatsContent = () => {
    if (showAchievements) {
      return (
        <div className="achievements-grid">
          {enhancedStats.achievements.map(achievement => (
            <div 
              key={achievement.id}
              className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-info">
                <h3>{achievement.name}</h3>
                <p>{achievement.description}</p>
                {achievement.unlocked && achievement.dateUnlocked && (
                  <p className="achievement-date">
                    Unlocked: {new Date(achievement.dateUnlocked).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (showLearningProgress) {
      return <LearningProgress />;
    }

    return (
      <div className="stats-content">
        <div className="stats-overview">
          <div className="stat-card">
            <h3>Games Played</h3>
            <p className="stat-value">{enhancedStats.gamesPlayed}</p>
          </div>
          <div className="stat-card">
            <h3>Average Score</h3>
            <p className="stat-value">{(enhancedStats.averageScore * 100).toFixed(1)}%</p>
          </div>
          <div className="stat-card">
            <h3>Current Streak</h3>
            <p className="stat-value">{enhancedStats.streaks.current} days</p>
            <p className="stat-detail">Longest: {enhancedStats.streaks.longest} days</p>
          </div>
        </div>

        <div className="stats-section">
          <h3>Category Performance</h3>
          <div className="category-stats">
            {Object.entries(enhancedStats.categoryStats).map(([category, results]) => (
              <div key={category} className="category-stat-card">
                <div className="category-stat-header">
                  <span className="category-icon">{getCategoryIcon(category)}</span>
                  <span>{category}</span>
                </div>
                <div className="category-stat-content">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${((results.correct / results.total) * 100)}%` }}
                    />
                  </div>
                  <p>{((results.correct / results.total) * 100).toFixed(1)}%</p>
                  <p className="stat-detail">{results.correct}/{results.total} correct</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h3>Recent High Scores</h3>
          <div className="high-scores-list">
            {highScores.map((score, index) => (
              <div key={index} className="high-score-card">
                <div className="score-rank">#{index + 1}</div>
                <div className="score-details">
                  <p className="score-main">{score.score}/{score.totalQuestions}</p>
                  <p className="score-time">{formatTime(score.timeSpent)}</p>
                  <p className="score-date">{new Date(score.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Add cosmic background generation
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty('--star-delay', String(Math.random() * 5));
      return star;
    };

    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.setProperty('--shooting-delay', String(Math.random() * 8));
      return shootingStar;
    };

    const createCosmicParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'cosmic-particle';
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      return particle;
    };

    if (backgroundRef.current) {
      // Create stars
      for (let i = 0; i < 100; i++) {
        backgroundRef.current.appendChild(createStar());
      }

      // Create shooting stars
      for (let i = 0; i < 5; i++) {
        backgroundRef.current.appendChild(createShootingStar());
      }

      // Create cosmic particles
      for (let i = 0; i < 20; i++) {
        backgroundRef.current.appendChild(createCosmicParticle());
      }
    }

    return () => {
      if (backgroundRef.current) {
        backgroundRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="cosmic-background" ref={backgroundRef} />
      <div className="quiz-container">
        {!isStarted ? (
          isSelectingCategories ? (
            <div className="category-selection">
              <div className="quiz-header-modern">
                <h2>Choose Your Categories</h2>
                <p>Select one or more categories to customize your quiz experience</p>
              </div>
              <div className="difficulty-selection">
                <h3>Select Difficulty Level</h3>
                <div className="difficulty-buttons">
                  <button
                    className={`difficulty-button ${selectedDifficulty === 'all' ? 'selected' : ''}`}
                    onClick={() => setSelectedDifficulty('all')}
                  >
                    All Levels
                  </button>
                  <button
                    className={`difficulty-button ${selectedDifficulty === 'simple' ? 'selected' : ''}`}
                    onClick={() => setSelectedDifficulty('simple')}
                  >
                    Simple
                  </button>
                  <button
                    className={`difficulty-button ${selectedDifficulty === 'complex' ? 'selected' : ''}`}
                    onClick={() => setSelectedDifficulty('complex')}
                  >
                    Complex
                  </button>
                  <button
                    className={`difficulty-button ${selectedDifficulty === 'extremely complex' ? 'selected' : ''}`}
                    onClick={() => setSelectedDifficulty('extremely complex')}
                  >
                    Extremely Complex
                  </button>
                </div>
              </div>
              <div className="categories-grid">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
                    onClick={() => toggleCategory(category)}
                  >
                    <span className="category-icon">
                      {getCategoryIcon(category)}
                    </span>
                    <span className="category-name">{category}</span>
                  </button>
                ))}
              </div>
              <div className="action-buttons">
                <button 
                  className="primary-button"
                  onClick={() => {
                    setIsSelectingCategories(false);
                    startQuiz();
                  }}
                >
                  Start Quiz
                </button>
                <button 
                  className="secondary-button"
                  onClick={() => {
                    setShowStats(true);
                    setIsSelectingCategories(false);
                  }}
                >
                  View Statistics
                </button>
              </div>
            </div>
          ) : showStats ? (
            <div className="stats-screen">
              <div className="quiz-header-modern">
                <h2>Your Quiz Statistics</h2>
                <p>Track your progress and achievements</p>
              </div>
              
              <div className="stats-tabs">
                <button 
                  className={`stats-tab ${!showAchievements && !showLearningProgress ? 'active' : ''}`}
                  onClick={() => {
                    setShowAchievements(false);
                    setShowLearningProgress(false);
                  }}
                >
                  Overview
                </button>
                <button 
                  className={`stats-tab ${showAchievements ? 'active' : ''}`}
                  onClick={() => {
                    setShowAchievements(true);
                    setShowLearningProgress(false);
                  }}
                >
                  Achievements
                </button>
                <button 
                  className={`stats-tab ${showLearningProgress ? 'active' : ''}`}
                  onClick={() => {
                    setShowAchievements(false);
                    setShowLearningProgress(true);
                  }}
                >
                  Learning Progress
                </button>
              </div>

              {renderStatsContent()}

              <div className="action-buttons">
                <button 
                  className="primary-button"
                  onClick={() => {
                    setShowStats(false);
                    setIsSelectingCategories(true);
                  }}
                >
                  Back to Categories
                </button>
                <button 
                  className="secondary-button"
                  onClick={() => {
                    setShowStats(false);
                    setIsSelectingCategories(false);
                  }}
                >
                  Back to Main Menu
                </button>
                <button 
                  className="delete-stats-button"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete all statistics? This action cannot be undone.')) {
                      storageManager.clearAllData();
                      setEnhancedStats(storageManager.getEnhancedStats());
                    }
                  }}
                >
                  Delete Statistics
                </button>
              </div>
            </div>
          ) : (
            <div className="welcome-screen">
              <div className="quiz-header-modern">
                <h1>Welcome to QuizMaster</h1>
                <p>Test your knowledge across multiple categories</p>
              </div>
              <button 
                className="primary-button"
                onClick={() => setIsSelectingCategories(true)}
              >
                Start Your Journey
              </button>
            </div>
          )
        ) : showResult ? (
          <div className="result-screen">
            <div className="quiz-header-modern">
              <h2>Quiz Completed!</h2>
              <p>Let's see how you did</p>
            </div>
            <div className="result-content">
              <div className="score-overview">
                <div className="score-circle">
                  <div className="score-number">{score}</div>
                  <div className="score-total">out of {questions.length}</div>
                </div>
                <p className="score-percentage">
                  {((score / questions.length) * 100).toFixed(1)}%
                </p>
                <p className="completion-time">Time: {formatTime(totalTime)}</p>
              </div>

              <div className="category-breakdown">
                <h3>Performance by Category</h3>
                {Object.entries(categoryResults).map(([category, results]) => (
                  <div key={category} className="category-result-card">
                    <div className="category-result-header">
                      <span className="category-icon">{getCategoryIcon(category)}</span>
                      <span>{category}</span>
                    </div>
                    <div className="category-result-stats">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${((results.correct / results.total) * 100)}%` }}
                        />
                      </div>
                      <p>{results.correct}/{results.total} correct</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="action-buttons">
              <button 
                className="primary-button"
                onClick={restartQuiz}
              >
                Try Again
              </button>
              <button 
                className="secondary-button"
                onClick={() => {
                  setShowStats(true);
                  setShowResult(false);
                  setIsStarted(false);
                }}
              >
                View All Stats
              </button>
            </div>
            {visibleAchievements.map(achievement => (
              <AchievementNotification
                key={achievement.id}
                achievement={achievement}
                onClose={() => setVisibleAchievements(prev => prev.filter(a => a.id !== achievement.id))}
              />
            ))}
          </div>
        ) : (
          <div className="quiz-content">
            <div className="quiz-header-modern">
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
              </div>
              <div className="quiz-info">
                <p className="category-badge">{currentQuestion.category}</p>
                <p className="score-badge">Score: {score}</p>
                <p className={`difficulty-badge difficulty-${currentQuestion.difficulty.replace(' ', '-')}`}>
                  {currentQuestion.difficulty}
                </p>
              </div>
              <div className="timer-container">
                <div className="timer" style={{ 
                  '--progress': `${(timeLeft / 30) * 100}%`,
                  '--color': timeLeft <= 5 ? '#e74c3c' : timeLeft <= 10 ? '#f39c12' : '#2ecc71'
                } as React.CSSProperties}>
                  {timeLeft}
                </div>
              </div>
            </div>

            <div className="question-section">
              <h2>{currentQuestion.question}</h2>
              {showHint && (
                <p className="hint">
                  <span className="hint-icon">💡</span>
                  The correct answer has {currentQuestion.correctAnswer.length} characters
                </p>
              )}
            </div>

            <div className="options-grid">
              {Array.from(availableOptions).map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswer === option 
                      ? option === currentQuestion.correctAnswer 
                        ? 'correct' 
                        : 'incorrect'
                      : ''
                  } ${isAnswered && option === currentQuestion.correctAnswer ? 'correct' : ''}`}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>

            <div className="quiz-controls">
              <div className="lifelines">
                <button
                  className={`lifeline-button ${lifelines.fiftyFifty === 0 ? 'used' : ''}`}
                  onClick={useFiftyFifty}
                  disabled={lifelines.fiftyFifty === 0 || isAnswered}
                >
                  <span className="lifeline-icon">50:50</span>
                </button>
                <button
                  className={`lifeline-button ${lifelines.hint === 0 ? 'used' : ''}`}
                  onClick={useHint}
                  disabled={lifelines.hint === 0 || isAnswered}
                >
                  <span className="lifeline-icon">💡</span>
                </button>
                <button
                  className={`lifeline-button ${lifelines.skip === 0 ? 'used' : ''}`}
                  onClick={useSkip}
                  disabled={lifelines.skip === 0 || isAnswered}
                >
                  <span className="lifeline-icon">⏭️</span>
                </button>
              </div>
              <button
                className={`sound-button ${isMuted ? 'muted' : ''}`}
                onClick={toggleMute}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to get category icons
function getCategoryIcon(category: string): string {
  const icons: { [key: string]: string } = {
    Science: '🔬',
    History: '📜',
    Geography: '🌍',
    Technology: '💻',
    Sports: '⚽',
    Entertainment: '🎬'
  };
  return icons[category] || '❓';
}

export default App;
