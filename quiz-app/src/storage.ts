interface HighScore {
  score: number;
  totalQuestions: number;
  categories: string[];
  timeSpent: number;
  date: string;
}

interface QuizStats {
  gamesPlayed: number;
  totalCorrect: number;
  totalQuestions: number;
  averageScore: number;
  categoryStats: {
    [key: string]: {
      correct: number;
      total: number;
    };
  };
  preferredCategories: string[];
}

class StorageManager {
  private readonly HIGH_SCORES_KEY = 'quiz_high_scores';
  private readonly STATS_KEY = 'quiz_stats';
  private readonly MAX_HIGH_SCORES = 10;

  getHighScores(): HighScore[] {
    const scores = localStorage.getItem(this.HIGH_SCORES_KEY);
    return scores ? JSON.parse(scores) : [];
  }

  addHighScore(score: HighScore) {
    const scores = this.getHighScores();
    scores.push(score);
    scores.sort((a, b) => (b.score / b.totalQuestions) - (a.score / a.totalQuestions));
    localStorage.setItem(this.HIGH_SCORES_KEY, JSON.stringify(scores.slice(0, this.MAX_HIGH_SCORES)));
  }

  getStats(): QuizStats {
    const stats = localStorage.getItem(this.STATS_KEY);
    return stats ? JSON.parse(stats) : {
      gamesPlayed: 0,
      totalCorrect: 0,
      totalQuestions: 0,
      averageScore: 0,
      categoryStats: {},
      preferredCategories: []
    };
  }

  updateStats(score: number, totalQuestions: number, categoryResults: { [key: string]: { correct: number, total: number } }, selectedCategories: string[]) {
    const stats = this.getStats();
    
    // Update general stats
    stats.gamesPlayed++;
    stats.totalCorrect += score;
    stats.totalQuestions += totalQuestions;
    stats.averageScore = stats.totalCorrect / stats.totalQuestions;

    // Update category stats
    Object.entries(categoryResults).forEach(([category, results]) => {
      if (!stats.categoryStats[category]) {
        stats.categoryStats[category] = { correct: 0, total: 0 };
      }
      stats.categoryStats[category].correct += results.correct;
      stats.categoryStats[category].total += results.total;
    });

    // Update preferred categories
    if (selectedCategories.length > 0) {
      stats.preferredCategories = selectedCategories;
    }

    localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
  }

  clearAllData() {
    localStorage.removeItem(this.HIGH_SCORES_KEY);
    localStorage.removeItem(this.STATS_KEY);
  }

  clearStats() {
    localStorage.removeItem(this.STATS_KEY);
  }
}

export const storageManager = new StorageManager(); 