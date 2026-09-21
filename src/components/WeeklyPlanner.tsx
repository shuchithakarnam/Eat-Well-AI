import React from 'react';
import { Utensils } from 'lucide-react';
import useAuthStore from '../store/authStore';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function WeeklyPlanner() {
  const { user, updatePreferences } = useAuthStore();
  const weeklyPlan = user?.preferences.weeklyPlan || Array(7).fill('non-veg');

  const handleDietTypeChange = (dayIndex: number, type: 'veg' | 'non-veg') => {
    if (!user) return;
    
    const newPlan = [...weeklyPlan];
    newPlan[dayIndex] = type;
    
    updatePreferences({
      ...user.preferences,
      weeklyPlan: newPlan,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Utensils className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Weekly Meal Plan</h2>
      </div>

      <div className="grid gap-4">
        {DAYS.map((day, index) => (
          <div
            key={day}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <span className="font-medium text-gray-900">{day}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleDietTypeChange(index, 'veg')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  weeklyPlan[index] === 'veg'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-white text-gray-600 hover:bg-green-50'
                }`}
              >
                Veg
              </button>
              <button
                onClick={() => handleDietTypeChange(index, 'non-veg')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  weeklyPlan[index] === 'non-veg'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-white text-gray-600 hover:bg-orange-50'
                }`}
              >
                Non-veg
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
