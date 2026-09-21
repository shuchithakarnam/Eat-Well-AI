import { create } from "zustand";
import type { AuthState, User } from "../types";

const DEFAULT_PREFERENCES: User["preferences"] = {
  dietaryType: "non-veg",
  calorieGoal: 2000,
  weeklyPlan: Array(7).fill("non-veg"),

  age: 25,
  gender: "other",
  height: 165,
  weight: 60,

  activityLevel: "moderate",
  goal: "maintain",

  allergies: [],
};

const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem("currentUser") || "null"),
  isAuthenticated: !!localStorage.getItem("currentUser"),

  login: async (email: string, password: string) => {
    const storedUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const normalizedEmail = email.trim().toLowerCase();

    const user = storedUsers.find(
      (u: any) =>
        u.email.toLowerCase() === normalizedEmail
    );

    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }

    // Support users created with the older version
    const userWithDefaults = {
      ...user,
      preferences: {
        ...DEFAULT_PREFERENCES,
        ...(user.preferences || {}),
      },
    };

    const { password: _, ...userWithoutPassword } =
      userWithDefaults;

    set({
      user: userWithoutPassword,
      isAuthenticated: true,
    });

    localStorage.setItem(
      "currentUser",
      JSON.stringify(userWithoutPassword)
    );
  },

  register: async (
    email: string,
    password: string,
    name: string
  ) => {
    const storedUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const normalizedEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (
      storedUsers.some(
        (u: any) =>
          u.email.toLowerCase() === normalizedEmail
      )
    ) {
      throw new Error("User already exists");
    }

    const newUser = {
      id: crypto.randomUUID(),
      email: normalizedEmail,
      password,
      name: cleanName,

      preferences: {
        ...DEFAULT_PREFERENCES,
      },
    };

    storedUsers.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(storedUsers)
    );

    const { password: _, ...userWithoutPassword } =
      newUser;

    set({
      user: userWithoutPassword,
      isAuthenticated: true,
    });

    localStorage.setItem(
      "currentUser",
      JSON.stringify(userWithoutPassword)
    );
  },

  updatePreferences: (
    preferences: User["preferences"]
  ) => {
    const currentUser = get().user;

    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      preferences,
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const updatedUsers = users.map((user: any) =>
      user.id === currentUser.id
        ? {
            ...user,
            preferences,
          }
        : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    set({
      user: updatedUser,
    });
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });

    localStorage.removeItem("currentUser");
  },
}));

export default useAuthStore;
