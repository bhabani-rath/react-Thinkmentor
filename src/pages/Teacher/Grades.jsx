import React, { useState } from "react";
import { FiEdit, FiSave, FiDownload } from "react-icons/fi";

const Grades = () => {
  const [selectedClass, setSelectedClass] = useState("Class 10A");
  const [selectedExam, setSelectedExam] = useState("Mid-Term");
  const [editingId, setEditingId] = useState(null);
  const [grades, setGrades] = useState([
    {
      rollNo: "10A-01",
      name: "Rahul Sharma",
      marks: 85,
      maxMarks: 100,
      grade: "A",
    },
    {
      rollNo: "10A-02",
      name: "Priya Patel",
      marks: 92,
      maxMarks: 100,
      grade: "A+",
    },
    {
      rollNo: "10A-03",
      name: "Amit Kumar",
      marks: 68,
      maxMarks: 100,
      grade: "B",
    },
    {
      rollNo: "10A-04",
      name: "Sneha Reddy",
      marks: 78,
      maxMarks: 100,
      grade: "B+",
    },
    {
      rollNo: "10A-05",
      name: "Vikram Singh",
      marks: 88,
      maxMarks: 100,
      grade: "A",
    },
    {
      rollNo: "10A-06",
      name: "Anita Desai",
      marks: 95,
      maxMarks: 100,
      grade: "A+",
    },
  ]);

  const classes = ["Class 10A", "Class 9B", "Class 11A", "Class 8C"];
  const exams = ["Mid-Term", "Final", "Unit Test 1", "Unit Test 2"];

  const calculateGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B+";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    return "F";
  };

  const updateMarks = (rollNo, newMarks) => {
    setGrades(
      grades.map((g) =>
        g.rollNo === rollNo
          ? { ...g, marks: newMarks, grade: calculateGrade(newMarks) }
          : g
      )
    );
  };

  const getGradeColor = (grade) => {
    if (grade === "A+" || grade === "A") return "text-green-600 bg-green-100";
    if (grade === "B+" || grade === "B") return "text-blue-600 bg-blue-100";
    if (grade === "C") return "text-amber-600 bg-amber-100";
    return "text-red-600 bg-red-100";
  };

  const avgMarks = Math.round(
    grades.reduce((a, b) => a + b.marks, 0) / grades.length
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            Grades
          </h1>
          <p className="text-gray-500 dark:text-dark-text-secondary">
            Manage and update student grades
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
          <FiDownload className="w-4 h-4" /> Export Report
        </button>
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
        <select
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="px-4 py-2.5 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg"
        >
          {exams.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-dark-text">
            {grades.length}
          </p>
          <p className="text-sm text-gray-500">Total Students</p>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{avgMarks}%</p>
          <p className="text-sm text-gray-500">Class Average</p>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {Math.max(...grades.map((g) => g.marks))}%
          </p>
          <p className="text-sm text-gray-500">Highest</p>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">
            {Math.min(...grades.map((g) => g.marks))}%
          </p>
          <p className="text-sm text-gray-500">Lowest</p>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Roll No
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Student
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-dark-text">
                Marks
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
            {grades.map((g) => (
              <tr
                key={g.rollNo}
                className="border-b border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg"
              >
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-dark-text-secondary">
                  {g.rollNo}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-dark-text">
                  {g.name}
                </td>
                <td className="px-6 py-4">
                  {editingId === g.rollNo ? (
                    <input
                      type="number"
                      value={g.marks}
                      onChange={(e) =>
                        updateMarks(g.rollNo, parseInt(e.target.value) || 0)
                      }
                      className="w-20 px-2 py-1 border border-gray-300 rounded"
                      min="0"
                      max="100"
                    />
                  ) : (
                    <span className="text-gray-900 dark:text-dark-text">
                      {g.marks}/{g.maxMarks}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getGradeColor(
                      g.grade
                    )}`}
                  >
                    {g.grade}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() =>
                      setEditingId(editingId === g.rollNo ? null : g.rollNo)
                    }
                    className={`p-2 rounded-lg ${
                      editingId === g.rollNo
                        ? "text-green-600 bg-green-50"
                        : "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {editingId === g.rollNo ? (
                      <FiSave className="w-4 h-4" />
                    ) : (
                      <FiEdit className="w-4 h-4" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
