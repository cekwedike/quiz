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

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  dateUnlocked?: string;
}

interface EnhancedStats {
  gamesPlayed: number;
  averageScore: number;
  totalQuestions: number;
  categoryStats: { [key: string]: { correct: number; total: number } };
  preferredCategories: string[];
  achievements: Achievement[];
  streaks: {
    current: number;
    longest: number;
    lastPlayed: string;
  };
  learningProgress: {
    [category: string]: {
      correct: number;
      total: number;
      lastStudied: string;
    }
  };
}

class StorageManager {
  private readonly HIGH_SCORES_KEY = 'quiz_high_scores';
  private readonly STATS_KEY = 'quiz_stats';
  private readonly ACHIEVEMENTS_KEY = 'quiz_achievements';
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

  getEnhancedStats(): EnhancedStats {
    const stats = this.getStats();
    const achievements = this.getAchievements();
    const defaultStats: EnhancedStats = {
      gamesPlayed: 0,
      averageScore: 0,
      totalQuestions: 0,
      categoryStats: {},
      preferredCategories: [],
      achievements: achievements,
      streaks: {
        current: 0,
        longest: 0,
        lastPlayed: new Date().toISOString()
      },
      learningProgress: {}
    };

    const storedStats = localStorage.getItem(this.STATS_KEY);
    return storedStats ? { ...defaultStats, ...JSON.parse(storedStats), achievements } : defaultStats;
  }

  updateEnhancedStats(
    score: number,
    totalQuestions: number,
    categoryResults: { [key: string]: { correct: number; total: number } },
    preferredCategories: string[]
  ) {
    const stats = this.getEnhancedStats();
    const today = new Date().toISOString().split('T')[0];
    const lastPlayed = new Date(stats.streaks.lastPlayed).toISOString().split('T')[0];
    
    // Update streak
    const streak = today === lastPlayed ? stats.streaks.current : stats.streaks.current + 1;
    
    // Update learning progress
    const learningProgress = { ...stats.learningProgress };
    Object.entries(categoryResults).forEach(([category, results]) => {
      learningProgress[category] = {
        correct: (learningProgress[category]?.correct || 0) + results.correct,
        total: (learningProgress[category]?.total || 0) + results.total,
        lastStudied: today
      };
    });

    // Check and unlock achievements
    const achievements = this.checkAchievements({
      ...stats,
      gamesPlayed: stats.gamesPlayed + 1,
      averageScore: (stats.averageScore * stats.gamesPlayed + score) / (stats.gamesPlayed + 1),
      totalQuestions: stats.totalQuestions + totalQuestions,
      categoryStats: this.mergeCategoryStats(stats.categoryStats, categoryResults),
      preferredCategories: [...new Set([...stats.preferredCategories, ...preferredCategories])],
      streaks: {
        current: streak,
        longest: Math.max(streak, stats.streaks.longest),
        lastPlayed: today
      },
      learningProgress
    });

    const updatedStats: EnhancedStats = {
      ...stats,
      gamesPlayed: stats.gamesPlayed + 1,
      averageScore: (stats.averageScore * stats.gamesPlayed + score) / (stats.gamesPlayed + 1),
      totalQuestions: stats.totalQuestions + totalQuestions,
      categoryStats: this.mergeCategoryStats(stats.categoryStats, categoryResults),
      preferredCategories: [...new Set([...stats.preferredCategories, ...preferredCategories])],
      streaks: {
        current: streak,
        longest: Math.max(streak, stats.streaks.longest),
        lastPlayed: today
      },
      learningProgress,
      achievements
    };

    localStorage.setItem(this.STATS_KEY, JSON.stringify(updatedStats));
  }

  private getAchievements(): Achievement[] {
    const defaultAchievements: Achievement[] = [
      {
        id: 'first_win',
        name: 'First Victory',
        description: 'Complete your first quiz',
        icon: '🏆',
        unlocked: false
      },
      {
        id: 'perfect_score',
        name: 'Perfect Score',
        description: 'Get all questions correct in a quiz',
        icon: '💯',
        unlocked: false
      },
      {
        id: 'category_master',
        name: 'Category Master',
        description: 'Achieve 100% in any category',
        icon: '🎯',
        unlocked: false
      },
      {
        id: 'streak_7',
        name: 'Weekly Warrior',
        description: 'Maintain a 7-day streak',
        icon: '🔥',
        unlocked: false
      },
      {
        id: 'lifeline_saver',
        name: 'Lifeline Saver',
        description: 'Complete a quiz without using any lifelines',
        icon: '🛡️',
        unlocked: false
      }
    ];

    const storedAchievements = localStorage.getItem(this.ACHIEVEMENTS_KEY);
    return storedAchievements ? JSON.parse(storedAchievements) : defaultAchievements;
  }

  private checkAchievements(stats: EnhancedStats): Achievement[] {
    const achievements = stats.achievements;
    
    // First Victory
    if (stats.gamesPlayed > 0) {
      this.unlockAchievement(achievements, 'first_win');
    }

    // Perfect Score
    if (stats.categoryStats) {
      Object.values(stats.categoryStats).forEach(category => {
        if (category.correct === category.total && category.total > 0) {
          this.unlockAchievement(achievements, 'perfect_score');
        }
      });
    }

    // Category Master
    Object.entries(stats.learningProgress).forEach(([category, progress]) => {
      if (progress.correct === progress.total && progress.total > 0) {
        this.unlockAchievement(achievements, 'category_master');
      }
    });

    // Weekly Warrior
    if (stats.streaks.current >= 7) {
      this.unlockAchievement(achievements, 'streak_7');
    }

    localStorage.setItem(this.ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    return achievements;
  }

  private unlockAchievement(achievements: Achievement[], id: string) {
    const achievement = achievements.find(a => a.id === id);
    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true;
      achievement.dateUnlocked = new Date().toISOString();
    }
  }

  private mergeCategoryStats(
    existing: { [key: string]: { correct: number; total: number } },
    newResults: { [key: string]: { correct: number; total: number } }
  ): { [key: string]: { correct: number; total: number } } {
    const merged = { ...existing };
    Object.entries(newResults).forEach(([category, results]) => {
      merged[category] = {
        correct: (merged[category]?.correct || 0) + results.correct,
        total: (merged[category]?.total || 0) + results.total
      };
    });
    return merged;
  }

  clearAllData() {
    localStorage.removeItem(this.HIGH_SCORES_KEY);
    localStorage.removeItem(this.STATS_KEY);
    localStorage.removeItem(this.ACHIEVEMENTS_KEY);
  }

  clearStats() {
    localStorage.removeItem(this.STATS_KEY);
  }
}

export const storageManager = new StorageManager(); 