import React, { useEffect, useState } from "react";
import {
  User,
  Target,
  Activity,
  Utensils,
  Save,
  Check,
} from "lucide-react";

import useAuthStore from "../stores/authStore";

type Preferences = {
  dietaryType: "veg" | "non-veg";
  calorieGoal: number;
  weeklyPlan: Array<"veg" | "non-veg">;

  age: number;
  gender: "male" | "female" | "other";
  height: number;
  weight: number;

  activityLevel:
    | "sedentary"
    | "light"
    | "moderate"
    | "active"
    | "very-active";

  goal: "lose" | "maintain" | "gain";

  allergies: string[];
};

const allergyOptions = [
  "Nuts",
  "Dairy",
  "Eggs",
  "Gluten",
  "Soy",
  "Seafood",
];

export default function UserPreferences() {
  const { user, updatePreferences } = useAuthStore();

  const [preferences, setPreferences] = useState<Preferences>({
    dietaryType:
      user?.preferences?.dietaryType || "non-veg",

    calorieGoal:
      user?.preferences?.calorieGoal || 2000,

    weeklyPlan:
      user?.preferences?.weeklyPlan ||
      Array(7).fill("non-veg"),

    age:
      user?.preferences?.age || 25,

    gender:
      user?.preferences?.gender || "other",

    height:
      user?.preferences?.height || 165,

    weight:
      user?.preferences?.weight || 60,

    activityLevel:
      user?.preferences?.activityLevel || "moderate",

    goal:
      user?.preferences?.goal || "maintain",

    allergies:
      user?.preferences?.allergies || [],
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!user) return;

    setPreferences({
      dietaryType:
        user.preferences?.dietaryType || "non-veg",

      calorieGoal:
        user.preferences?.calorieGoal || 2000,

      weeklyPlan:
        user.preferences?.weeklyPlan ||
        Array(7).fill("non-veg"),

      age:
        user.preferences?.age || 25,

      gender:
        user.preferences?.gender || "other",

      height:
        user.preferences?.height || 165,

      weight:
        user.preferences?.weight || 60,

      activityLevel:
        user.preferences?.activityLevel ||
        "moderate",

      goal:
        user.preferences?.goal || "maintain",

      allergies:
        user.preferences?.allergies || [],
    });
  }, [user]);

  const updateField = <K extends keyof Preferences>(
    field: K,
    value: Preferences[K]
  ) => {
    setPreferences((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  };

  const toggleAllergy = (allergy: string) => {
    setPreferences((previous) => ({
      ...previous,
      allergies: previous.allergies.includes(allergy)
        ? previous.allergies.filter(
            (item) => item !== allergy
          )
        : [...previous.allergies, allergy],
    }));

    setSaved(false);
  };

  const calculateCalories = () => {
    const { age, gender, height, weight, activityLevel, goal } =
      preferences;

    if (!age || !height || !weight) return 2000;

    let bmr: number;

    if (gender === "male") {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        5;
    } else {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age -
        161;
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      "very-active": 1.9,
    };

    let calories =
      bmr * activityMultipliers[activityLevel];

    if (goal === "lose") {
      calories -= 400;
    }

    if (goal === "gain") {
      calories += 250;
    }

    return Math.max(1200, Math.round(calories));
  };

  const calculateBMI = () => {
    if (!preferences.height || !preferences.weight) {
      return 0;
    }

    const heightInMeters =
      preferences.height / 100;

    return (
      preferences.weight /
      (heightInMeters * heightInMeters)
    );
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!user) return;

    const calculatedCalories =
      calculateCalories();

    const updatedPreferences = {
      ...preferences,
      calorieGoal: calculatedCalories,
    };

    updatePreferences(updatedPreferences);

    setPreferences(updatedPreferences);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const bmi = calculateBMI();

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#ffe4ed] flex items-center justify-center">
            <User className="w-5 h-5 text-[#d6537c]" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#563344]">
              Profile & Nutrition Goals
            </h2>

            <p className="text-sm text-[#987080]">
              Personalize EatWellAI to match your lifestyle.
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        {/* Personal Information */}
        <section className="rounded-2xl border border-[#f5d5df] p-5 sm:p-6 bg-[#fffafb]">

          <div className="flex items-center gap-2 mb-5">
            <User className="w-5 h-5 text-[#d6537c]" />

            <h3 className="text-lg font-bold text-[#563344]">
              Personal Information
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-[#563344] mb-2">
                Age
              </label>

              <input
                type="number"
                min="13"
                max="100"
                value={preferences.age}
                onChange={(e) =>
                  updateField(
                    "age",
                    Number(e.target.value)
                  )
                }
                className="w-full px-4 py-3 border border-[#e9c6d2] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f3b4c8] focus:border-[#d6537c]"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-[#563344] mb-2">
                Gender
              </label>

              <select
                value={preferences.gender}
                onChange={(e) =>
                  updateField(
                    "gender",
                    e.target.value as Preferences["gender"]
                  )
                }
                className="w-full px-4 py-3 border border-[#e9c6d2] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f3b4c8]"
              >
                <option value="female">
                  Female
                </option>

                <option value="male">
                  Male
                </option>

                <option value="other">
                  Prefer not to say
                </option>
              </select>
            </div>

            {/* Height */}
            <div>
              <label className="block text-sm font-semibold text-[#563344] mb-2">
                Height (cm)
              </label>

              <input
                type="number"
                min="100"
                max="250"
                value={preferences.height}
                onChange={(e) =>
                  updateField(
                    "height",
                    Number(e.target.value)
                  )
                }
                className="w-full px-4 py-3 border border-[#e9c6d2] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f3b4c8]"
                required
              />
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-semibold text-[#563344] mb-2">
                Weight (kg)
              </label>

              <input
                type="number"
                min="25"
                max="300"
                step="0.1"
                value={preferences.weight}
                onChange={(e) =>
                  updateField(
                    "weight",
                    Number(e.target.value)
                  )
                }
                className="w-full px-4 py-3 border border-[#e9c6d2] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f3b4c8]"
                required
              />
            </div>

          </div>
        </section>

        {/* Goal */}
        <section className="rounded-2xl border border-[#f5d5df] p-5 sm:p-6">

          <div className="flex items-center gap-2 mb-5">
            <Target className="w-5 h-5 text-[#d6537c]" />

            <h3 className="text-lg font-bold text-[#563344]">
              Your Goal
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {[
              {
                value: "lose",
                title: "Lose Weight",
                description:
                  "Create a moderate calorie deficit",
              },
              {
                value: "maintain",
                title: "Maintain Weight",
                description:
                  "Maintain your current weight",
              },
              {
                value: "gain",
                title: "Gain Weight",
                description:
                  "Support gradual weight gain",
              },
            ].map((option) => (
              <button
                type="button"
                key={option.value}
                onClick={() =>
                  updateField(
                    "goal",
                    option.value as Preferences["goal"]
                  )
                }
                className={`text-left p-4 rounded-xl border-2 transition ${
                  preferences.goal === option.value
                    ? "border-[#d6537c] bg-[#fff0f5]"
                    : "border-[#f1d8e0] hover:border-[#e8a8bd]"
                }`}
              >
                <div className="font-semibold text-[#563344]">
                  {option.title}
                </div>

                <div className="mt-1 text-xs text-[#987080]">
                  {option.description}
                </div>
              </button>
            ))}

          </div>
        </section>

        {/* Activity */}
        <section className="rounded-2xl border border-[#f5d5df] p-5 sm:p-6">

          <div className="flex items-center gap-2 mb-5">
            <Activity className="w-5 h-5 text-[#d6537c]" />

            <h3 className="text-lg font-bold text-[#563344]">
              Activity Level
            </h3>
          </div>

          <select
            value={preferences.activityLevel}
            onChange={(e) =>
              updateField(
                "activityLevel",
                e.target.value as Preferences["activityLevel"]
              )
            }
            className="w-full px-4 py-3 border border-[#e9c6d2] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f3b4c8]"
          >
            <option value="sedentary">
              Sedentary — Little or no exercise
            </option>

            <option value="light">
              Lightly Active — Exercise 1–3 days/week
            </option>

            <option value="moderate">
              Moderately Active — Exercise 3–5 days/week
            </option>

            <option value="active">
              Very Active — Exercise 6–7 days/week
            </option>

            <option value="very-active">
              Extremely Active — Intense training
            </option>
          </select>
        </section>

        {/* Food Preferences */}
        <section className="rounded-2xl border border-[#f5d5df] p-5 sm:p-6">

          <div className="flex items-center gap-2 mb-5">
            <Utensils className="w-5 h-5 text-[#d6537c]" />

            <h3 className="text-lg font-bold text-[#563344]">
              Food Preferences
            </h3>
          </div>

          <label className="block text-sm font-semibold text-[#563344] mb-2">
            Dietary Type
          </label>

          <select
            value={preferences.dietaryType}
            onChange={(e) =>
              updateField(
                "dietaryType",
                e.target.value as "veg" | "non-veg"
              )
            }
            className="w-full px-4 py-3 border border-[#e9c6d2] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f3b4c8]"
          >
            <option value="veg">
              Vegetarian
            </option>

            <option value="non-veg">
              Non-vegetarian
            </option>
          </select>

          {/* Allergies */}
          <div className="mt-6">

            <label className="block text-sm font-semibold text-[#563344] mb-3">
              Allergies
            </label>

            <div className="flex flex-wrap gap-3">

              {allergyOptions.map((allergy) => {
                const selected =
                  preferences.allergies.includes(
                    allergy
                  );

                return (
                  <button
                    type="button"
                    key={allergy}
                    onClick={() =>
                      toggleAllergy(allergy)
                    }
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                      selected
                        ? "bg-[#d6537c] border-[#d6537c] text-white"
                        : "bg-white border-[#e9c6d2] text-[#765364] hover:border-[#d6537c]"
                    }`}
                  >
                    {selected && (
                      <Check className="inline w-4 h-4 mr-1" />
                    )}

                    {allergy}
                  </button>
                );
              })}

            </div>
          </div>
        </section>

        {/* Nutrition Summary */}
        <section className="rounded-2xl bg-[#fff0f5] border border-[#f5d5df] p-5 sm:p-6">

          <h3 className="text-lg font-bold text-[#563344] mb-5">
            Your Nutrition Summary
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-4">
              <p className="text-xs text-[#987080]">
                Estimated BMI
              </p>

              <p className="mt-1 text-2xl font-bold text-[#d6537c]">
                {bmi > 0
                  ? bmi.toFixed(1)
                  : "--"}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-xs text-[#987080]">
                Daily Calories
              </p>

              <p className="mt-1 text-2xl font-bold text-[#d6537c]">
                {calculateCalories()}
              </p>

              <p className="text-xs text-[#987080]">
                kcal/day
              </p>
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-xs text-[#987080]">
                Goal
              </p>

              <p className="mt-1 text-xl font-bold text-[#563344] capitalize">
                {preferences.goal}
              </p>
            </div>

          </div>

          <p className="mt-4 text-xs text-[#987080]">
            These calculations are estimates intended for
            general nutrition planning and may not reflect
            your individual medical or dietary needs.
          </p>
        </section>

        {/* Save */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-[#d6537c] hover:bg-[#bd4168] transition shadow-sm"
        >
          {saved ? (
            <>
              <Check className="w-5 h-5" />
              Profile Saved
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Profile & Nutrition Goals
            </>
          )}
        </button>

      </form>
    </div>
  );
}
