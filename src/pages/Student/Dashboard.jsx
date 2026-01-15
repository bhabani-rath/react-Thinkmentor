import React from "react";
import {
  FiBook,
  FiCheckSquare,
  FiAward,
  FiClock,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: FiBook, value: "8", label: "Enrolled Courses", color: "blue" },
    { icon: FiCheckSquare, value: "5", label: "Pending Tasks", color: "amber" },
    { icon: FiAward, value: "86%", label: "Average Score", color: "green" },
    { icon: FiClock, value: "24h", label: "Study Time", color: "purple" },
  ];

  const upcomingClasses = [
    {
      time: "09:00 AM",
      subject: "Mathematics",
      teacher: "Mr. Johnson",
      room: "Room 204",
    },
    {
      time: "10:30 AM",
      subject: "Physics",
      teacher: "Dr. Smith",
      room: "Lab 3",
    },
    {
      time: "01:00 PM",
      subject: "English",
      teacher: "Ms. Williams",
      room: "Room 108",
    },
    {
      time: "02:30 PM",
      subject: "Chemistry",
      teacher: "Dr. Brown",
      room: "Lab 2",
    },
  ];

  const assignments = [
    {
      title: "Algebra Problem Set",
      subject: "Mathematics",
      dueDate: "Today",
      status: "pending",
    },
    {
      title: "Physics Lab Report",
      subject: "Physics",
      dueDate: "Tomorrow",
      status: "pending",
    },
    {
      title: "Essay Writing",
      subject: "English",
      dueDate: "In 2 days",
      status: "submitted",
    },
    {
      title: "Chemistry Worksheet",
      subject: "Chemistry",
      dueDate: "In 3 days",
      status: "pending",
    },
  ];

  const courseProgress = [
    { name: "Mathematics", progress: 78, color: "blue" },
    { name: "Physics", progress: 65, color: "purple" },
    { name: "English", progress: 92, color: "green" },
    { name: "Chemistry", progress: 54, color: "amber" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          Student Dashboard
        </h1>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          Welcome back! Here's your learning progress today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 phablet:grid-cols-2 laptop:grid-cols-4 gap-4 phablet:gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-10 h-10 bg-${stat.color}-100 dark:bg-${stat.color}-500/20 rounded-lg flex items-center justify-center`}
              >
                <stat.icon
                  className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`}
                />
              </div>
            </div>
            <p className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 laptop:grid-cols-3 gap-6">
        {/* Upcoming Classes */}
        <div className="laptop:col-span-2 bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
              Today's Classes
            </h2>
            <FiCalendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingClasses.map((cls, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-dark-bg rounded-lg"
              >
                <div className="text-center min-w-[70px]">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {cls.time}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {cls.subject}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {cls.teacher} • {cls.room}
                  </p>
                </div>
                <button className="px-3 py-1.5 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-lg hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-colors">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Course Progress */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
              Course Progress
            </h2>
            <FiTrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {courseProgress.map((course, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {course.name}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                  <div
                    className={`bg-${course.color}-500 h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assignments Section */}
      <div className="mt-6 bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
            Upcoming Assignments
          </h2>
          <FiCheckSquare className="w-5 h-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 phablet:grid-cols-2 laptop:grid-cols-4 gap-3">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 dark:bg-dark-bg rounded-lg"
            >
              <div className="flex items-start justify-between mb-2">
                <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                  {assignment.title}
                </p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    assignment.status === "submitted"
                      ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                  }`}
                >
                  {assignment.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-2">
                {assignment.subject}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Due: {assignment.dueDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
