import { Question } from './base';
import { technologyQuestions } from './technology';
import { historyQuestions } from './history';
import { geographyQuestions } from './geography';

export const allQuestions: Question[] = [
  ...technologyQuestions,
  ...historyQuestions,
  ...geographyQuestions
];

export {
  technologyQuestions,
  historyQuestions,
  geographyQuestions
}; 