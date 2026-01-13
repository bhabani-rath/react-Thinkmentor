import React from "react";
import { Link } from "react-router-dom";
import {
  FiBook,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiZap,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import ThinkMentorLogo from "../assets/ThinkMentorLogo";

const LandingPage = () => {
  const features = [
    {
      icon: FiBook,
      title: "Comprehensive Curriculum",
      description:
        "Access structured syllabi covering all subjects from grades 1-12 across multiple boards.",
      color: "indigo",
    },
    {
      icon: FiUsers,
      title: "Multi-User Platform",
      description:
        "Designed for students, teachers, parents, and administrators with role-based access.",
      color: "purple",
    },
    {
      icon: FiZap,
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths and intelligent recommendations based on progress.",
      color: "amber",
    },
    {
      icon: FiShield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with data encryption and privacy compliance.",
      color: "green",
    },
    {
      icon: FiTrendingUp,
      title: "Progress Tracking",
      description:
        "Real-time analytics and insights to monitor learning outcomes effectively.",
      color: "blue",
    },
    {
      icon: FiAward,
      title: "Certified Content",
      description:
        "Expert-curated content aligned with national and international standards.",
      color: "rose",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Students" },
    { value: "2K+", label: "Expert Teachers" },
    { value: "500+", label: "Courses" },
    { value: "98%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content:
        "ThinkMentor has transformed my child's learning experience. The structured approach and progress tracking are invaluable.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Teacher",
      content:
        "As an educator, I love how easy it is to manage syllabi and track student progress. It saves hours of administrative work.",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Student",
      content:
        "The personalized learning paths helped me improve my grades significantly. I actually enjoy studying now!",
      rating: 5,
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-600",
        darkBg: "dark:bg-indigo-500/20",
        darkText: "dark:text-indigo-400",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        darkBg: "dark:bg-purple-500/20",
        darkText: "dark:text-purple-400",
      },
      amber: {
        bg: "bg-amber-100",
        text: "text-amber-600",
        darkBg: "dark:bg-amber-500/20",
        darkText: "dark:text-amber-400",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        darkBg: "dark:bg-green-500/20",
        darkText: "dark:text-green-400",
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        darkBg: "dark:bg-blue-500/20",
        darkText: "dark:text-blue-400",
      },
      rose: {
        bg: "bg-rose-100",
        text: "text-rose-600",
        darkBg: "dark:bg-rose-500/20",
        darkText: "dark:text-rose-400",
      },
    };
    return colors[color] || colors.indigo;
  };

  return (
    <div
      className="min-h-screen bg-white dark:bg-dark-bg"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg border-b border-gray-100 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 phablet:px-6 laptop:px-8">
          <div className="flex items-center justify-between h-14 phablet:h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 phablet:gap-3">
              <ThinkMentorLogo className="w-9 h-9 phablet:w-10 phablet:h-10" />
              <span className="text-lg phablet:text-xl font-bold text-gray-900 dark:text-white">
                Think<span className="text-[#1B42C1]">Mentor</span>
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden tablet:flex items-center gap-6 laptop:gap-8">
              <a
                href="#features"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Pricing
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2 phablet:gap-3">
              <Link
                to="/login"
                className="px-3 phablet:px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-3 phablet:px-5 py-2 phablet:py-2.5 text-sm font-medium text-white bg-linear-to-r from-indigo-600 to-indigo-500 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all shadow-lg shadow-indigo-500/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 phablet:pt-28 tablet:pt-32 pb-12 phablet:pb-16 tablet:pb-20 px-4 phablet:px-6 laptop:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 phablet:px-4 py-1.5 phablet:py-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-full mb-6 phablet:mb-8">
              <FiZap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs phablet:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                AI-Powered Learning Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl phablet:text-4xl tablet:text-5xl laptop:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 phablet:mb-6">
              Transform Education with{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ThinkMentor
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base phablet:text-lg tablet:text-xl text-gray-600 dark:text-gray-300 mb-6 phablet:mb-8 max-w-2xl mx-auto">
              A comprehensive education management platform designed to empower
              students, teachers, and institutions with smart learning tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col phablet:flex-row items-center justify-center gap-3 phablet:gap-4">
              <Link
                to="/signup"
                className="w-full phablet:w-auto flex items-center justify-center gap-2 px-6 phablet:px-8 py-3 phablet:py-4 text-base font-semibold text-white bg-linear-to-r from-indigo-600 to-indigo-500 rounded-xl hover:from-indigo-700 hover:to-indigo-600 transition-all shadow-xl shadow-indigo-500/30"
              >
                Start Free Trial
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="w-full phablet:w-auto flex items-center justify-center gap-2 px-6 phablet:px-8 py-3 phablet:py-4 text-base font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-dark-surface rounded-xl hover:bg-gray-200 dark:hover:bg-dark-surface-hover transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 phablet:mt-16 tablet:mt-20 grid grid-cols-2 tablet:grid-cols-4 gap-4 phablet:gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 phablet:p-6 bg-gray-50 dark:bg-dark-surface rounded-2xl"
              >
                <p className="text-2xl phablet:text-3xl tablet:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs phablet:text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-12 phablet:py-16 tablet:py-20 px-4 phablet:px-6 laptop:px-8 bg-gray-50 dark:bg-dark-surface"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 phablet:mb-12 tablet:mb-16">
            <h2 className="text-2xl phablet:text-3xl tablet:text-4xl font-bold text-gray-900 dark:text-white mb-3 phablet:mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-base phablet:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to enhance the learning experience for
              everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-1 phablet:grid-cols-2 laptop:grid-cols-3 gap-4 phablet:gap-6 tablet:gap-8">
            {features.map((feature) => {
              const colors = getColorClasses(feature.color);
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-5 phablet:p-6 tablet:p-8 bg-white dark:bg-dark-bg rounded-2xl border border-gray-100 dark:border-dark-border hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`w-12 h-12 phablet:w-14 phablet:h-14 ${colors.bg} ${colors.darkBg} rounded-xl flex items-center justify-center mb-4 phablet:mb-5`}
                  >
                    <Icon
                      className={`w-6 h-6 phablet:w-7 phablet:h-7 ${colors.text} ${colors.darkText}`}
                    />
                  </div>
                  <h3 className="text-lg phablet:text-xl font-semibold text-gray-900 dark:text-white mb-2 phablet:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm phablet:text-base text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-12 phablet:py-16 tablet:py-20 px-4 phablet:px-6 laptop:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 phablet:mb-12 tablet:mb-16">
            <h2 className="text-2xl phablet:text-3xl tablet:text-4xl font-bold text-gray-900 dark:text-white mb-3 phablet:mb-4">
              Loved by Thousands
            </h2>
            <p className="text-base phablet:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See what our community has to say about their ThinkMentor
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 phablet:grid-cols-2 laptop:grid-cols-3 gap-4 phablet:gap-6 tablet:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-5 phablet:p-6 tablet:p-8 bg-gray-50 dark:bg-dark-surface rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-4 h-4 phablet:w-5 phablet:h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm phablet:text-base text-gray-600 dark:text-gray-300 mb-5 phablet:mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 phablet:w-12 phablet:h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm phablet:text-base font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm phablet:text-base font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs phablet:text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 phablet:py-16 tablet:py-20 px-4 phablet:px-6 laptop:px-8 bg-linear-to-br from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl phablet:text-3xl tablet:text-4xl font-bold text-white mb-3 phablet:mb-4">
            Ready to Transform Learning?
          </h2>
          <p className="text-base phablet:text-lg text-indigo-100 mb-6 phablet:mb-8 max-w-2xl mx-auto">
            Join thousands of students and educators already using ThinkMentor
            to achieve better learning outcomes.
          </p>
          <div className="flex flex-col phablet:flex-row items-center justify-center gap-3 phablet:gap-4">
            <Link
              to="/signup"
              className="w-full phablet:w-auto flex items-center justify-center gap-2 px-6 phablet:px-8 py-3 phablet:py-4 text-base font-semibold text-indigo-600 bg-white rounded-xl hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Started Free
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="w-full phablet:w-auto flex items-center justify-center px-6 phablet:px-8 py-3 phablet:py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 phablet:py-10 tablet:py-12 px-4 phablet:px-6 laptop:px-8 bg-gray-900 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col phablet:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ThinkMentorLogo className="w-8 h-8" />
              <span className="text-base font-semibold text-white">
                Think<span className="text-[#1B42C1]">Mentor</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              © 2026 ThinkMentor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
