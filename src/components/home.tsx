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
  Heart,
  Sparkles,
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
      icon: <Brain className="w-7 h-7" />,
      title: "AI-Generated Recipes",
      description:
        "Unique recipes tailored to your preferences and dietary needs",
    },
    {
      icon: <Calculator className="w-7 h-7" />,
      title: "Smart Diet & Calorie Tracker",
      description: "Effortlessly track your nutrition with AI precision",
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Weekly Meal Plans",
      description: "Personalized meal schedules that fit your lifestyle",
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Veg & Non-Veg Customization",
      description: "Flexible meal options for all dietary preferences",
    },
  ];

  const steps = [
    {
      title: "Sign Up & Set Your Preferences",
      description:
        "Tell us about your dietary needs and fitness goals",
      image:
        "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Track Your Diet & Calories",
      description:
        "Monitor your nutrition with our smart AI tracker",
      image:
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Get Weekly AI-Optimized Meal Plans",
      description:
        "Receive personalized meal plans every week",
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
      text:
        "EatWellAI has transformed my approach to healthy eating. The personalized meal plans are incredible!",
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      text:
        "The AI-powered tracking makes it so easy to maintain my nutrition goals while working long hours.",
    },
    {
      name: "Emma Williams",
      role: "Yoga Instructor",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      text:
        "As a yoga instructor, I love how EatWellAI aligns with my holistic approach to wellness.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff8fb] text-[#563344]">

      {/* ================= NAVIGATION ================= */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#f7dce6] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            {/* Logo */}
            <div className="flex items-center">
              <div className="w-11 h-11 rounded-full bg-[#ffe4ed] flex items-center justify-center">
                <ChefHat className="h-6 w-6 text-[#d6537c]" />
              </div>

              <span className="ml-3 text-2xl font-bold text-[#563344] tracking-tight">
                EatWell<span className="text-[#d6537c]">AI</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-[#d6537c] font-semibold hover:text-[#bd4168] transition-colors"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-[#765566] hover:text-[#d6537c] transition-colors"
              >
                About Us
              </a>

              <a
                href="#features"
                className="text-[#765566] hover:text-[#d6537c] transition-colors"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="text-[#765566] hover:text-[#d6537c] transition-colors"
              >
                Smart Diet Tracker
              </a>

              <a
                href="#contact"
                className="text-[#765566] hover:text-[#d6537c] transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#d6537c]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#f7dce6]">
            <div className="px-4 pt-3 pb-4 space-y-1">

              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-[#d6537c] bg-[#fff0f5]"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-[#765566] hover:bg-[#fff0f5]"
              >
                About Us
              </a>

              <a
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-[#765566] hover:bg-[#fff0f5]"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-[#765566] hover:bg-[#fff0f5]"
              >
                Smart Diet Tracker
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-[#765566] hover:bg-[#fff0f5]"
              >
                Contact Us
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fff0f5] via-[#fff7fa] to-[#ffeef4] relative overflow-hidden"
      >

        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#ffdce8] rounded-full opacity-40" />
        <div className="absolute top-40 -right-32 w-80 h-80 bg-[#ffe3ed] rounded-full opacity-40" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Hero Text */}
            <div className="space-y-7">

              <div className="flex items-center gap-2 text-[#d6537c] font-medium italic">
                <Sparkles className="w-5 h-5" />
                <span>Good Food ♥ Better You</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-[#563344] leading-tight">

                Revolutionize Your{" "}

                <span className="text-[#d6537c] italic">
                  Nutrition
                </span>{" "}

                with AI

              </h1>

              <p className="text-lg md:text-xl text-[#765566] max-w-xl leading-relaxed">
                Personalized recipes, smart calorie tracking, and weekly
                meal plans tailored to your goals.
              </p>

              <button
                className="
                  bg-[#d6537c]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  shadow-lg
                  shadow-[#d6537c]/20
                  hover:bg-[#c5426c]
                  hover:scale-105
                  transition-all
                  duration-300
                  flex
                  items-center
                  group
                "
              >
                Get Started Now

                <ArrowRight
                  className="
                    ml-2
                    group-hover:translate-x-1
                    transition-transform
                  "
                />
              </button>

            </div>

            {/* Hero Image */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800"
                alt="Healthy meals"
                className="
                  rounded-[2rem]
                  shadow-2xl
                  border-4
                  border-white
                  w-full
                  object-cover
                "
              />

              {/* Pink overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d6537c]/10 to-transparent rounded-[2rem]" />

              {/* Decorative heart */}
              <div className="absolute -top-5 -right-5 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Heart className="w-7 h-7 text-[#d6537c] fill-[#ffd6e2]" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff8fb]"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <div className="flex justify-center items-center gap-3 mb-3">
              <span className="h-px w-12 bg-[#f1a9bd]" />
              <Heart className="w-5 h-5 text-[#d6537c] fill-[#ffd6e2]" />
              <span className="h-px w-12 bg-[#f1a9bd]" />
            </div>

            <h2 className="text-4xl font-bold text-[#563344] mb-4">
              Powerful Features
            </h2>

            <p className="text-[#765566] max-w-2xl mx-auto">
              Experience the future of nutrition with our AI-powered features
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  p-7
                  bg-white
                  rounded-3xl
                  border
                  border-[#f5d5df]
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  group
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#ffe4ed]
                    flex
                    items-center
                    justify-center
                    mb-5
                    text-[#d6537c]
                    group-hover:bg-[#d6537c]
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#563344]">
                  {feature.title}
                </h3>

                <p className="text-[#765566] leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-5 text-[#d6537c] text-xl">
                  ♡
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff0f5]"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <div className="flex justify-center items-center gap-3 mb-3">
              <span className="h-px w-12 bg-[#f1a9bd]" />
              <Sparkles className="w-5 h-5 text-[#d6537c]" />
              <span className="h-px w-12 bg-[#f1a9bd]" />
            </div>

            <h2 className="text-4xl font-bold text-[#563344] mb-4">
              How It Works
            </h2>

            <p className="text-[#765566] max-w-2xl mx-auto">
              Your journey toward smarter and healthier eating starts here.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >

                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">

                  <img
                    src={step.image}
                    alt={step.title}
                    className="
                      rounded-3xl
                      object-cover
                      w-full
                      h-64
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#563344]/20 to-transparent" />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      w-11
                      h-11
                      bg-[#d6537c]
                      text-white
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-bold
                      shadow-lg
                    "
                  >
                    {index + 1}
                  </div>

                </div>

                <h3 className="text-xl font-bold mb-2 text-[#563344]">
                  {step.title}
                </h3>

                <p className="text-[#765566] leading-relaxed">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff8fb]"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <div className="flex justify-center items-center gap-3 mb-3">
              <Heart className="w-5 h-5 text-[#d6537c] fill-[#ffd6e2]" />
            </div>

            <h2 className="text-4xl font-bold text-[#563344] mb-4">
              What Our Users Say
            </h2>

            <p className="text-[#765566]">
              Real experiences from people using EatWellAI.
            </p>

          </div>

          <div className="relative">

            <div className="overflow-hidden">

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >

                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >

                    <div
                      className="
                        max-w-2xl
                        mx-auto
                        text-center
                        bg-white
                        border
                        border-[#f5d5df]
                        rounded-3xl
                        p-10
                        shadow-sm
                      "
                    >

                      <div className="relative inline-block">

                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="
                            w-20
                            h-20
                            rounded-full
                            mx-auto
                            mb-6
                            object-cover
                            border-4
                            border-[#ffe1eb]
                          "
                        />

                        <div className="absolute -right-2 bottom-5 w-7 h-7 bg-[#d6537c] rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4 text-white fill-white" />
                        </div>

                      </div>

                      <p className="text-xl text-[#765566] mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      <h4 className="font-bold text-[#563344]">
                        {testimonial.name}
                      </h4>

                      <p className="text-[#d6537c]">
                        {testimonial.role}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* Testimonial dots */}
            <div className="flex justify-center mt-8 space-x-2">

              {testimonials.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === activeTestimonial
                        ? "w-8 bg-[#d6537c]"
                        : "w-2.5 bg-[#f1c4d1]"
                    }
                  `}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="bg-[#563344] text-white py-14 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">

              <div className="flex items-center mb-5">

                <div className="w-11 h-11 rounded-full bg-[#d6537c] flex items-center justify-center">
                  <ChefHat className="h-6 w-6 text-white" />
                </div>

                <span className="ml-3 text-xl font-bold">
                  EatWell<span className="text-[#f28eac]">AI</span>
                </span>

              </div>

              <p className="text-[#e8cbd5] leading-relaxed">
                AI-Powered Nutrition for a Healthier You
              </p>

            </div>

            {/* Quick Links */}
            <div>

              <h3 className="font-bold mb-5 text-[#ffe1eb]">
                Quick Links
              </h3>

              <ul className="space-y-3">

                <li>
                  <a
                    href="#about"
                    className="text-[#e8cbd5] hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#features"
                    className="text-[#e8cbd5] hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-[#e8cbd5] hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* Legal */}
            <div>

              <h3 className="font-bold mb-5 text-[#ffe1eb]">
                Legal
              </h3>

              <ul className="space-y-3">

                <li>
                  <a
                    href="#"
                    className="text-[#e8cbd5] hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[#e8cbd5] hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>

              </ul>

            </div>

            {/* Social */}
            <div>

              <h3 className="font-bold mb-5 text-[#ffe1eb]">
                Follow Us
              </h3>

              <div className="flex space-x-3">

                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#d6537c]
                    transition-colors
                  "
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#d6537c]
                    transition-colors
                  "
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#d6537c]
                    transition-colors
                  "
                >
                  <Instagram className="w-5 h-5" />
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-[#70495a] mt-12 pt-8 text-center text-[#cdaeb9]">
            © 2024 EatWellAI. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
