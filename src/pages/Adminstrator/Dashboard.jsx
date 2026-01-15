import React from "react";
import {
  FiUsers,
  FiFileText,
  FiSettings,
  FiTrendingUp,
  FiClipboard,
  FiAlertCircle,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: FiUsers, value: "352", label: "Total Staff", color: "blue" },
    {
      icon: FiFileText,
      value: "28",
      label: "Pending Requests",
      color: "amber",
    },
    { icon: FiClipboard, value: "156", label: "Documents", color: "purple" },
    {
      icon: FiTrendingUp,
      value: "98%",
      label: "System Uptime",
      color: "green",
    },
  ];

  const pendingTasks = [
    {
      task: "Review leave application - John Doe",
      priority: "High",
      type: "Leave",
    },
    {
      task: "Approve budget request - Science Dept",
      priority: "Medium",
      type: "Budget",
    },
    { task: "Update staff records", priority: "Low", type: "Records" },
    {
      task: "Schedule maintenance - Lab Equipment",
      priority: "Medium",
      type: "Maintenance",
    },
  ];

  const systemAlerts = [
    { message: "Server maintenance scheduled for Sunday", type: "info" },
    { message: "3 staff licenses expiring this month", type: "warning" },
    { message: "Backup completed successfully", type: "success" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          Administrator Dashboard
        </h1>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          Manage operations, staff, and administrative tasks efficiently.
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
        {/* Pending Tasks */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
            Pending Tasks
          </h2>
          <div className="space-y-3">
            {pendingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-bg rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {task.task}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {task.type}
                  </span>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                      : task.priority === "Medium"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                      : "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
            System Alerts
          </h2>
          <div className="space-y-3">
            {systemAlerts.map((alert, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  alert.type === "info"
                    ? "bg-blue-50 dark:bg-blue-500/10"
                    : alert.type === "warning"
                    ? "bg-amber-50 dark:bg-amber-500/10"
                    : "bg-green-50 dark:bg-green-500/10"
                }`}
              >
                <FiAlertCircle
                  className={`w-5 h-5 flex-shrink-0 ${
                    alert.type === "info"
                      ? "text-blue-600 dark:text-blue-400"
                      : alert.type === "warning"
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-green-600 dark:text-green-400"
                  }`}
                />
                <p className="text-sm text-gray-700 dark:text-dark-text">
                  {alert.message}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-dark-border">
            <h3 className="text-sm font-medium text-gray-900 dark:text-dark-text mb-3">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 dark:bg-dark-bg rounded-lg text-center">
                <p className="text-lg font-bold text-gray-900 dark:text-dark-text">
                  12
                </p>
                <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                  Tasks Today
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-dark-bg rounded-lg text-center">
                <p className="text-lg font-bold text-gray-900 dark:text-dark-text">
                  45
                </p>
                <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                  This Week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
