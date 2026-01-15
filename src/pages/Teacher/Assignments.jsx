import React, { useState } from "react";
import {
  FiFileText,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiEye,
  FiCalendar,
  FiUsers,
  FiCheck,
  FiX,
  FiClock,
} from "react-icons/fi";

const Assignments = () => {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Algebra Problem Set",
      class: "Class 10A",
      subject: "Mathematics",
      dueDate: "2024-01-20",
      totalStudents: 32,
      submitted: 28,
      graded: 24,
      status: "active",
    },
    {
      id: 2,
      title: "Geometry Homework",
      class: "Class 9B",
      subject: "Mathematics",
      dueDate: "2024-01-18",
      totalStudents: 28,
      submitted: 28,
      graded: 28,
      status: "completed",
    },
    {
      id: 3,
      title: "Statistics Quiz",
      class: "Class 11A",
      subject: "Statistics",
      dueDate: "2024-01-22",
      totalStudents: 25,
      submitted: 10,
      graded: 0,
      status: "active",
    },
    {
      id: 4,
      title: "Calculus Practice",
      class: "Class 8C",
      subject: "Mathematics",
      dueDate: "2024-01-25",
      totalStudents: 30,
      submitted: 0,
      graded: 0,
      status: "draft",
    },
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    class: "",
    subject: "",
    dueDate: "",
    description: "",
  });

  const filteredAssignments = assignments.filter((a) => {
    if (filter === "all") return true;
    return a.status === filter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 rounded-full">
            Active
          </span>
        );
      case "completed":
        return (
          <span className="px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 rounded-full">
            Completed
          </span>
        );
      case "draft":
        return (
          <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400 rounded-full">
            Draft
          </span>
        );
      default:
        return null;
    }
  };

  const handleCreateAssignment = () => {
    if (!newAssignment.title || !newAssignment.class || !newAssignment.dueDate)
      return;

    const assignment = {
      id: Date.now(),
      ...newAssignment,
      totalStudents: 30,
      submitted: 0,
      graded: 0,
      status: "active",
    };
    setAssignments([assignment, ...assignments]);
    setNewAssignment({
      title: "",
      class: "",
      subject: "",
      dueDate: "",
      description: "",
    });
    setShowModal(false);
  };

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            Assignments
          </h1>
          <p className="text-gray-500 dark:text-dark-text-secondary">
            Create and manage assignments for your classes
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiPlus className="w-4 h-4" />
          Create Assignment
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {["all", "active", "completed", "draft"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-dark-surface text-gray-600 dark:text-dark-text-secondary border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <FiFileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text text-lg">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                    {assignment.class} • {assignment.subject}
                  </p>
                </div>
              </div>
              {getStatusBadge(assignment.status)}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <FiCalendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-dark-text-secondary">
                  Due: {assignment.dueDate}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiUsers className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 dark:text-dark-text-secondary">
                  {assignment.totalStudents} Students
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiCheck className="w-4 h-4 text-green-500" />
                <span className="text-gray-600 dark:text-dark-text-secondary">
                  {assignment.submitted} Submitted
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiClock className="w-4 h-4 text-amber-500" />
                <span className="text-gray-600 dark:text-dark-text-secondary">
                  {assignment.graded} Graded
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 dark:text-dark-text-secondary mb-1">
                <span>Submission Progress</span>
                <span>
                  {Math.round(
                    (assignment.submitted / assignment.totalStudents) * 100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{
                    width: `${
                      (assignment.submitted / assignment.totalStudents) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors flex items-center justify-center gap-2">
                <FiEye className="w-4 h-4" />
                View Submissions
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors">
                <FiEdit className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteAssignment(assignment.id)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Assignment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-surface rounded-2xl max-w-lg w-full">
            <div className="p-6 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                Create Assignment
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newAssignment.title}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      title: e.target.value,
                    })
                  }
                  placeholder="Assignment title"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                    Class
                  </label>
                  <select
                    value={newAssignment.class}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        class: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text"
                  >
                    <option value="">Select Class</option>
                    <option value="Class 10A">Class 10A</option>
                    <option value="Class 9B">Class 9B</option>
                    <option value="Class 11A">Class 11A</option>
                    <option value="Class 8C">Class 8C</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                    Subject
                  </label>
                  <select
                    value={newAssignment.subject}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        subject: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text"
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Statistics">Statistics</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  value={newAssignment.dueDate}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      dueDate: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
                  Description
                </label>
                <textarea
                  value={newAssignment.description}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  placeholder="Assignment description..."
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-dark-text resize-none"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-dark-border flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 border border-gray-200 dark:border-dark-border text-gray-700 dark:text-dark-text font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateAssignment}
                className="flex-1 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
