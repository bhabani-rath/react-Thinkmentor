import React, { useState } from "react";
import { FiUsers, FiSearch, FiMail, FiEye, FiDownload } from "react-icons/fi";

const MyStudents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      class: "Class 10A",
      rollNo: "10A-01",
      email: "rahul@school.com",
      attendance: 95,
      grade: "A",
      avatar: "RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      class: "Class 10A",
      rollNo: "10A-02",
      email: "priya@school.com",
      attendance: 92,
      grade: "A-",
      avatar: "PP",
    },
    {
      id: 3,
      name: "Amit Kumar",
      class: "Class 9B",
      rollNo: "9B-01",
      email: "amit@school.com",
      attendance: 88,
      grade: "B+",
      avatar: "AK",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      class: "Class 9B",
      rollNo: "9B-02",
      email: "sneha@school.com",
      attendance: 96,
      grade: "A",
      avatar: "SR",
    },
    {
      id: 5,
      name: "Vikram Singh",
      class: "Class 11A",
      rollNo: "11A-01",
      email: "vikram@school.com",
      attendance: 91,
      grade: "A-",
      avatar: "VS",
    },
    {
      id: 6,
      name: "Karan Mehta",
      class: "Class 8C",
      rollNo: "8C-01",
      email: "karan@school.com",
      attendance: 85,
      grade: "B",
      avatar: "KM",
    },
  ];

  const classes = ["Class 10A", "Class 9B", "Class 11A", "Class 8C"];

  const filteredStudents = students.filter((s) => {
    const matchesSearch = s.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesClass = !selectedClass || s.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const getGradeColor = (grade) => {
    if (grade.startsWith("A"))
      return "text-green-600 bg-green-100 dark:bg-green-500/20";
    if (grade.startsWith("B"))
      return "text-blue-600 bg-blue-100 dark:bg-blue-500/20";
    return "text-amber-600 bg-amber-100 dark:bg-amber-500/20";
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            My Students
          </h1>
          <p className="text-gray-500 dark:text-dark-text-secondary">
            View and manage students across your classes
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
          <FiDownload className="w-4 h-4" /> Export
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students..."
            className="w-full pl-12 pr-4 py-2.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg"
          />
        </div>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg"
        >
          <option value="">All Classes</option>
          {classes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Student
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Class
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Attendance
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Grade
              </th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr
                key={s.id}
                className="border-b border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 font-semibold text-sm">
                      {s.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-dark-text">
                        {s.name}
                      </p>
                      <p className="text-sm text-gray-500">{s.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-dark-text-secondary">
                  {s.class}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-sm ${
                      s.attendance >= 90 ? "text-green-600" : "text-amber-600"
                    }`}
                  >
                    {s.attendance}%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getGradeColor(
                      s.grade
                    )}`}
                  >
                    {s.grade}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setSelectedStudent(s)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <FiEye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg">
                    <FiMail className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-surface rounded-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl mx-auto mb-4">
                {selectedStudent.avatar}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                {selectedStudent.name}
              </h2>
              <p className="text-gray-500">
                {selectedStudent.class} • {selectedStudent.rollNo}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">
                  {selectedStudent.attendance}%
                </p>
                <p className="text-sm text-gray-500">Attendance</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-dark-bg rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">
                  {selectedStudent.grade}
                </p>
                <p className="text-sm text-gray-500">Grade</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedStudent(null)}
              className="w-full py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyStudents;
