import { create } from 'zustand';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Recipe } from '../types';

interface RecipeState {
  recipes: Recipe[];
  isLoading: boolean;
  generateRecipe: (ingredients: string[], dietaryType: 'veg' | 'non-veg') => Promise<Recipe>;
  saveRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const useRecipeStore = create<RecipeState>((set, get) => ({
  recipes: JSON.parse(localStorage.getItem('recipes') || '[]'),
  isLoading: false,

  generateRecipe: async (ingredients: string[], dietaryType: 'veg' | 'non-veg') => {
    set({ isLoading: true });
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      
      const prompt = `Create a detailed recipe using these ingredients: ${ingredients.join(', ')}. 
        The recipe should be ${dietaryType}. Return the response in this JSON format:
        {
          "title": "Recipe Name",
          "ingredients": ["ingredient1", "ingredient2"],
          "instructions": ["step1", "step2"],
          "calories": estimatedCalories,
          "cookingTime": timeInMinutes,
          "servings": numberOfServings
        }`;

      const result = await model.generateContent(prompt);
      const response = result.response;
      const recipeData = JSON.parse(response.text());
      
      const recipe: Recipe = {
        ...recipeData,
        id: crypto.randomUUID(),
        dietaryType,
        createdAt: new Date().toISOString(),
      };

      get().saveRecipe(recipe);
      return recipe;
    } finally {
      set({ isLoading: false });
    }
  },

  saveRecipe: (recipe: Recipe) => {
    set((state) => {
      const recipes = [...state.recipes, recipe];
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes };
    });
  },

  deleteRecipe: (id: string) => {
    set((state) => {
      const recipes = state.recipes.filter((recipe) => recipe.id !== id);
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes };
    });
  },
}));

export default useRecipeStore;
