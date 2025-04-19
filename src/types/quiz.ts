export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  timeLeft: number;
  isQuizComplete: boolean;
}

export interface QuizProps {
  questions: Question[];
  timeLimit: number;
} 