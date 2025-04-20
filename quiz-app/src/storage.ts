interface HighScore {
  score: number;
  totalQuestions: number;
  categories: string[];
  timeSpent: number;
  date: string;
}

interface QuizStats {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  currentStreak: number;
  longestStreak: number;
  totalScore: number;
  averageScore: number;
  lastPlayed: string;
  categoriesPlayed: string[];
  difficultyLevels: {
    easy: number;
    complex: number;
    hard: number;
    'extremely complex': number;
  };
}

export interface Achievement {
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
  categoryStats: { [key: string]: { correct: number; total: number; played: number } };
  preferredCategories: string[];
  streaks: {
    current: number;
    longest: number;
    lastPlayed: string;
  };
  learningProgress: { [key: string]: { correct: number; total: number; lastStudied: string } };
  achievements: Achievement[];
  timeSpent: number;
  currentLifelinesUsed: number;
  quickAnswers: number;
  difficultyStats: {
    [key: string]: {
      played: number;
      correct: number;
      total: number;
    }
  };
  lifelinesUsed: {
    fiftyFifty: number;
    hint: number;
    skip: number;
  };
  weekendQuizzes: number;
  quizzesToday: number;
  perfectScoresInARow: number;
}

const categories = ['Science', 'History', 'Geography', 'Technology', 'Sports', 'Entertainment'];

export class StorageManager {
  private readonly HIGH_SCORES_KEY = 'quiz_high_scores';
  private static readonly STATS_KEY = 'quiz_stats';
  private static readonly ACHIEVEMENTS_KEY = 'quiz_achievements';
  private static readonly QUESTIONS_KEY = 'quiz_questions';
  private readonly MAX_HIGH_SCORES = 10;

