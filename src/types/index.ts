export interface User {
  id: string;
  email: string;
  name: string;
  preferences: {
    dietaryType: 'veg' | 'non-veg';
    calorieGoal: number;
    weeklyPlan: Array<'veg' | 'non-veg'>;
  };
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  calories: number;
  dietaryType: 'veg' | 'non-veg';
  cookingTime: number;
  servings: number;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updatePreferences: (preferences: User['preferences']) => void;
}
