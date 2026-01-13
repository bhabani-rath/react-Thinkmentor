import React from "react";
import { FiUsers, FiCheckCircle, FiBook, FiTrendingUp } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          {t("dashboard.title")}
        </h1>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          {t("dashboard.welcome")}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 phablet:grid-cols-2 laptop:grid-cols-4 gap-4 phablet:gap-6 mb-6">
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
              <FiUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text">
            2,543
          </p>
          <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
            {t("dashboard.totalUsers")}
          </p>
        </div>

        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center">
              <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <p className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text">
            1,890
          </p>
          <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
            {t("dashboard.activeUsers")}
          </p>
        </div>

        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center">
              <FiBook className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <p className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text">
            156
          </p>
          <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
            {t("dashboard.totalCourses")}
          </p>
        </div>

        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/20 rounded-lg flex items-center justify-center">
              <FiTrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <p className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text">
            89%
          </p>
          <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
            {t("dashboard.completionRate")}
          </p>
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
          {t("dashboard.recentActivity")}
        </h2>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          {t("dashboard.contentPlaceholder")}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
