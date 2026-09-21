export interface UserPreferences {
  dietaryType: "veg" | "non-veg";
  calorieGoal: number;
  weeklyPlan: Array<"veg" | "non-veg">;

  // Personal information
  age: number;
  gender: "male" | "female" | "other";
  height: number; // cm
  weight: number; // kg

  // Nutrition goals
  activityLevel:
    | "sedentary"
    | "light"
    | "moderate"
    | "active"
    | "very-active";

  goal: "lose" | "maintain" | "gain";

  // Food preferences
  allergies: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  calories: number;
  dietaryType: "veg" | "non-veg";
  cookingTime: number;
  servings: number;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  login: (email: string, password: string) => Promise<void>;

  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;

  logout: () => void;

  updatePreferences: (
    preferences: UserPreferences
  ) => void;
}
