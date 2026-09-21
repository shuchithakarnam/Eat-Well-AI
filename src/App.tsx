import React, { useState } from "react";
import { ChefHat, LogOut } from "lucide-react";

import AuthForm from "./components/AuthForm";
import Home from "./components/home";
import RecipeGenerator from "./components/RecipeGenerator";
import RecipeList from "./components/RecipeList";
import DashboardTabs from "./components/DashboardTabs";

import useAuthStore from "./stores/authStore";

export default function App() {
  const { isAuthenticated, user, logout } = useAuthStore();

  // Controls whether the Login/Signup screen is visible
  const [showAuth, setShowAuth] = useState(false);

  // ==========================================
  // 1. HOME PAGE
  // ==========================================

  if (!isAuthenticated && !showAuth) {
    return (
      <Home
        onGetStarted={() => setShowAuth(true)}
      />
    );
  }

  // ==========================================
  // 2. LOGIN / SIGN UP PAGE
  // ==========================================

  if (!isAuthenticated && showAuth) {
    return (
      <div className="min-h-screen bg-[#fff8fb]">

        {/* Header */}
        <header className="bg-white border-b border-[#f5d5df]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">

              <div className="w-11 h-11 rounded-full bg-[#ffe4ed] flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-[#d6537c]" />
              </div>

              <span className="ml-3 text-2xl font-bold text-[#563344]">
                EatWell<span className="text-[#d6537c]">AI</span>
              </span>

            </div>

            {/* Back button */}
            <button
              onClick={() => setShowAuth(false)}
              className="text-[#d6537c] font-semibold hover:text-[#bd4168] transition"
            >
              ← Back to Home
            </button>

          </div>
        </header>

        {/* Authentication form */}
        <main className="flex justify-center px-6 py-12">

          <AuthForm />

        </main>

      </div>
    );
  }

  // ==========================================
  // 3. AUTHENTICATED DASHBOARD
  // ==========================================

  return (
    <div className="min-h-screen bg-[#fff8fb]">

      {/* Dashboard Header */}
      <header className="bg-white border-b border-[#f5d5df] shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-20 flex items-center justify-between">

            {/* Logo + User */}
            <div className="flex items-center">

              <div className="w-11 h-11 rounded-full bg-[#ffe4ed] flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-[#d6537c]" />
              </div>

              <div className="ml-3">

                <span className="text-2xl font-bold text-[#563344]">
                  EatWell<span className="text-[#d6537c]">AI</span>
                </span>

                {user?.name && (
                  <p className="text-xs text-[#987080]">
                    Welcome, {user.name}
                  </p>
                )}

              </div>

            </div>

            {/* Sign Out */}
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#d6537c] font-semibold hover:bg-[#fff0f5] transition"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>

          </div>

        </div>

      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="space-y-8">

          {/* Meal Planner / Tracker / Preferences */}
          <DashboardTabs />

          {/* AI Recipe Generator */}
          <RecipeGenerator />

          {/* Saved / Generated Recipes */}
          <RecipeList />

        </div>

      </main>

    </div>
  );
}
