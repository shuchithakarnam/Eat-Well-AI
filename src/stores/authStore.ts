import { create } from 'zustand';
import type { AuthState, User } from '../types';

const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem('currentUser') || 'null'),
  isAuthenticated: !!localStorage.getItem('currentUser'),

  login: async (email: string, password: string) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((u: any) => u.email === email);

    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }

    const { password: _, ...userWithoutPassword } = user;
    set({ user: userWithoutPassword, isAuthenticated: true });
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
  },

  register: async (email: string, password: string, name: string) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (storedUsers.some((u: any) => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser = {
      id: crypto.randomUUID(),
      email,
      password,
      name,
      preferences: {
        dietaryType: 'non-veg',
        calorieGoal: 2000,
        weeklyPlan: Array(7).fill('non-veg'),
      },
    };

    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    const { password: _, ...userWithoutPassword } = newUser;
    set({ user: userWithoutPassword, isAuthenticated: true });
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
  },

  updatePreferences: (preferences: User['preferences']) => {
    const currentUser = get().user;
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      preferences,
    };

    // Update local storage
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    // Update users array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((user: any) =>
      user.id === currentUser.id
        ? { ...user, preferences }
        : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Update state
    set({ user: updatedUser });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('currentUser');
  },
}));

export default useAuthStore;
