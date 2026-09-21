import React from 'react';
import useRecipeStore from '../stores/recipeStore';
import RecipeCard from './RecipeCard';

export default function RecipeList() {
  const { recipes } = useRecipeStore();

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No recipes yet. Generate your first recipe above!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
