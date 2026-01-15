import React, { useState } from "react";
import { FiCheck, FiX, FiCalendar, FiDownload, FiSave } from "react-icons/fi";

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState("Class 10A");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [attendance, setAttendance] = useState({
    "10A-01": "present",
    "10A-02": "present",
    "10A-03": "absent",
    "10A-04": "present",
    "10A-05": "present",
    "10A-06": "late",
    "10A-07": "present",
    "10A-08": "present",
  });

  const students = [
    { rollNo: "10A-01", name: "Rahul Sharma" },
    { rollNo: "10A-02", name: "Priya Patel" },
    { rollNo: "10A-03", name: "Amit Kumar" },
    { rollNo: "10A-04", name: "Sneha Reddy" },
    { rollNo: "10A-05", name: "Vikram Singh" },
    { rollNo: "10A-06", name: "Anita Desai" },
    { rollNo: "10A-07", name: "Karan Mehta" },
    { rollNo: "10A-08", name: "Neha Gupta" },
  ];

  const classes = ["Class 10A", "Class 9B", "Class 11A", "Class 8C"];

  const toggleAttendance = (rollNo) => {
    const states = ["present", "absent", "late"];
    const current = attendance[rollNo] || "present";
    const nextIndex = (states.indexOf(current) + 1) % states.length;
    setAttendance({ ...attendance, [rollNo]: states[nextIndex] });
  };

  const getStatusStyle = (status) => {
    if (status === "present")
      return "bg-green-100 text-green-700 border-green-200";
    if (status === "absent") return "bg-red-100 text-red-700 border-red-200";
    return "bg-amber-100 text-amber-700 border-amber-200";
  };

  const stats = {
    present: Object.values(attendance).filter((s) => s === "present").length,
    absent: Object.values(attendance).filter((s) => s === "absent").length,
    late: Object.values(attendance).filter((s) => s === "late").length,
  };

  const handleSave = () => {
    alert("Attendance saved successfully!");
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            Attendance
          </h1>
          <p className="text-gray-500 dark:text-dark-text-secondary">
            Mark and manage student attendance
          </p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-dark-border text-gray-700 dark:text-dark-text font-medium rounded-lg hover:bg-gray-50">
            <FiDownload className="w-4 h-4" /> Export
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            <FiSave className="w-4 h-4" /> Save
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg"
        >
          {classes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 dark:bg-green-500/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-green-600">{stats.present}</p>
          <p className="text-sm text-green-700">Present</p>
        </div>
        <div className="bg-red-50 dark:bg-red-500/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-red-600">{stats.absent}</p>
          <p className="text-sm text-red-700">Absent</p>
        </div>
        <div className="bg-amber-50 dark:bg-amber-500/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-amber-600">{stats.late}</p>
          <p className="text-sm text-amber-700">Late</p>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border">
        <div className="p-4 border-b border-gray-200 dark:border-dark-border">
          <p className="font-semibold text-gray-900 dark:text-dark-text">
            {selectedClass} - {selectedDate}
          </p>
          <p className="text-sm text-gray-500">
            Click on status to toggle (Present → Absent → Late)
          </p>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-dark-border">
          {students.map((s) => (
            <div
              key={s.rollNo}
              className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-dark-bg"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 w-16">{s.rollNo}</span>
                <span className="font-medium text-gray-900 dark:text-dark-text">
                  {s.name}
                </span>
              </div>
              <button
                onClick={() => toggleAttendance(s.rollNo)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${getStatusStyle(
                  attendance[s.rollNo]
                )}`}
              >
                {attendance[s.rollNo]?.charAt(0).toUpperCase() +
                  attendance[s.rollNo]?.slice(1)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
