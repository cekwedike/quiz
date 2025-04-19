import React, { useState, useEffect } from 'react';
import './App.css';
import { soundManager } from './sounds';
import { storageManager } from './storage';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

const questions: Question[] = [
  // Science
  { id: 1, question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], correctAnswer: "Au", category: "Science" },
  { id: 2, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars", category: "Science" },
  { id: 3, question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: "Diamond", category: "Science" },
  { id: 4, question: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Liver", "Skin"], correctAnswer: "Skin", category: "Science" },
  { id: 5, question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide", category: "Science" },
  
  // History
  { id: 6, question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correctAnswer: "1945", category: "History" },
  { id: 7, question: "Who was the first President of the United States?", options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"], correctAnswer: "George Washington", category: "History" },
  { id: 8, question: "Which ancient wonder was located in Alexandria?", options: ["The Lighthouse", "The Colossus", "The Pyramids", "The Hanging Gardens"], correctAnswer: "The Lighthouse", category: "History" },
  { id: 9, question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correctAnswer: "Leonardo da Vinci", category: "History" },
  { id: 10, question: "Which empire was ruled by the Aztecs?", options: ["Roman", "Greek", "Mexican", "Persian"], correctAnswer: "Mexican", category: "History" },

  // Geography
  { id: 11, question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correctAnswer: "Tokyo", category: "Geography" },
  { id: 12, question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: "Pacific", category: "Geography" },
  { id: 13, question: "On which continent is the Sahara Desert located?", options: ["Asia", "Africa", "South America", "North America"], correctAnswer: "Africa", category: "Geography" },
  { id: 14, question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Korea", "Japan", "Vietnam"], correctAnswer: "Japan", category: "Geography" },
  { id: 15, question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], correctAnswer: "Nile", category: "Geography" },

  // Technology
  { id: 16, question: "Who co-founded Apple Computer Company?", options: ["Steve Jobs and Steve Wozniak", "Bill Gates and Paul Allen", "Larry Page and Sergey Brin", "Mark Zuckerberg and Eduardo Saverin"], correctAnswer: "Steve Jobs and Steve Wozniak", category: "Technology" },
  { id: 17, question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"], correctAnswer: "Central Processing Unit", category: "Technology" },
  { id: 18, question: "Which programming language is known as the 'mother of all languages'?", options: ["Python", "Java", "C", "Assembly"], correctAnswer: "C", category: "Technology" },
  { id: 19, question: "What year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correctAnswer: "2007", category: "Technology" },
  { id: 20, question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighTech Machine Learning", "HyperTransfer Markup Language", "HyperText Machine Language"], correctAnswer: "HyperText Markup Language", category: "Technology" },

  // Sports
  { id: 21, question: "In which sport would you perform a slam dunk?", options: ["Football", "Basketball", "Tennis", "Golf"], correctAnswer: "Basketball", category: "Sports" },
  { id: 22, question: "How many players are there in a standard soccer team on the field?", options: ["9", "10", "11", "12"], correctAnswer: "11", category: "Sports" },
  { id: 23, question: "Which country won the first FIFA World Cup?", options: ["Brazil", "Uruguay", "Argentina", "Italy"], correctAnswer: "Uruguay", category: "Sports" },
  { id: 24, question: "What is the diameter of a basketball hoop in inches?", options: ["16", "18", "20", "22"], correctAnswer: "18", category: "Sports" },
  { id: 25, question: "In which sport is a 'shuttlecock' used?", options: ["Tennis", "Badminton", "Table Tennis", "Squash"], correctAnswer: "Badminton", category: "Sports" },

  // Entertainment
  { id: 26, question: "Who played Iron Man in the Marvel Cinematic Universe?", options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correctAnswer: "Robert Downey Jr.", category: "Entertainment" },
  { id: 27, question: "Which band performed 'Bohemian Rhapsody'?", options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"], correctAnswer: "Queen", category: "Entertainment" },
  { id: 28, question: "What is the name of Harry Potter's owl?", options: ["Hedwig", "Errol", "Fawkes", "Pigwidgeon"], correctAnswer: "Hedwig", category: "Entertainment" },
  { id: 29, question: "Who directed the movie 'Jurassic Park'?", options: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"], correctAnswer: "Steven Spielberg", category: "Entertainment" },
  { id: 30, question: "Which TV series features dragons and is based on George R.R. Martin's novels?", options: ["The Witcher", "Game of Thrones", "Lord of the Rings", "The Last Kingdom"], correctAnswer: "Game of Thrones", category: "Entertainment" }
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
    if (selectedCategories.length > 0) {
      filteredQuestions = questions.filter(q => selectedCategories.includes(q.category));
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
    
    // Save high score
    storageManager.addHighScore({
      score,
      totalQuestions: quizQuestions.length,
      categories: selectedCategories.length ? selectedCategories : categories,
      timeSpent: totalTime,
      date: new Date().toISOString()
    });

    // Update statistics
    storageManager.updateStats(
      score,
      quizQuestions.length,
      categoryResults,
      selectedCategories
    );
  };

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

  const stats = storageManager.getStats();
  const highScores = storageManager.getHighScores();

  return (
    <div className="App">
      <div className="quiz-container">
        {!isStarted ? (
          isSelectingCategories ? (
            <div className="category-selection">
              <h2>Select Categories</h2>
              <p>Choose one or more categories (or none for all categories)</p>
              <div className="categories-grid">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-button ${selectedCategories.includes(category) ? 'selected' : ''}`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button 
                className="start-button"
                onClick={() => {
                  setIsSelectingCategories(false);
                  startQuiz();
                }}
              >
                Start Quiz
              </button>
              <button 
                className="stats-button"
                onClick={() => setShowStats(true)}
              >
                View Statistics
              </button>
            </div>
          ) : showStats ? (
            <div className="stats-screen">
              <h2>Quiz Statistics</h2>
              <div className="stats-content">
                <p>Games Played: {stats.gamesPlayed}</p>
                <p>Average Score: {(stats.averageScore * 100).toFixed(1)}%</p>
                <h3>Category Performance</h3>
                {Object.entries(stats.categoryStats).map(([category, results]) => (
                  <div key={category} className="category-stat">
                    <span>{category}</span>
                    <span>{((results.correct / results.total) * 100).toFixed(1)}%</span>
                  </div>
                ))}
                <h3>High Scores</h3>
                <div className="high-scores">
                  {highScores.map((score, index) => (
                    <div key={index} className="high-score">
                      <span>#{index + 1}</span>
                      <span>{score.score}/{score.totalQuestions}</span>
                      <span>{formatTime(score.timeSpent)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                className="back-button"
                onClick={() => setShowStats(false)}
              >
                Back
              </button>
            </div>
          ) : (
            <div className="welcome-screen">
              <h1>Welcome to the Quiz App!</h1>
              <p>Test your knowledge with our interactive quiz</p>
              <button 
                className="start-button"
                onClick={() => setIsSelectingCategories(true)}
              >
                Choose Categories
              </button>
            </div>
          )
        ) : showResult ? (
          <div className="result-screen">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} out of {quizQuestions.length}</p>
            <p>Percentage: {((score / quizQuestions.length) * 100).toFixed(1)}%</p>
            <p>Total Time: {formatTime(totalTime)}</p>
            <div className="category-breakdown">
              {categories.map(category => {
                const results = categoryResults[category];
                return results ? (
                  <div key={category} className="category-score">
                    <span>{category}:</span>
                    <span>{results.correct}/{results.total}</span>
                  </div>
                ) : null;
              })}
            </div>
            <button 
              className="restart-button"
              onClick={restartQuiz}
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="quiz-content">
            <div className="quiz-header">
              <div className="timer">Time Left: {formatTime(timeLeft)}</div>
              <p className="category">{currentQuestion.category}</p>
              <p className="progress">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
              <p className="score">Score: {score}</p>
            </div>
            <div className="lifelines">
              <button
                className={`lifeline-button ${lifelines.fiftyFifty === 0 ? 'used' : ''}`}
                onClick={useFiftyFifty}
                disabled={lifelines.fiftyFifty === 0 || isAnswered}
              >
                50:50
              </button>
              <button
                className={`lifeline-button ${lifelines.hint === 0 ? 'used' : ''}`}
                onClick={useHint}
                disabled={lifelines.hint === 0 || isAnswered}
              >
                Hint
              </button>
              <button
                className={`lifeline-button ${lifelines.skip === 0 ? 'used' : ''}`}
                onClick={useSkip}
                disabled={lifelines.skip === 0 || isAnswered}
              >
                Skip
              </button>
              <button
                className={`sound-button ${isMuted ? 'muted' : ''}`}
                onClick={toggleMute}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
            </div>
            <h2>{currentQuestion.question}</h2>
            {showHint && (
              <p className="hint">Hint: The correct answer has {currentQuestion.correctAnswer.length} characters</p>
            )}
            <div className="options">
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
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
