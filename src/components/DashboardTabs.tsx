import React, { useState } from "react";
import {
  Calendar,
  Settings,
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
    {
      id: "preferences",
      label: "Preferences",
      icon: Settings,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#f5d5df] overflow-hidden">

      {/* ================= TABS ================= */}
      <div className="border-b border-[#f5d5df]">
        <nav className="flex overflow-x-auto">

          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`
                flex
                items-center
                gap-2
                px-5
                sm:px-6
                py-4
                text-sm
                font-semibold
                whitespace-nowrap
                transition-all
                duration-200
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

      {/* ================= CONTENT ================= */}
      <div className="p-5 sm:p-6">

        {/* Meal Planner */}
        {activeTab === "planner" && (
          <WeeklyPlanner />
        )}

        {/* Diet Tracker */}
        {activeTab === "tracker" && (
          <DietTracker />
        )}

        {/* Profile & Goals */}
        {activeTab === "profile" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#563344]">
                Your Profile & Goals
              </h2>

              <p className="mt-1 text-sm text-[#987080]">
                Tell EatWellAI about yourself so we can personalize your
                nutrition recommendations.
              </p>
            </div>

            <UserPreferences />
          </div>
        )}

        {/* Preferences */}
        {activeTab === "preferences" && (
          <UserPreferences />
        )}

      </div>
    </div>
  );
}
