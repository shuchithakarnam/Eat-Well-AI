import React, { useState } from 'react';
import { PieChart, Plus, Trash2 } from 'lucide-react';
import useAuthStore from '../store/authStore';

interface MealEntry {
  id: string;
  name: string;
  calories: number;
  time: string;
}

export default function DietTracker() {
  const { user } = useAuthStore();
  const [meals, setMeals] = useState<MealEntry[]>(() => {
    const stored = localStorage.getItem(`meals_${user?.id}`);
    return stored ? JSON.parse(stored) : [];
  });

  const [newMeal, setNewMeal] = useState({ name: '', calories: '' });

  const addMeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMeal.name || !newMeal.calories) return;

    const meal: MealEntry = {
      id: crypto.randomUUID(),
      name: newMeal.name,
      calories: parseInt(newMeal.calories),
      time: new Date().toISOString(),
    };

    const updatedMeals = [...meals, meal];
    setMeals(updatedMeals);
    localStorage.setItem(`meals_${user?.id}`, JSON.stringify(updatedMeals));
    setNewMeal({ name: '', calories: '' });
  };

  const deleteMeal = (id: string) => {
    const updatedMeals = meals.filter((meal) => meal.id !== id);
    setMeals(updatedMeals);
    localStorage.setItem(`meals_${user?.id}`, JSON.stringify(updatedMeals));
  };

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const remainingCalories = (user?.preferences.calorieGoal || 2000) - totalCalories;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Diet Tracker</h2>
        </div>
        <div className="text-sm text-gray-600">
          Goal: {user?.preferences.calorieGoal || 2000} kcal
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-sm text-green-600">Remaining</div>
          <div className="text-2xl font-bold text-green-700">
            {remainingCalories} kcal
          </div>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <div className="text-sm text-orange-600">Consumed</div>
          <div className="text-2xl font-bold text-orange-700">
            {totalCalories} kcal
          </div>
        </div>
      </div>

      <form onSubmit={addMeal} className="flex gap-2">
        <input
          type="text"
          value={newMeal.name}
          onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
          placeholder="Meal name"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="number"
          value={newMeal.calories}
          onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
          placeholder="Calories"
          className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
        </button>
      </form>

      <div className="space-y-2">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <div className="font-medium text-gray-900">{meal.name}</div>
              <div className="text-sm text-gray-600">{meal.calories} kcal</div>
            </div>
            <button
              onClick={() => deleteMeal(meal.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
