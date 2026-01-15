import React, { useState } from "react";
import {
  FiBook,
  FiUsers,
  FiClock,
  FiCalendar,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiX,
} from "react-icons/fi";

const MyClasses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Mathematics",
      grade: "Class 10A",
      students: 32,
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "Room 204",
      nextClass: "Tomorrow, 9:00 AM",
    },
    {
      id: 2,
      name: "Mathematics",
      grade: "Class 9B",
      students: 28,
      schedule: "Tue, Thu - 10:30 AM",
      room: "Room 108",
      nextClass: "Today, 10:30 AM",
    },
    {
      id: 3,
      name: "Statistics",
      grade: "Class 11A",
      students: 25,
      schedule: "Mon, Wed - 1:00 PM",
      room: "Room 305",
      nextClass: "Monday, 1:00 PM",
    },
    {
      id: 4,
      name: "Mathematics",
      grade: "Class 8C",
      students: 30,
      schedule: "Tue, Thu, Sat - 2:30 PM",
      room: "Room 102",
      nextClass: "Thursday, 2:30 PM",
    },
  ]);

  const handleViewClass = (cls) => {
    setSelectedClass(cls);
    setShowModal(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            My Classes
          </h1>
          <p className="text-gray-500 dark:text-dark-text-secondary">
            Manage your classes and view class details
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          <FiPlus className="w-4 h-4" />
          Add Class
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
              <FiBook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                {classes.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Total Classes
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center">
              <FiUsers className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                {classes.reduce((sum, c) => sum + c.students, 0)}
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Total Students
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center">
              <FiClock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                18
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Hours/Week
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-500/20 rounded-lg flex items-center justify-center">
              <FiCalendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                2
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Classes Today
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-5 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text text-lg">
                  {cls.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  {cls.grade}
                </p>
              </div>
              <div className="flex gap-1">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors">
                  <FiEdit className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <FiUsers className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-dark-text-secondary">
                  {cls.students} Students
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiClock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-dark-text-secondary">
                  {cls.schedule}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiCalendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-dark-text-secondary">
                  {cls.room}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-dark-border">
              <p className="text-xs text-gray-500 dark:text-dark-text-secondary mb-3">
                Next class:{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {cls.nextClass}
                </span>
              </p>
              <button
                onClick={() => handleViewClass(cls)}
                className="w-full py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
              >
                View Class Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Class Details Modal */}
      {showModal && selectedClass && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-surface rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                {selectedClass.name} - {selectedClass.grade}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                    Students
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-dark-text">
                    {selectedClass.students}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                    Room
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-dark-text">
                    {selectedClass.room}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                    Schedule
                  </p>
                  <p className="text-gray-900 dark:text-dark-text">
                    {selectedClass.schedule}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                    Next Class
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    {selectedClass.nextClass}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Take Attendance
                </button>
                <button className="flex-1 py-2.5 border border-gray-200 dark:border-dark-border text-gray-700 dark:text-dark-text font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors">
                  View Students
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