  private readonly ACHIEVEMENTS: Achievement[] = [
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
      description: 'Get 100% on a quiz',
      icon: '💯',
      unlocked: false
    },
    {
      id: 'speed_demon',
      name: 'Speed Demon',
      description: 'Complete a quiz in under 2 minutes',
      icon: '⚡',
      unlocked: false
    },
    {
      id: 'category_master',
      name: 'Category Master',
      description: 'Get 100% in any category',
      icon: '🎯',
      unlocked: false
    },
    {
      id: 'lifeline_saver',
      name: 'Lifeline Saver',
      description: 'Complete a quiz without using any lifelines',
      icon: '🛡️',
      unlocked: false
    },
    {
      id: 'streak_master',
      name: 'Streak Master',
      description: 'Maintain a 5-day quiz streak',
      icon: '🔥',
      unlocked: false
    },
    {
      id: 'jack_of_all',
      name: 'Jack of All Trades',
      description: 'Play quizzes in all categories',
      icon: '🎭',
      unlocked: false
    },
    {
      id: 'time_master',
      name: 'Time Master',
      description: 'Answer 10 questions correctly with more than 20 seconds remaining',
      icon: '⏱️',
      unlocked: false
    },
    {
      id: 'difficulty_champion',
      name: 'Difficulty Champion',
      description: 'Complete a quiz with only extremely complex questions',
      icon: '🏅',
      unlocked: false
    },
    {
      id: 'quick_thinker',
      name: 'Quick Thinker',
      description: 'Answer 5 questions correctly within the first 5 seconds',
      icon: '⚡',
      unlocked: false
    },
    {
      id: 'category_explorer',
      name: 'Category Explorer',
      description: 'Play at least 3 quizzes in each category',
      icon: '🗺️',
      unlocked: false
    },
    {
      id: 'consistency_master',
      name: 'Consistency Master',
      description: 'Maintain an average score above 80% for 10 quizzes',
      icon: '📊',
      unlocked: false
    },
    {
      id: 'lifeline_expert',
      name: 'Lifeline Expert',
      description: 'Use all lifelines effectively in a single quiz',
      icon: '🎮',
      unlocked: false
    },
    {
      id: 'night_owl',
      name: 'Night Owl',
      description: 'Complete a quiz between 10 PM and 4 AM',
      icon: '🌙',
      unlocked: false
    },
    {
      id: 'weekend_warrior',
      name: 'Weekend Warrior',
      description: 'Complete 5 quizzes on weekends',
      icon: '🎉',
      unlocked: false
    },
    {
      id: 'early_bird',
      name: 'Early Bird',
      description: 'Complete a quiz between 5 AM and 9 AM',
      icon: '🌅',
      unlocked: false
    },
    {
      id: 'marathon_runner',
      name: 'Marathon Runner',
      description: 'Complete 3 quizzes in a single day',
      icon: '🏃',
      unlocked: false
    },
    {
      id: 'precision_master',
      name: 'Precision Master',
      description: 'Get 5 perfect scores in a row',
      icon: '🎯',
      unlocked: false
    },
    {
      id: 'category_specialist',
      name: 'Category Specialist',
      description: 'Get 90% or higher in a specific category 5 times',
      icon: '📚',
      unlocked: false
    },
    {
      id: 'quiz_legend',
      name: 'Quiz Legend',
      description: 'Complete 100 quizzes',
      icon: '👑',
      unlocked: false
    }
  ];

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

  saveStats(stats: QuizStats): void {
    localStorage.setItem(StorageManager.STATS_KEY, JSON.stringify(stats));
  }

  getStats(): QuizStats {
    const stats = localStorage.getItem(StorageManager.STATS_KEY);
    if (stats) {
      return JSON.parse(stats);
    }
    return {
      totalQuestions: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      currentStreak: 0,
      longestStreak: 0,
      totalScore: 0,
      averageScore: 0,
      lastPlayed: new Date().toISOString(),
      categoriesPlayed: [],
      difficultyLevels: {
        easy: 0,
        complex: 0,
        hard: 0,
        'extremely complex': 0
      }
    };
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
      learningProgress: {},
      timeSpent: 0,
      currentLifelinesUsed: 0,
      quickAnswers: 0,
      difficultyStats: {
        'easy': { played: 0, correct: 0, total: 0 },
        'medium': { played: 0, correct: 0, total: 0 },
        'hard': { played: 0, correct: 0, total: 0 },
        'extremely complex': { played: 0, correct: 0, total: 0 }
      },
      lifelinesUsed: {
        fiftyFifty: 0,
        hint: 0,
        skip: 0
      },
      weekendQuizzes: 0,
      quizzesToday: 0,
      perfectScoresInARow: 0
    };

    const storedStats = localStorage.getItem(StorageManager.STATS_KEY);
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
    const streak = today === lastPlayed ? stats.streaks.current + 1 : 1;
    
    // Update learning progress
    const learningProgress = { ...stats.learningProgress };
    Object.entries(categoryResults).forEach(([category, results]) => {
      if (!learningProgress[category]) {
        learningProgress[category] = {
          correct: 0,
          total: 0,
          lastStudied: today
        };
      }
      learningProgress[category] = {
        correct: learningProgress[category].correct + results.correct,
        total: learningProgress[category].total + results.total,
        lastStudied: today
      };
    });

    // Update category stats
    const categoryStats = this.updateCategoryStats(stats, categoryResults);

    // Calculate new average score
    const newGamesPlayed = stats.gamesPlayed + 1;
    const newTotalQuestions = stats.totalQuestions + totalQuestions;
    const newTotalCorrect = (stats.averageScore * stats.gamesPlayed * stats.totalQuestions) + score;
    const newAverageScore = newTotalCorrect / (newGamesPlayed * newTotalQuestions);

    // Check and unlock achievements
    const achievements = this.checkAchievements(score, totalQuestions, categoryResults, stats.timeSpent);

    const updatedStats: EnhancedStats = {
      gamesPlayed: newGamesPlayed,
      averageScore: newAverageScore,
      totalQuestions: newTotalQuestions,
      categoryStats,
      preferredCategories: [...new Set([...stats.preferredCategories, ...preferredCategories])],
      streaks: {
        current: streak,
        longest: Math.max(streak, stats.streaks.longest),
        lastPlayed: today
      },
      learningProgress,
      achievements,
      timeSpent: stats.timeSpent + score,
      currentLifelinesUsed: stats.currentLifelinesUsed,
      quickAnswers: stats.quickAnswers,
      difficultyStats: stats.difficultyStats,
      lifelinesUsed: stats.lifelinesUsed,
      weekendQuizzes: stats.weekendQuizzes,
      quizzesToday: stats.quizzesToday,
      perfectScoresInARow: stats.perfectScoresInARow
    };

    localStorage.setItem(StorageManager.STATS_KEY, JSON.stringify(updatedStats));
    return updatedStats;
  }

  private getAchievements(): Achievement[] {
    const storedAchievements = localStorage.getItem(StorageManager.ACHIEVEMENTS_KEY);
    if (storedAchievements) {
      return JSON.parse(storedAchievements);
    }
    
    // Initialize with all achievements if none are stored
    localStorage.setItem(StorageManager.ACHIEVEMENTS_KEY, JSON.stringify(this.ACHIEVEMENTS));
    return this.ACHIEVEMENTS;
  }

  private checkAchievements(score: number, totalQuestions: number, categoryResults: { [key: string]: { correct: number, total: number } }, timeSpent: number): Achievement[] {
    const achievements = this.getAchievements();
    const unlockedAchievements: Achievement[] = [];
    const stats = this.getEnhancedStats();
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

    // Check each achievement condition
    achievements.forEach(achievement => {
      if (achievement.unlocked) return;

      let shouldUnlock = false;

      switch (achievement.id) {
        case 'first_win':
          shouldUnlock = stats.gamesPlayed === 1;
          break;
        case 'perfect_score':
          shouldUnlock = score === totalQuestions;
          break;
        case 'speed_demon':
          shouldUnlock = timeSpent < 120; // 2 minutes
          break;
        case 'category_master':
          shouldUnlock = Object.values(categoryResults).some(result => 
            result.correct === result.total && result.total > 0
          );
          break;
        case 'lifeline_saver':
          shouldUnlock = stats.currentLifelinesUsed === 0;
          break;
        case 'streak_master':
          shouldUnlock = stats.streaks.current >= 5;
          break;
        case 'jack_of_all':
          shouldUnlock = Object.keys(stats.categoryStats).length === categories.length;
          break;
        case 'time_master':
          shouldUnlock = stats.quickAnswers >= 10;
          break;
        case 'difficulty_champion':
          shouldUnlock = stats.difficultyStats['extremely complex']?.played > 0 && 
                        stats.difficultyStats['extremely complex']?.correct === stats.difficultyStats['extremely complex']?.total;
          break;
        case 'quick_thinker':
          shouldUnlock = stats.quickAnswers >= 5;
          break;
        case 'category_explorer':
          shouldUnlock = Object.values(stats.categoryStats).every(stat => stat.played >= 3);
          break;
        case 'consistency_master':
          shouldUnlock = stats.averageScore >= 0.8 && stats.gamesPlayed >= 10;
          break;
        case 'lifeline_expert':
          shouldUnlock = stats.lifelinesUsed.fiftyFifty > 0 && 
                        stats.lifelinesUsed.hint > 0 && 
                        stats.lifelinesUsed.skip > 0;
          break;
        case 'night_owl':
          shouldUnlock = currentHour >= 22 || currentHour < 4;
          break;
        case 'weekend_warrior':
          shouldUnlock = isWeekend && stats.weekendQuizzes >= 5;
          break;
        case 'early_bird':
          shouldUnlock = currentHour >= 5 && currentHour < 9;
          break;
        case 'marathon_runner':
          shouldUnlock = stats.quizzesToday >= 3;
          break;
        case 'precision_master':
          shouldUnlock = stats.perfectScoresInARow >= 5;
          break;
        case 'category_specialist':
          shouldUnlock = Object.values(stats.categoryStats).some(stat => 
            stat.correct / stat.total >= 0.9 && stat.played >= 5
          );
          break;
        case 'quiz_legend':
          shouldUnlock = stats.gamesPlayed >= 100;
          break;
      }

      if (shouldUnlock) {
        achievement.unlocked = true;
        achievement.dateUnlocked = new Date().toISOString();
        unlockedAchievements.push(achievement);
      }
    });

    // Save updated achievements to localStorage
    if (unlockedAchievements.length > 0) {
      localStorage.setItem(StorageManager.ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    }

    return unlockedAchievements;
  }

  private updateCategoryStats(stats: EnhancedStats, categoryResults: { [key: string]: { correct: number; total: number } }): { [key: string]: { correct: number; total: number; played: number } } {
    const updatedStats = { ...stats.categoryStats };
    
    Object.entries(categoryResults).forEach(([category, result]) => {
      if (!updatedStats[category]) {
        updatedStats[category] = { correct: 0, total: 0, played: 0 };
      }
      updatedStats[category].correct += result.correct;
      updatedStats[category].total += result.total;
      updatedStats[category].played += 1;
    });
    
    return updatedStats;
  }

  clearAllData() {
    localStorage.removeItem(this.HIGH_SCORES_KEY);
    localStorage.removeItem(StorageManager.STATS_KEY);
    localStorage.removeItem(StorageManager.ACHIEVEMENTS_KEY);
  }

  clearStats() {
    localStorage.removeItem(StorageManager.STATS_KEY);
  }
}

export const storageManager = new StorageManager(); 