import React from "react";
import { ChefHat, LogOut } from "lucide-react";
import AuthForm from "./components/AuthForm";
import RecipeGenerator from "./components/RecipeGenerator";
import RecipeList from "./components/RecipeList";
import DashboardTabs from "./components/DashboardTabs";
import useAuthStore from "./store/authStore";
import Home from "./components/home";
export default function App() {
  const { isAuthenticated, user, logout } = useAuthStore();

  if (!isAuthenticated) {
    return <Home />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome, {user?.name}!
              </h1>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <DashboardTabs />
          <RecipeGenerator />
          <RecipeList />
        </div>
      </main>
    </div>
  );
}
