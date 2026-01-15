import React from "react";
import {
  FiUsers,
  FiBook,
  FiAward,
  FiCalendar,
  FiMessageCircle,
  FiBell,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: FiUsers, value: "2", label: "Children", color: "blue" },
    { icon: FiCheckCircle, value: "95%", label: "Attendance", color: "green" },
    { icon: FiAward, value: "A-", label: "Avg. Grade", color: "purple" },
    { icon: FiCalendar, value: "3", label: "Events This Week", color: "amber" },
  ];

  const children = [
    {
      name: "Alex Johnson",
      class: "Class 10A",
      attendance: 96,
      grade: "A",
      avatar: "👦",
      recentPerformance: [85, 92, 88, 90, 87],
    },
    {
      name: "Emma Johnson",
      class: "Class 7B",
      attendance: 94,
      grade: "A-",
      avatar: "👧",
      recentPerformance: [82, 88, 85, 91, 84],
    },
  ];

  const notifications = [
    {
      message: "Parent-Teacher meeting on Friday",
      type: "event",
      time: "1 hour ago",
    },
    {
      message: "Alex scored 92% in Mathematics test",
      type: "achievement",
      time: "3 hours ago",
    },
    {
      message: "Fee payment reminder for May",
      type: "reminder",
      time: "Yesterday",
    },
    {
      message: "Emma's Science project due next week",
      type: "assignment",
      time: "Yesterday",
    },
  ];

  const upcomingEvents = [
    { title: "Annual Sports Day", date: "Jan 25", type: "Sports" },
    { title: "Parent-Teacher Meeting", date: "Jan 27", type: "Meeting" },
    { title: "Science Exhibition", date: "Feb 02", type: "Exhibition" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          Parent Dashboard
        </h1>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          Stay connected with your children's academic journey.
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

      {/* Children Cards */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
          My Children
        </h2>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4">
          {children.map((child, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center text-2xl">
                  {child.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                    {child.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                    {child.class}
                  </p>
                </div>
                <button className="ml-auto p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors">
                  <FiMessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-dark-bg rounded-lg">
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">
                    {child.attendance}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    Attendance
                  </p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-dark-bg rounded-lg">
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {child.grade}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    Grade
                  </p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-dark-bg rounded-lg">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    8
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    Courses
                  </p>
                </div>
              </div>

              {/* Performance Mini Chart */}
              <div className="pt-4 border-t border-gray-200 dark:border-dark-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-dark-text-secondary">
                    Recent Performance
                  </span>
                  <FiTrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-end gap-1 h-12">
                  {child.recentPerformance.map((score, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-500 dark:bg-blue-400 rounded-t"
                      style={{ height: `${score}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
        {/* Notifications */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
              Notifications
            </h2>
            <FiBell className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-dark-bg rounded-lg"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    notification.type === "event"
                      ? "bg-blue-500"
                      : notification.type === "achievement"
                      ? "bg-green-500"
                      : notification.type === "reminder"
                      ? "bg-amber-500"
                      : "bg-purple-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-dark-text">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
              Upcoming Events
            </h2>
            <FiCalendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-dark-bg rounded-lg"
              >
                <div className="text-center min-w-[50px]">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {event.date.split(" ")[1]}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {event.date.split(" ")[0]}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {event.title}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors">
                Message Teacher
              </button>
              <button className="p-3 bg-green-50 dark:bg-green-500/10 rounded-lg text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors">
                View Report Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
