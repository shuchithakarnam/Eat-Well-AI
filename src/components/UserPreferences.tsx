import React, { useState } from 'react';
import { Settings, Save } from 'lucide-react';
import useAuthStore from '../store/authStore';

export default function UserPreferences() {
  const { user, updatePreferences } = useAuthStore();
  const [preferences, setPreferences] = useState({
    dietaryType: user?.preferences.dietaryType || 'non-veg',
    calorieGoal: user?.preferences.calorieGoal || 2000,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    updatePreferences({
      ...user.preferences,
      ...preferences,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Settings className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">User Preferences</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Default Dietary Type
          </label>
          <select
            value={preferences.dietaryType}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                dietaryType: e.target.value as 'veg' | 'non-veg',
              })
            }
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
          >
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-vegetarian</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Daily Calorie Goal
          </label>
          <input
            type="number"
            value={preferences.calorieGoal}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                calorieGoal: parseInt(e.target.value),
              })
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Save className="w-5 h-5" />
          Save Preferences
        </button>
      </form>
    </div>
  );
}
