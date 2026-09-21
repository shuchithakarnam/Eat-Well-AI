import React, { useState, useEffect } from "react";
import {
  ChefHat,
  Calendar,
  Calculator,
  Leaf,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  Brain,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-500" />,
      title: "AI-Generated Recipes",
      description:
        "Unique recipes tailored to your preferences and dietary needs",
    },
    {
      icon: <Calculator className="w-8 h-8 text-emerald-500" />,
      title: "Smart Diet & Calorie Tracker",
      description: "Effortlessly track your nutrition with AI precision",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-500" />,
      title: "Weekly Meal Plans",
      description: "Personalized meal schedules that fit your lifestyle",
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: "Veg & Non-Veg Customization",
      description: "Flexible meal options for all dietary preferences",
    },
  ];

  const steps = [
    {
      title: "Sign Up & Set Your Preferences",
      description: "Tell us about your dietary needs and fitness goals",
      image:
        "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Track Your Diet & Calories",
      description: "Monitor your nutrition with our smart AI tracker",
      image:
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Get Weekly AI-Optimized Meal Plans",
      description: "Receive personalized meal plans every week",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      text: "EatWellAI has transformed my approach to healthy eating. The personalized meal plans are incredible!",
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      text: "The AI-powered tracking makes it so easy to maintain my nutrition goals while working long hours.",
    },
    {
      name: "Emma Williams",
      role: "Yoga Instructor",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      text: "As a yoga instructor, I love how EatWellAI aligns with my holistic approach to wellness.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                EatWellAI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Smart Diet Tracker
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Contact Us
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500"
              >
                About Us
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500"
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500"
              >
                Smart Diet Tracker
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Revolutionize Your Nutrition with AI
              </h1>
              <p className="text-xl text-gray-600">
                Personalized recipes, smart calorie tracking, and weekly meal
                plans tailored to your goals.
              </p>

              <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 flex items-center group">
                Get Started Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800"
                alt="Healthy meals"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of nutrition with our AI-powered features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-2xl mx-auto text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                      />
                      <p className="text-xl text-gray-600 mb-6">
                        "{testimonial.text}"
                      </p>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial
                      ? "bg-emerald-500"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <ChefHat className="h-8 w-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold">EatWellAI</span>
              </div>
              <p className="text-gray-400">
                AI-Powered Nutrition for a Healthier You
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 EatWellAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
