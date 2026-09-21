import React, { useState } from "react";
import { Plus, Loader2, Trash2 } from "lucide-react";
import useRecipeStore from "../store/recipeStore";
import useAuthStore from "../store/authStore";

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const { user } = useAuthStore();
  const { generateRecipe, isLoading } = useRecipeStore();

  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.length > 0 && user) {
      await generateRecipe(ingredients, user.preferences.dietaryType);
      setIngredients([]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Generate Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter an ingredient"
          />
          <button
            type="button"
            onClick={handleAddIngredient}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
            >
              <span>{ingredient}</span>
              <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
                className="text-gray-500 hover:text-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={ingredients.length === 0 || isLoading}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Recipe...
            </>
          ) : (
            "Generate Recipe"
          )}
        </button>
      </form>
    </div>
  );
}
