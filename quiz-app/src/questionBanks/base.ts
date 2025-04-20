export interface Question {
  id: string;
  category: string;
  difficulty: 'easy' | 'complex' | 'hard' | 'extremely complex';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

// Helper function to get questions by category and difficulty
export function getQuestionsByCategoryAndDifficulty(
  questions: Question[],
  category: string,
  difficulty: 'easy' | 'complex' | 'hard' | 'extremely complex',
  count: number
): Question[] {
  const filteredQuestions = questions.filter(
    q => q.category === category && q.difficulty === difficulty
  );
  
  // Shuffle the questions and their options
  const shuffled = [...filteredQuestions].map(q => {
    const options = [...q.options];
    const correctAnswer = q.correctAnswer;
    const correctIndex = options.indexOf(correctAnswer);
    
    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Update correct answer position
    const newCorrectIndex = options.indexOf(correctAnswer);
    
    return {
      ...q,
      options,
      correctAnswer: options[newCorrectIndex]
    };
  }).sort(() => Math.random() - 0.5);
  
  // Return the requested number of questions
  return shuffled.slice(0, count);
}

// Helper function to get random questions for a quiz
export function getRandomQuestionsForQuiz(
  questions: Question[],
  categories: string[],
  questionsPerCategory: number,
  difficultyDistribution: {
    easy: number;
    complex: number;
    hard: number;
    'extremely complex': number;
  }
): Question[] {
  const selectedQuestions: Question[] = [];
  
  categories.forEach(category => {
    Object.entries(difficultyDistribution).forEach(([difficulty, count]) => {
      const categoryQuestions = getQuestionsByCategoryAndDifficulty(
        questions,
        category,
        difficulty as 'easy' | 'complex' | 'hard' | 'extremely complex',
        count
      );
      selectedQuestions.push(...categoryQuestions);
    });
  });
  
  // Shuffle all selected questions
  return selectedQuestions.sort(() => Math.random() - 0.5);
} 