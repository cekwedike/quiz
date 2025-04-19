import React, { useState, useEffect } from 'react';
import './App.css';

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

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Shuffle questions when the quiz starts
    if (isStarted) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setQuizQuestions(shuffled);
    }
  }, [isStarted]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setIsStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsAnswered(false);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled);
  };

  return (
    <div className="App">
      <div className="quiz-container">
        {!isStarted ? (
          <div className="welcome-screen">
            <h1>Welcome to the Quiz App!</h1>
            <p>Test your knowledge with our interactive quiz</p>
            <button 
              className="start-button"
              onClick={() => setIsStarted(true)}
            >
              Start Quiz
            </button>
          </div>
        ) : showResult ? (
          <div className="result-screen">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} out of {questions.length}</p>
            <p>Percentage: {((score / questions.length) * 100).toFixed(1)}%</p>
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
              <p className="category">{quizQuestions[currentQuestionIndex].category}</p>
              <p className="progress">Question {currentQuestionIndex + 1} of {questions.length}</p>
              <p className="score">Score: {score}</p>
            </div>
            <h2>{quizQuestions[currentQuestionIndex].question}</h2>
            <div className="options">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswer === option 
                      ? option === quizQuestions[currentQuestionIndex].correctAnswer 
                        ? 'correct' 
                        : 'incorrect'
                      : ''
                  } ${isAnswered && option === quizQuestions[currentQuestionIndex].correctAnswer ? 'correct' : ''}`}
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
