import React from 'react';
import { Clock, Users, Trash2 } from 'lucide-react';
import type { Recipe } from '../types';
import useRecipeStore from '../stores/recipeStore';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { deleteRecipe } = useRecipeStore();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{recipe.title}</h3>
          <button
            onClick={() => deleteRecipe(recipe.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <span className="px-2 py-1 rounded-full text-xs font-medium capitalize" 
            style={{
              backgroundColor: recipe.dietaryType === 'veg' ? '#E3F5E1' : '#FFF3E3',
              color: recipe.dietaryType === 'veg' ? '#2F7A1F' : '#B45309',
            }}>
            {recipe.dietaryType}
          </span>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Ingredients:</h4>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600">{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Instructions:</h4>
          <ol className="mt-2 list-decimal list-inside space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-600">{step}</li>
            ))}
          </ol>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Estimated calories: <span className="font-semibold">{recipe.calories}</span> kcal
          </p>
        </div>
      </div>
    </div>
  );
}
