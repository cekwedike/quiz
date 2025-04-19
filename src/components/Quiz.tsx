import React, { useState, useEffect } from 'react';
import { Question, QuizProps } from '../types/quiz';

const Quiz: React.FC<QuizProps> = ({ questions, timeLimit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isQuizComplete) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsQuizComplete(true);
    }
  }, [timeLeft, isQuizComplete]);

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = questions[currentQuestion].correctAnswer === selectedAnswer;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  if (isQuizComplete) {
    return (
      <div className="quiz-complete">
        <h2>Quiz Complete!</h2>
        <p>Your score: {score}/{questions.length}</p>
        <button onClick={() => {
          setCurrentQuestion(0);
          setScore(0);
          setTimeLeft(timeLimit);
          setIsQuizComplete(false);
        }}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>Question {currentQuestion + 1} of {questions.length}</h2>
        <p>Time Left: {timeLeft} seconds</p>
        <p>Score: {score}</p>
      </div>
      <div className="question">
        <h3>{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 