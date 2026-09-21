import React, { useState } from "react";
import {
  Calendar,
  PieChart,
  User,
} from "lucide-react";

import WeeklyPlanner from "./WeeklyPlanner";
import DietTracker from "./DietTracker";
import UserPreferences from "./UserPreferences";

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("planner");

  const tabs = [
    {
      id: "planner",
      label: "Meal Planner",
      icon: Calendar,
    },
    {
      id: "tracker",
      label: "Diet Tracker",
      icon: PieChart,
    },
    {
      id: "profile",
      label: "Profile & Goals",
      icon: User,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#f5d5df] overflow-hidden">

      <div className="border-b border-[#f5d5df]">
        <nav className="flex overflow-x-auto">

          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`
                flex items-center gap-2
                px-5 sm:px-6
                py-4
                text-sm font-semibold
                whitespace-nowrap
                transition-all duration-200
                border-b-2
                ${
                  activeTab === id
                    ? "border-[#d6537c] text-[#d6537c] bg-[#fff8fb]"
                    : "border-transparent text-[#987080] hover:text-[#d6537c] hover:bg-[#fff8fb]"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}

        </nav>
      </div>

      <div className="p-5 sm:p-6">

        {activeTab === "planner" && (
          <WeeklyPlanner />
        )}

        {activeTab === "tracker" && (
          <DietTracker />
        )}

        {activeTab === "profile" && (
          <UserPreferences />
        )}

      </div>
    </div>
  );
}
