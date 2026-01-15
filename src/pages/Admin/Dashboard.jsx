import React from "react";
import {
  FiUsers,
  FiCheckCircle,
  FiBook,
  FiTrendingUp,
  FiActivity,
  FiCalendar,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: FiUsers, value: "1,245", label: "Total Students", color: "blue" },
    {
      icon: FiCheckCircle,
      value: "48",
      label: "Active Teachers",
      color: "green",
    },
    { icon: FiBook, value: "86", label: "Courses", color: "purple" },
    {
      icon: FiTrendingUp,
      value: "92%",
      label: "Attendance Rate",
      color: "orange",
    },
  ];

  const recentActivities = [
    { action: "New student enrolled", time: "2 hours ago", icon: FiUsers },
    {
      action: "Course 'Mathematics' updated",
      time: "4 hours ago",
      icon: FiBook,
    },
    { action: "Monthly report generated", time: "Yesterday", icon: FiActivity },
    { action: "Staff meeting scheduled", time: "Yesterday", icon: FiCalendar },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          Welcome back! Here's what's happening in your institution today.
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

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <activity.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-left hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors">
              <FiUsers className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                Add Student
              </p>
            </button>
            <button className="p-4 bg-green-50 dark:bg-green-500/10 rounded-lg text-left hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors">
              <FiBook className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                New Course
              </p>
            </button>
            <button className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-lg text-left hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors">
              <FiCalendar className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                Schedule
              </p>
            </button>
            <button className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-lg text-left hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors">
              <FiActivity className="w-5 h-5 text-orange-600 dark:text-orange-400 mb-2" />
              <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                Reports
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
