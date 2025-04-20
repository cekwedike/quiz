import React, { useState, useEffect } from 'react';
import './App.css';
import { soundManager } from './sounds';
import { storageManager, Achievement } from './storage';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
  difficulty: 'simple' | 'complex' | 'extremely complex';
}

const questions: Question[] = [
  // Simple Questions
  { id: 1, question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], correctAnswer: "Au", category: "Science", difficulty: "simple" },
  { id: 2, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars", category: "Science", difficulty: "simple" },
  { id: 3, question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correctAnswer: "Tokyo", category: "Geography", difficulty: "simple" },
  { id: 4, question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correctAnswer: "Leonardo da Vinci", category: "History", difficulty: "simple" },
  { id: 5, question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"], correctAnswer: "Central Processing Unit", category: "Technology", difficulty: "simple" },
  { id: 6, question: "In which sport would you perform a slam dunk?", options: ["Football", "Basketball", "Tennis", "Golf"], correctAnswer: "Basketball", category: "Sports", difficulty: "simple" },
  { id: 7, question: "Who played Iron Man in the Marvel Cinematic Universe?", options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correctAnswer: "Robert Downey Jr.", category: "Entertainment", difficulty: "simple" },
  { id: 8, question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: "Pacific", category: "Geography", difficulty: "simple" },
  { id: 9, question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide", category: "Science", difficulty: "simple" },
  { id: 10, question: "What year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correctAnswer: "2007", category: "Technology", difficulty: "simple" },

  // Complex Questions
  { id: 11, question: "Which programming language is known as the 'mother of all languages'?", options: ["Python", "Java", "C", "Assembly"], correctAnswer: "C", category: "Technology", difficulty: "complex" },
  { id: 12, question: "What is the name of the process by which plants convert sunlight into energy?", options: ["Photosynthesis", "Respiration", "Transpiration", "Germination"], correctAnswer: "Photosynthesis", category: "Science", difficulty: "complex" },
  { id: 13, question: "Which ancient civilization built the Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], correctAnswer: "Inca", category: "History", difficulty: "complex" },
  { id: 14, question: "What is the name of the largest desert in the world?", options: ["Sahara", "Antarctic", "Arabian", "Gobi"], correctAnswer: "Antarctic", category: "Geography", difficulty: "complex" },
  { id: 15, question: "In which year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], correctAnswer: "1989", category: "History", difficulty: "complex" },
  { id: 16, question: "What is the name of the first artificial satellite launched into space?", options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Telstar 1"], correctAnswer: "Sputnik 1", category: "Science", difficulty: "complex" },
  { id: 17, question: "Which country won the first FIFA World Cup?", options: ["Brazil", "Uruguay", "Argentina", "Italy"], correctAnswer: "Uruguay", category: "Sports", difficulty: "complex" },
  { id: 18, question: "What is the name of the first computer programmer?", options: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "Grace Hopper"], correctAnswer: "Ada Lovelace", category: "Technology", difficulty: "complex" },
  { id: 19, question: "Which movie won the first Academy Award for Best Picture?", options: ["Wings", "Sunrise", "The Jazz Singer", "Metropolis"], correctAnswer: "Wings", category: "Entertainment", difficulty: "complex" },
  { id: 20, question: "What is the name of the highest mountain in Africa?", options: ["Mount Kilimanjaro", "Mount Kenya", "Mount Stanley", "Mount Meru"], correctAnswer: "Mount Kilimanjaro", category: "Geography", difficulty: "complex" },

  // Extremely Complex Questions
  { id: 21, question: "What is the name of the theorem that states that no three positive integers a, b, and c satisfy the equation aⁿ + bⁿ = cⁿ for any integer value of n greater than 2?", options: ["Fermat's Last Theorem", "Pythagorean Theorem", "Euler's Theorem", "Gauss's Theorem"], correctAnswer: "Fermat's Last Theorem", category: "Science", difficulty: "extremely complex" },
  { id: 22, question: "Which ancient language is considered the ancestor of most modern European languages?", options: ["Latin", "Sanskrit", "Proto-Indo-European", "Ancient Greek"], correctAnswer: "Proto-Indo-European", category: "History", difficulty: "extremely complex" },
  { id: 23, question: "What is the name of the quantum phenomenon where particles can be connected regardless of distance?", options: ["Quantum Tunneling", "Quantum Entanglement", "Quantum Superposition", "Quantum Decoherence"], correctAnswer: "Quantum Entanglement", category: "Science", difficulty: "extremely complex" },
  { id: 24, question: "Which algorithm is used to find the shortest path between nodes in a graph?", options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "Bellman-Ford Algorithm"], correctAnswer: "Dijkstra's Algorithm", category: "Technology", difficulty: "extremely complex" },
  { id: 25, question: "What is the name of the ancient trade route that connected the East and West?", options: ["Silk Road", "Spice Route", "Amber Road", "Incense Route"], correctAnswer: "Silk Road", category: "History", difficulty: "extremely complex" },
  { id: 26, question: "Which mathematical concept describes the behavior of dynamic systems that are highly sensitive to initial conditions?", options: ["Fractal Geometry", "Chaos Theory", "Game Theory", "Graph Theory"], correctAnswer: "Chaos Theory", category: "Science", difficulty: "extremely complex" },
  { id: 27, question: "What is the name of the first computer virus ever created?", options: ["Creeper", "Elk Cloner", "Brain", "Morris Worm"], correctAnswer: "Creeper", category: "Technology", difficulty: "extremely complex" },
  { id: 28, question: "Which ancient civilization developed the concept of zero?", options: ["Babylonian", "Egyptian", "Mayan", "Indian"], correctAnswer: "Indian", category: "History", difficulty: "extremely complex" },
  { id: 29, question: "What is the name of the paradox that states that a faster-than-light signal would violate causality?", options: ["Twin Paradox", "Grandfather Paradox", "Bootstrap Paradox", "Tachyonic Antitelephone"], correctAnswer: "Tachyonic Antitelephone", category: "Science", difficulty: "extremely complex" },
  { id: 30, question: "Which programming paradigm is based on the concept of 'objects'?", options: ["Functional Programming", "Object-Oriented Programming", "Procedural Programming", "Logic Programming"], correctAnswer: "Object-Oriented Programming", category: "Technology", difficulty: "extremely complex" }
];

const categories = Array.from(new Set(questions.map(q => q.category)));

interface Lifelines {
  fiftyFifty: number;
  hint: number;
  skip: number;
}

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(questions);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
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
  const [availableOptions, setAvailableOptions] = useState<string[]>([]);
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

  useEffect(() => {
    if (currentQuestion) {
      setAvailableOptions([...currentQuestion.options]);
    }
  }, [currentQuestionIndex, quizQuestions]);

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
      if (currentQuestionIndex < quizQuestions.length - 1) {
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
    let filteredQuestions = questions;
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filteredQuestions = filteredQuestions.filter(q => selectedCategories.includes(q.category));
    }
    
    // Filter by selected difficulty
    if (selectedDifficulty !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === selectedDifficulty);
    }
    
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled);
    setIsStarted(true);
    setTimeLeft(30);
    setTotalTime(0);
    setCategoryResults({});
    setLifelines({
      fiftyFifty: 1,
      hint: 1,
      skip: 1
    });
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowHint(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      soundManager.playSound('correct');
    } else {
      soundManager.playSound('incorrect');
    }
    
    updateCategoryResults(isCorrect);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        nextQuestion();
      } else {
        endQuiz();
      }
    }, 1000);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(30);
    setShowHint(false);
    setAvailableOptions(quizQuestions[currentQuestionIndex + 1].options);
  };

  const endQuiz = () => {
    setShowResult(true);
    soundManager.playSound('victory');
    
    // Calculate final category results
    const finalResults: { [key: string]: { correct: number, total: number } } = {};
    categories.forEach(category => {
      const categoryQuestions = quizQuestions.filter(q => q.category === category);
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
      totalQuestions: quizQuestions.length,
      categories: selectedCategories.length ? selectedCategories : categories,
      timeSpent: totalTime,
      date: new Date().toISOString()
    });

    // Update enhanced statistics
    storageManager.updateEnhancedStats(
      score,
      quizQuestions.length,
      finalResults,
      selectedCategories.length ? selectedCategories : categories
    );

    // Update local stats state
    setEnhancedStats(storageManager.getEnhancedStats());
    setHighScores(storageManager.getHighScores());
    setStats(storageManager.getStats());
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
      fiftyFifty: 1,
      hint: 1,
      skip: 1
    });
  };

  const useFiftyFifty = () => {
    if (lifelines.fiftyFifty === 0 || isAnswered) return;
    
    const correctAnswer = currentQuestion.correctAnswer;
    const wrongOptions = currentQuestion.options.filter(opt => opt !== correctAnswer);
    const remainingWrong = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    const newOptions = [correctAnswer, ...remainingWrong].sort(() => Math.random() - 0.5);
    
    setAvailableOptions(newOptions);
    setLifelines(prev => ({ ...prev, fiftyFifty: 0 }));
  };

  const useHint = () => {
    if (lifelines.hint === 0 || isAnswered) return;
    setShowHint(true);
    setLifelines(prev => ({ ...prev, hint: 0 }));
  };

  const useSkip = () => {
    if (lifelines.skip === 0 || isAnswered) return;
    setLifelines(prev => ({ ...prev, skip: 0 }));
    if (currentQuestionIndex < quizQuestions.length - 1) {
      nextQuestion();
    } else {
      endQuiz();
    }
  };

  const toggleMute = () => {
    const isMuted = soundManager.toggleMute();
    setIsMuted(isMuted);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Add achievement notification component
  const AchievementNotification = ({ achievement }: { achievement: Achievement }) => (
    <div className="achievement-notification">
      <div className="achievement-icon">{achievement.icon}</div>
      <div className="achievement-content">
        <h3>New Achievement Unlocked!</h3>
        <p className="achievement-name">{achievement.name}</p>
        <p className="achievement-description">{achievement.description}</p>
      </div>
    </div>
  );

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

  return (
    <div className="App">
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
                style={{ marginTop: '1rem' }}
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
                style={{ marginTop: '1rem' }}
              >
                Delete Statistics
              </button>
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
                  <div className="score-total">out of {quizQuestions.length}</div>
                </div>
                <p className="score-percentage">
                  {((score / quizQuestions.length) * 100).toFixed(1)}%
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
            {enhancedStats.achievements
              .filter(a => a.unlocked && new Date(a.dateUnlocked!).toDateString() === new Date().toDateString())
              .map(achievement => (
                <AchievementNotification key={achievement.id} achievement={achievement} />
              ))}
          </div>
        ) : (
          <div className="quiz-content">
            <div className="quiz-header-modern">
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
                <p>Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
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
              {availableOptions.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswer === option 
                      ? option === currentQuestion.correctAnswer 
                        ? 'correct' 
                        : 'incorrect'
                      : ''
                  } ${isAnswered && option === currentQuestion.correctAnswer ? 'correct' : ''}`}
                  onClick={() => handleAnswerSelect(option)}
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
