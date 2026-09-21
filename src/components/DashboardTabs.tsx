import React, { useState } from 'react';
import { Calendar, Settings, PieChart } from 'lucide-react';
import WeeklyPlanner from './WeeklyPlanner';
import DietTracker from './DietTracker';
import UserPreferences from './UserPreferences';

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState('planner');

  const tabs = [
    { id: 'planner', label: 'Meal Planner', icon: Calendar },
    { id: 'tracker', label: 'Diet Tracker', icon: PieChart },
    { id: 'preferences', label: 'Preferences', icon: Settings },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium ${
                activeTab === id
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'planner' && <WeeklyPlanner />}
        {activeTab === 'tracker' && <DietTracker />}
        {activeTab === 'preferences' && <UserPreferences />}
      </div>
    </div>
  );
}
