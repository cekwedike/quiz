import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { soundManager } from './sounds';
import { storageManager, Achievement } from './storage';
import { getRandomQuestionsForQuiz, Question, getQuestionsByCategoryAndDifficulty } from './questionBank';
import { StorageManager } from './storage';
import { SoundManager } from './sound';

const categories = ['Science', 'History', 'Geography', 'Technology', 'Sports', 'Entertainment'];

interface Lifelines {
  fiftyFifty: number;
  hint: number;
  skip: number;
}

interface CategoryResults {
  [category: string]: {
    correct: number;
    total: number;
    difficulties: {
      [difficulty: string]: {
        correct: number;
        total: number;
      };
    };
  };
}

const QuestionSection: React.FC<{ currentQuestion: Question | null; selectedAnswerIndex: number | null; showExplanation: boolean; onAnswerSelect: (index: number) => void }> = ({
  currentQuestion,
  selectedAnswerIndex,
  showExplanation,
  onAnswerSelect
}) => {
  if (!currentQuestion) return null;

  return (
    <div className="question-container">
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswerIndex === index;
          const isCorrect = isSelected && index === currentQuestion.correctAnswer;
          return (
            <button
              key={index}
              className={`option-button ${isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              onClick={() => onAnswerSelect(index)}
              disabled={showExplanation}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showExplanation && currentQuestion.explanation && (
        <div className="explanation">
          <p>{currentQuestion.explanation}</p>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [totalTime, setTotalTime] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSelectingCategories, setIsSelectingCategories] = useState(false);
  const [lifelines, setLifelines] = useState<Lifelines>({
    fiftyFifty: 1,
    hint: 1,
    skip: 1
  });
  const [usedLifelines, setUsedLifelines] = useState<Set<string>>(new Set());
  const [availableOptions, setAvailableOptions] = useState<Set<string>>(new Set(['1', '2', '3', '4']));
  const [showHint, setShowHint] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [categoryResults, setCategoryResults] = useState<CategoryResults>({});
  const [stats, setStats] = useState(storageManager.getStats());
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'simple' | 'complex' | 'extremely complex'>('all');
  const [highScores, setHighScores] = useState(storageManager.getHighScores());
  const [enhancedStats, setEnhancedStats] = useState(storageManager.getEnhancedStats());
  const [showAchievements, setShowAchievements] = useState(false);
  const [showLearningProgress, setShowLearningProgress] = useState(false);
  const [visibleAchievements, setVisibleAchievements] = useState<Achievement[]>([]);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
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
    if (!currentQuestion) return;
    const category = currentQuestion.category;
    const difficulty = currentQuestion.difficulty;
    
    setCategoryResults(prev => {
      const newResults = { ...prev };
      if (!newResults[category]) {
        newResults[category] = {
          correct: 0,
          total: 0,
          difficulties: {}
        };
      }
      if (!newResults[category].difficulties[difficulty]) {
        newResults[category].difficulties[difficulty] = {
          correct: 0,
          total: 0
        };
      }
      
      newResults[category].correct += isCorrect ? 1 : 0;
      newResults[category].total += 1;
      newResults[category].difficulties[difficulty].correct += isCorrect ? 1 : 0;
      newResults[category].difficulties[difficulty].total += 1;
      
      return newResults;
    });
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const startQuiz = async (selectedCategories: string[], selectedDifficulty: string) => {
    let difficultyDistribution;
    if (selectedDifficulty === 'all') {
      difficultyDistribution = {
        easy: 15,    // 30% easy questions
        complex: 20,  // 40% complex questions
        hard: 10,    // 20% hard questions
        'extremely complex': 5 // 10% extremely complex questions
      };
    } else {
      difficultyDistribution = {
        easy: selectedDifficulty === 'simple' ? 50 : 0,
        complex: selectedDifficulty === 'complex' ? 50 : 0,
        hard: selectedDifficulty === 'hard' ? 50 : 0,
        'extremely complex': selectedDifficulty === 'extremely complex' ? 50 : 0
      };
    }

    // Get questions based on selected categories and difficulty
    const newQuestions = getRandomQuestionsForQuiz(
      selectedCategories.length > 0 ? selectedCategories : categories,
      10,
      difficultyDistribution
    );

    if (newQuestions.length === 0) {
      alert('No questions found for the selected categories and difficulty. Please try different selections.');
      return;
    }

    // Reset all quiz states
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setCurrentQuestion(newQuestions[0]);
    setSelectedAnswerIndex(null);
    setShowExplanation(false);
    setScore(0);
    setStreak(0);
    setAnsweredQuestions(new Set());
    setCategoryResults({});
    setTimeLeft(30);
    setTotalTime(0);
    setIsAnswered(false);
    setShowResult(false);
    setQuizCompleted(false);
    setLifelines({
      fiftyFifty: 1,
      hint: 1,
      skip: 1
    });
    setAvailableOptions(new Set(newQuestions[0].options));
    
    // Start the quiz
    setIsStarted(true);
    setIsSelectingCategories(false);
  };

  const saveResults = () => {
    if (!currentQuestion) return;
    // Save results logic here
  };

  const getPointsForDifficulty = (difficulty: 'easy' | 'complex' | 'hard' | 'extremely complex'): number => {
    switch (difficulty) {
      case 'easy':
        return 1;
      case 'complex':
        return 2;
      case 'hard':
        return 3;
      case 'extremely complex':
        return 4;
      default:
        return 0;
    }
  };

  const handleAnswerSelect = (index: number) => {
    if (!currentQuestion) return;
    
    setSelectedAnswerIndex(index);
    
    const isCorrect = index === currentQuestion.correctAnswer;
    const points = getPointsForDifficulty(currentQuestion.difficulty);
    
    setScore(prev => prev + (isCorrect ? points : 0));
    setStreak(prev => isCorrect ? prev + 1 : 0);
    
    // Update category results
    setCategoryResults(prev => {
      const newResults = { ...prev };
      const category = currentQuestion.category;
      if (!newResults[category]) {
        newResults[category] = {
          correct: 0,
          total: 0,
          difficulties: {}
        };
      }
      newResults[category].correct += isCorrect ? 1 : 0;
      newResults[category].total += 1;
      if (!newResults[category].difficulties[currentQuestion.difficulty]) {
        newResults[category].difficulties[currentQuestion.difficulty] = {
          correct: 0,
          total: 0
        };
      }
      newResults[category].difficulties[currentQuestion.difficulty].correct += isCorrect ? 1 : 0;
      newResults[category].difficulties[currentQuestion.difficulty].total += 1;
      return newResults;
    });
    
    // Update answered questions
    setAnsweredQuestions(prev => {
      const newSet = new Set<string>(Array.from(prev));
      newSet.add(currentQuestion.id);
      return newSet;
    });
    
    if (isCorrect) {
      soundManager.playSound('correct');
    } else {
      soundManager.playSound('incorrect');
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (!currentQuestion) return;
    
    const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer;
    const points = getPointsForDifficulty(currentQuestion.difficulty);
    
    setScore(prev => prev + (isCorrect ? points : 0));
    setStreak(prev => isCorrect ? prev + 1 : 0);
    setCategoryResults(prev => {
      const newResults = { ...prev };
      const category = currentQuestion.category;
      if (!newResults[category]) {
        newResults[category] = {
          correct: 0,
          total: 0,
          difficulties: {}
        };
      }
      newResults[category].correct += isCorrect ? 1 : 0;
      newResults[category].total += 1;
      if (!newResults[category].difficulties[currentQuestion.difficulty]) {
        newResults[category].difficulties[currentQuestion.difficulty] = {
          correct: 0,
          total: 0
        };
      }
      newResults[category].difficulties[currentQuestion.difficulty].correct += isCorrect ? 1 : 0;
      newResults[category].difficulties[currentQuestion.difficulty].total += 1;
      return newResults;
    });
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswerIndex(null);
      setShowExplanation(false);
    } else {
      soundManager.playSound('victory');
      setQuizCompleted(true);
    }
  };

  const handleSkip = () => {
    if (!currentQuestion) return;
    
    setCategoryResults(prev => {
      const newResults = { ...prev };
      const category = currentQuestion.category;
      if (!newResults[category]) {
        newResults[category] = {
          correct: 0,
          total: 0,
          difficulties: {}
        };
      }
      newResults[category].total += 1;
      if (!newResults[category].difficulties[currentQuestion.difficulty]) {
        newResults[category].difficulties[currentQuestion.difficulty] = {
          correct: 0,
          total: 0
        };
      }
      newResults[category].difficulties[currentQuestion.difficulty].total += 1;
      return newResults;
    });
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswerIndex(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const nextQuestion = () => {
    if (!currentQuestion) return;
    if (currentQuestionIndex === questions.length - 1) {
      endQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
      setTimeLeft(30);
      setShowHint(false);
      setAvailableOptions(new Set(questions[currentQuestionIndex + 1].options));
    }
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
    setSelectedAnswerIndex(null);
    setShowResult(false);
    setIsAnswered(false);
    setTimeLeft(30);
    setTotalTime(0);
    setShowStats(false);
    setIsStarted(false);
    setLifelines({
      fiftyFifty: 1,
      hint: 1,
      skip: 1
    });
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const useFiftyFifty = () => {
    if (!currentQuestion || lifelines.fiftyFifty === 0 || isAnswered) return;

    const correctAnswerIndex = currentQuestion.options.findIndex(
      (option) => option.toString() === currentQuestion.correctAnswer.toString()
    );

    // Get indices of wrong answers
    const wrongAnswerIndices = currentQuestion.options
      .map((_, index) => index)
      .filter(index => index !== correctAnswerIndex);

    // Randomly select two wrong answers to remove
    const indicesToRemove = shuffleArray(wrongAnswerIndices).slice(0, 2);

    // Create a new set with only the correct answer and one wrong answer
    const remainingOptions = new Set(
      currentQuestion.options.filter((_, index) => !indicesToRemove.includes(index))
    );

    setAvailableOptions(remainingOptions);
    setLifelines(prev => ({ ...prev, fiftyFifty: prev.fiftyFifty - 1 }));
    soundManager.playSound('tick');
  };

  const useHint = () => {
    if (lifelines.hint === 0 || isAnswered) return;
    setShowHint(true);
    setLifelines(prev => ({ ...prev, hint: 0 }));
  };

  const toggleMute = () => {
    const isMuted = soundManager.toggleMute();
    setIsMuted(isMuted);
  };

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
                    startQuiz(selectedCategories, selectedDifficulty);
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
        ) : currentQuestion ? (
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

            <QuestionSection
              currentQuestion={currentQuestion}
              selectedAnswerIndex={selectedAnswerIndex}
              showExplanation={showExplanation}
              onAnswerSelect={handleAnswerSelect}
            />

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
                  onClick={handleSkip}
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
        ) : null}
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
