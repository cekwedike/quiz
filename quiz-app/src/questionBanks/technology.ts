import { Question } from './base';

export const technologyQuestions: Question[] = [
  {
    id: 'tech1',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Hyper Transfer Markup Language',
      'Home Tool Markup Language'
    ],
    correctAnswer: 'Hyper Text Markup Language',
    explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
  },
  {
    id: 'tech2',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a programming language?',
    options: [
      'Python',
      'HTML',
      'CSS',
      'HTTP'
    ],
    correctAnswer: 'Python',
    explanation: 'Python is a high-level programming language, while HTML and CSS are markup languages, and HTTP is a protocol.'
  },
  {
    id: 'tech3',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    options: [
      'Central Processing Unit',
      'Computer Processing Unit',
      'Central Program Unit',
      'Computer Program Unit'
    ],
    correctAnswer: 'Central Processing Unit',
    explanation: 'CPU stands for Central Processing Unit, which is the primary component of a computer that performs most processing inside a computer.'
  },
  {
    id: 'tech4',
    category: 'Technology',
    difficulty: 'easy',
    question: 'Which of these is a web browser?',
    options: [
      'Chrome',
      'Windows',
      'Linux',
      'MacOS'
    ],
    correctAnswer: 'Chrome',
    explanation: 'Chrome is a web browser developed by Google, while Windows, Linux, and MacOS are operating systems.'
  },
  {
    id: 'tech5',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does URL stand for?',
    options: [
      'Uniform Resource Locator',
      'Universal Resource Link',
      'Uniform Resource Link',
      'Universal Resource Locator'
    ],
    correctAnswer: 'Uniform Resource Locator',
    explanation: 'URL stands for Uniform Resource Locator, which is the address of a specific webpage or file on the Internet.'
  }
]; 