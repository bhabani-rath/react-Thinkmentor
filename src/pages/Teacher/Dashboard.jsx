import React from "react";
import {
  FiUsers,
  FiBook,
  FiCheckSquare,
  FiClock,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: FiUsers, value: "128", label: "My Students", color: "blue" },
    { icon: FiBook, value: "6", label: "Active Classes", color: "purple" },
    {
      icon: FiCheckSquare,
      value: "24",
      label: "Pending Assignments",
      color: "amber",
    },
    { icon: FiClock, value: "4", label: "Classes Today", color: "green" },
  ];

  const todaySchedule = [
    {
      time: "09:00 AM",
      subject: "Mathematics",
      class: "Class 10A",
      room: "Room 204",
    },
    {
      time: "10:30 AM",
      subject: "Mathematics",
      class: "Class 9B",
      room: "Room 108",
    },
    {
      time: "01:00 PM",
      subject: "Statistics",
      class: "Class 11A",
      room: "Room 305",
    },
    {
      time: "02:30 PM",
      subject: "Mathematics",
      class: "Class 8C",
      room: "Room 102",
    },
  ];

  const recentAssignments = [
    {
      title: "Algebra Quiz - Class 10A",
      submitted: 24,
      total: 28,
      dueDate: "Today",
    },
    {
      title: "Geometry Homework",
      submitted: 30,
      total: 32,
      dueDate: "Tomorrow",
    },
    {
      title: "Calculus Practice",
      submitted: 18,
      total: 25,
      dueDate: "In 3 days",
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          Teacher Dashboard
        </h1>
        <p className="text-gray-500 dark:text-dark-text-secondary">
          Welcome back! Here's your teaching overview for today.
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
        {/* Today's Schedule */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
              Today's Schedule
            </h2>
            <FiCalendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {todaySchedule.map((schedule, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-dark-bg rounded-lg"
              >
                <div className="text-center min-w-[70px]">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {schedule.time}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {schedule.subject}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    {schedule.class} • {schedule.room}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Assignments */}
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 phablet:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
              Recent Assignments
            </h2>
            <FiFileText className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentAssignments.map((assignment, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 dark:bg-dark-bg rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {assignment.title}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    Due: {assignment.dueDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-dark-border rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (assignment.submitted / assignment.total) * 100
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-dark-text-secondary">
                    {assignment.submitted}/{assignment.total}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors">
                Create Assignment
              </button>
              <button className="p-3 bg-green-50 dark:bg-green-500/10 rounded-lg text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors">
                Take Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
