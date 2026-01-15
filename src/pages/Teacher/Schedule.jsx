import React, { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";

const Schedule = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(new Date().getDay() || 7);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const schedule = {
    1: [
      // Monday
      {
        id: 1,
        subject: "Mathematics",
        class: "Class 10A",
        time: "09:00 - 10:00",
        room: "Room 204",
        color: "blue",
      },
      {
        id: 2,
        subject: "Statistics",
        class: "Class 11A",
        time: "13:00 - 14:00",
        room: "Room 305",
        color: "purple",
      },
    ],
    2: [
      // Tuesday
      {
        id: 3,
        subject: "Mathematics",
        class: "Class 9B",
        time: "10:30 - 11:30",
        room: "Room 108",
        color: "green",
      },
      {
        id: 4,
        subject: "Mathematics",
        class: "Class 8C",
        time: "14:30 - 15:30",
        room: "Room 102",
        color: "amber",
      },
    ],
    3: [
      // Wednesday
      {
        id: 5,
        subject: "Mathematics",
        class: "Class 10A",
        time: "09:00 - 10:00",
        room: "Room 204",
        color: "blue",
      },
      {
        id: 6,
        subject: "Statistics",
        class: "Class 11A",
        time: "13:00 - 14:00",
        room: "Room 305",
        color: "purple",
      },
    ],
    4: [
      // Thursday
      {
        id: 7,
        subject: "Mathematics",
        class: "Class 9B",
        time: "10:30 - 11:30",
        room: "Room 108",
        color: "green",
      },
      {
        id: 8,
        subject: "Mathematics",
        class: "Class 8C",
        time: "14:30 - 15:30",
        room: "Room 102",
        color: "amber",
      },
    ],
    5: [
      // Friday
      {
        id: 9,
        subject: "Mathematics",
        class: "Class 10A",
        time: "09:00 - 10:00",
        room: "Room 204",
        color: "blue",
      },
      {
        id: 10,
        subject: "Staff Meeting",
        class: "All Teachers",
        time: "15:00 - 16:00",
        room: "Conference Room",
        color: "red",
      },
    ],
    6: [
      // Saturday
      {
        id: 11,
        subject: "Mathematics",
        class: "Class 8C",
        time: "14:30 - 15:30",
        room: "Room 102",
        color: "amber",
      },
    ],
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/30",
      green:
        "bg-green-100 dark:bg-green-500/20 border-green-200 dark:border-green-500/30",
      purple:
        "bg-purple-100 dark:bg-purple-500/20 border-purple-200 dark:border-purple-500/30",
      amber:
        "bg-amber-100 dark:bg-amber-500/20 border-amber-200 dark:border-amber-500/30",
      red: "bg-red-100 dark:bg-red-500/20 border-red-200 dark:border-red-500/30",
    };
    return colors[color] || colors.blue;
  };

  const getWeekDates = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1 + currentWeek * 7);

    return days.map((day, index) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + index);
      return {
        day,
        date: date.getDate(),
        month: date.toLocaleString("default", { month: "short" }),
        isToday: date.toDateString() === new Date().toDateString(),
      };
    });
  };

  const weekDates = getWeekDates();

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            Schedule
          </h1>
          <p className="text-gray-500 dark:text-dark-text-secondary">
            View and manage your weekly teaching schedule
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          <FiPlus className="w-4 h-4" />
          Add Event
        </button>
      </div>

      {/* Week Navigation */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition-colors"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
            {currentWeek === 0
              ? "This Week"
              : currentWeek > 0
              ? `${currentWeek} Week(s) Ahead`
              : `${Math.abs(currentWeek)} Week(s) Ago`}
          </h2>
          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition-colors"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day Tabs */}
        <div className="grid grid-cols-6 gap-2">
          {weekDates.map((dayInfo, index) => (
            <button
              key={dayInfo.day}
              onClick={() => setSelectedDay(index + 1)}
              className={`p-3 rounded-xl text-center transition-all ${
                selectedDay === index + 1
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : dayInfo.isToday
                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30"
                  : "bg-gray-50 dark:bg-dark-bg text-gray-600 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-border"
              }`}
            >
              <p className="text-xs font-medium mb-1">
                {dayInfo.day.slice(0, 3)}
              </p>
              <p className="text-lg font-bold">{dayInfo.date}</p>
              <p className="text-xs">{dayInfo.month}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Schedule for Selected Day */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border">
        <div className="p-4 border-b border-gray-200 dark:border-dark-border">
          <h3 className="font-semibold text-gray-900 dark:text-dark-text">
            {days[selectedDay - 1]} Schedule
          </h3>
          <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
            {schedule[selectedDay]?.length || 0} classes scheduled
          </p>
        </div>

        <div className="p-4">
          {schedule[selectedDay]?.length > 0 ? (
            <div className="space-y-3">
              {schedule[selectedDay].map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border ${getColorClasses(
                    item.color
                  )}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-dark-text">
                        {item.subject}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                        {item.class}
                      </p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium bg-white dark:bg-dark-surface rounded-lg shadow-sm">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-dark-text-secondary">
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      {item.room}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-dark-text-secondary">
              <FiCalendar className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
              <p>No classes scheduled for this day</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
