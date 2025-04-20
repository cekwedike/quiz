export interface Question {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extremely complex';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const questionBank: Question[] = [
  // Science Questions (100)
  {
    id: 'sci1',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Fe', 'Cu'],
    correctAnswer: 'Au',
    explanation: 'Gold is represented by the chemical symbol Au, derived from the Latin word "aurum".'
  },
  {
    id: 'sci2',
    category: 'Science',
    difficulty: 'easy',
    question: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
    correctAnswer: 'Jupiter',
    explanation: 'Jupiter is the largest planet in our solar system, with a diameter of about 86,881 miles.'
  },
  {
    id: 'sci3',
    category: 'Science',
    difficulty: 'medium',
    question: 'What is the process by which plants convert sunlight into energy?',
    options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
    explanation: 'Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen.'
  },
  {
    id: 'sci4',
    category: 'Science',
    difficulty: 'hard',
    question: 'What is the Heisenberg Uncertainty Principle?',
    options: [
      'It is impossible to know both position and momentum of a particle simultaneously',
      'Energy cannot be created or destroyed',
      'Every action has an equal and opposite reaction',
      'The speed of light is constant in a vacuum'
    ],
    correctAnswer: 'It is impossible to know both position and momentum of a particle simultaneously',
    explanation: 'The Heisenberg Uncertainty Principle states that the more precisely the position of a particle is determined, the less precisely its momentum can be known, and vice versa.'
  },
  {
    id: 'sci5',
    category: 'Science',
    difficulty: 'extremely complex',
    question: 'What is the significance of the Higgs boson in the Standard Model of particle physics?',
    options: [
      'It gives mass to elementary particles',
      'It mediates the strong nuclear force',
      'It is responsible for radioactive decay',
      'It explains dark matter'
    ],
    correctAnswer: 'It gives mass to elementary particles',
    explanation: 'The Higgs boson is associated with the Higgs field, which gives mass to elementary particles through the Higgs mechanism.'
  },
  // Add more science questions here...

  // History Questions (100)
  {
    id: 'his1',
    category: 'History',
    difficulty: 'easy',
    question: 'In which year did World War II end?',
    options: ['1945', '1943', '1947', '1941'],
    correctAnswer: '1945',
    explanation: 'World War II ended in 1945 with the surrender of Germany in May and Japan in September.'
  },
  {
    id: 'his2',
    category: 'History',
    difficulty: 'medium',
    question: 'Who was the first President of the United States?',
    options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin'],
    correctAnswer: 'George Washington',
    explanation: 'George Washington served as the first President of the United States from 1789 to 1797.'
  },
  {
    id: 'his3',
    category: 'History',
    difficulty: 'hard',
    question: 'What was the significance of the Treaty of Westphalia in 1648?',
    options: [
      'It ended the Thirty Years\' War and established the modern state system',
      'It marked the beginning of the Renaissance',
      'It established the Holy Roman Empire',
      'It ended the Hundred Years\' War'
    ],
    correctAnswer: 'It ended the Thirty Years\' War and established the modern state system',
    explanation: 'The Treaty of Westphalia ended the Thirty Years\' War and is considered the birth of the modern state system and international law.'
  },
  // Add more history questions here...

  // Geography Questions (100)
  {
    id: 'geo1',
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
    explanation: 'Paris is the capital and largest city of France.'
  },
  {
    id: 'geo2',
    category: 'Geography',
    difficulty: 'medium',
    question: 'Which is the largest desert in the world?',
    options: ['Antarctic Desert', 'Sahara Desert', 'Arabian Desert', 'Gobi Desert'],
    correctAnswer: 'Antarctic Desert',
    explanation: 'The Antarctic Desert is the largest desert in the world, covering about 5.5 million square miles.'
  },
  // Add more geography questions here...

  // Technology Questions (100)
  {
    id: 'tech1',
    category: 'Technology',
    difficulty: 'easy',
    question: 'What does "HTML" stand for?',
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
    difficulty: 'hard',
    question: 'What is the difference between TCP and UDP protocols?',
    options: [
      'TCP is connection-oriented while UDP is connectionless',
      'TCP is faster than UDP',
      'UDP provides error checking while TCP does not',
      'TCP is used for video streaming while UDP is used for web browsing'
    ],
    correctAnswer: 'TCP is connection-oriented while UDP is connectionless',
    explanation: 'TCP (Transmission Control Protocol) is connection-oriented and reliable, while UDP (User Datagram Protocol) is connectionless and faster but less reliable.'
  },
  // Add more technology questions here...

  // Sports Questions (100)
  {
    id: 'spt1',
    category: 'Sports',
    difficulty: 'easy',
    question: 'How many players are there in a standard soccer team?',
    options: ['11', '9', '13', '15'],
    correctAnswer: '11',
    explanation: 'A standard soccer team consists of 11 players, including one goalkeeper.'
  },
  {
    id: 'spt2',
    category: 'Sports',
    difficulty: 'medium',
    question: 'Which country has won the most FIFA World Cup titles?',
    options: ['Brazil', 'Germany', 'Italy', 'Argentina'],
    correctAnswer: 'Brazil',
    explanation: 'Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002).'
  },
  // Add more sports questions here...

  // Entertainment Questions (100)
  {
    id: 'ent1',
    category: 'Entertainment',
    difficulty: 'easy',
    question: 'Who directed the movie "Titanic"?',
    options: ['James Cameron', 'Steven Spielberg', 'Christopher Nolan', 'Martin Scorsese'],
    correctAnswer: 'James Cameron',
    explanation: 'James Cameron directed the 1997 blockbuster movie "Titanic".'
  },
  {
    id: 'ent2',
    category: 'Entertainment',
    difficulty: 'hard',
    question: 'Which composer wrote the "Moonlight Sonata"?',
    options: ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frédéric Chopin'],
    correctAnswer: 'Ludwig van Beethoven',
    explanation: 'Ludwig van Beethoven composed the "Moonlight Sonata" (Piano Sonata No. 14) in 1801.'
  },
  // Add more entertainment questions here...
];

// Helper function to get questions by category and difficulty
export function getQuestionsByCategoryAndDifficulty(
  category: string,
  difficulty: 'easy' | 'medium' | 'hard' | 'extremely complex',
  count: number
): Question[] {
  const filteredQuestions = questionBank.filter(
    q => q.category === category && q.difficulty === difficulty
  );
  
  // Shuffle the questions
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  
  // Return the requested number of questions
  return shuffled.slice(0, count);
}

// Helper function to get random questions for a quiz
export function getRandomQuestionsForQuiz(
  categories: string[],
  questionsPerCategory: number,
  difficultyDistribution: {
    easy: number;
    medium: number;
    hard: number;
    'extremely complex': number;
  }
): Question[] {
  const selectedQuestions: Question[] = [];
  
  categories.forEach(category => {
    Object.entries(difficultyDistribution).forEach(([difficulty, count]) => {
      const questions = getQuestionsByCategoryAndDifficulty(
        category,
        difficulty as 'easy' | 'medium' | 'hard' | 'extremely complex',
        count
      );
      selectedQuestions.push(...questions);
    });
  });
  
  // Shuffle all selected questions
  return selectedQuestions.sort(() => Math.random() - 0.5);
} 