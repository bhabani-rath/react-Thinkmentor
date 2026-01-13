import React, { useState } from "react";
import {
  FiBook,
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiChevronDown,
  FiCheck,
  FiX,
  FiClock,
  FiUsers,
  FiBookOpen,
} from "react-icons/fi";
import Modal from "../../components/ui/Modal";
import { useLanguage } from "../../context/LanguageContext";

const Syllabus = () => {
  const { t, translateData } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSyllabus, setSelectedSyllabus] = useState(null);

  // Syllabus data with state management
  const [syllabusData, setSyllabusData] = useState([
    {
      id: 1,
      subject: "Mathematics",
      grade: "Grade 10",
      curriculum: "CBSE",
      chapters: 15,
      totalHours: 120,
      lastUpdated: "2026-01-05",
      status: "Published",
      assignedTeachers: 12,
      description:
        "Complete mathematics syllabus covering algebra, geometry, and calculus fundamentals.",
    },
    {
      id: 2,
      subject: "Physics",
      grade: "Grade 11",
      curriculum: "CBSE",
      chapters: 14,
      totalHours: 100,
      lastUpdated: "2026-01-03",
      status: "Published",
      assignedTeachers: 8,
      description:
        "Physics fundamentals including mechanics, thermodynamics, and waves.",
    },
    {
      id: 3,
      subject: "Chemistry",
      grade: "Grade 12",
      curriculum: "ICSE",
      chapters: 16,
      totalHours: 110,
      lastUpdated: "2025-12-28",
      status: "Draft",
      assignedTeachers: 6,
      description:
        "Organic and inorganic chemistry with practical applications.",
    },
    {
      id: 4,
      subject: "Biology",
      grade: "Grade 10",
      curriculum: "CBSE",
      chapters: 13,
      totalHours: 90,
      lastUpdated: "2025-12-20",
      status: "Published",
      assignedTeachers: 10,
      description: "Life sciences covering botany, zoology, and human biology.",
    },
    {
      id: 5,
      subject: "English",
      grade: "Grade 9",
      curriculum: "CBSE",
      chapters: 18,
      totalHours: 80,
      lastUpdated: "2025-12-15",
      status: "Under Review",
      assignedTeachers: 14,
      description: "English literature and grammar with communication skills.",
    },
  ]);

  // Form state for create/edit
  const [formData, setFormData] = useState({
    subject: "",
    grade: "",
    curriculum: "CBSE",
    chapters: "",
    totalHours: "",
    status: "Draft",
    description: "",
  });

  const subjects = [
    "all",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
  ];
  const grades = ["all", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  const curricula = ["CBSE", "ICSE", "State Board", "IB", "Cambridge"];
  const statuses = ["Draft", "Under Review", "Published"];

  const filteredSyllabus = syllabusData.filter((item) => {
    const matchesSearch =
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.curriculum.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject =
      selectedSubject === "all" || item.subject === selectedSubject;
    const matchesGrade =
      selectedGrade === "all" || item.grade === selectedGrade;
    return matchesSearch && matchesSubject && matchesGrade;
  });

  const getStatusBadge = (status) => {
    const statusStyles = {
      Published:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",
      Draft: "bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400",
      "Under Review":
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400",
    };
    return statusStyles[status] || statusStyles.Draft;
  };

  const stats = [
    {
      label: "Total Syllabi",
      value: syllabusData.length,
      icon: FiBook,
      color: "blue",
    },
    {
      label: "Published",
      value: syllabusData.filter((s) => s.status === "Published").length,
      icon: FiCheck,
      color: "green",
    },
    {
      label: "Under Review",
      value: syllabusData.filter((s) => s.status === "Under Review").length,
      icon: FiClock,
      color: "yellow",
    },
    {
      label: "Total Chapters",
      value: syllabusData.reduce((acc, s) => acc + s.chapters, 0),
      icon: FiBookOpen,
      color: "purple",
    },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      subject: "",
      grade: "",
      curriculum: "CBSE",
      chapters: "",
      totalHours: "",
      status: "Draft",
      description: "",
    });
  };

  // Open create modal
  const handleOpenCreate = () => {
    resetForm();
    setIsCreateModalOpen(true);
  };

  // Handle create syllabus
  const handleCreateSyllabus = (e) => {
    e.preventDefault();
    const newSyllabus = {
      id: Date.now(),
      subject: formData.subject,
      grade: formData.grade,
      curriculum: formData.curriculum,
      chapters: parseInt(formData.chapters) || 0,
      totalHours: parseInt(formData.totalHours) || 0,
      lastUpdated: new Date().toISOString().split("T")[0],
      status: formData.status,
      assignedTeachers: 0,
      description: formData.description,
    };
    setSyllabusData((prev) => [newSyllabus, ...prev]);
    setIsCreateModalOpen(false);
    resetForm();
  };

  // Open view modal
  const handleView = (syllabus) => {
    setSelectedSyllabus(syllabus);
    setIsViewModalOpen(true);
  };

  // Open edit modal
  const handleEdit = (syllabus) => {
    setSelectedSyllabus(syllabus);
    setFormData({
      subject: syllabus.subject,
      grade: syllabus.grade,
      curriculum: syllabus.curriculum,
      chapters: syllabus.chapters.toString(),
      totalHours: syllabus.totalHours.toString(),
      status: syllabus.status,
      description: syllabus.description || "",
    });
    setIsEditModalOpen(true);
  };

  // Handle update syllabus
  const handleUpdateSyllabus = (e) => {
    e.preventDefault();
    setSyllabusData((prev) =>
      prev.map((item) =>
        item.id === selectedSyllabus.id
          ? {
              ...item,
              subject: formData.subject,
              grade: formData.grade,
              curriculum: formData.curriculum,
              chapters: parseInt(formData.chapters) || 0,
              totalHours: parseInt(formData.totalHours) || 0,
              status: formData.status,
              description: formData.description,
              lastUpdated: new Date().toISOString().split("T")[0],
            }
          : item
      )
    );
    setIsEditModalOpen(false);
    resetForm();
  };

  // Open delete confirmation
  const handleDeleteClick = (syllabus) => {
    setSelectedSyllabus(syllabus);
    setIsDeleteModalOpen(true);
  };

  // Handle delete syllabus
  const handleDeleteSyllabus = () => {
    setSyllabusData((prev) =>
      prev.filter((item) => item.id !== selectedSyllabus.id)
    );
    setIsDeleteModalOpen(false);
    setSelectedSyllabus(null);
  };

  // Form component (reused for create and edit)
  const SyllabusForm = ({ onSubmit, submitLabel }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
            Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
          >
            <option value="">Select Subject</option>
            {subjects
              .filter((s) => s !== "all")
              .map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
            Grade *
          </label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
          >
            <option value="">Select Grade</option>
            {grades
              .filter((g) => g !== "all")
              .map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
            Curriculum *
          </label>
          <select
            name="curriculum"
            value={formData.curriculum}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
          >
            {curricula.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
            Number of Chapters *
          </label>
          <input
            type="number"
            name="chapters"
            value={formData.chapters}
            onChange={handleInputChange}
            required
            min="1"
            placeholder="e.g., 15"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
            Total Hours *
          </label>
          <input
            type="number"
            name="totalHours"
            value={formData.totalHours}
            onChange={handleInputChange}
            required
            min="1"
            placeholder="e.g., 120"
            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1.5">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="3"
          placeholder="Brief description of the syllabus..."
          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text resize-none"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
        <button
          type="button"
          onClick={() => {
            setIsCreateModalOpen(false);
            setIsEditModalOpen(false);
            resetForm();
          }}
          className="px-4 py-2.5 text-gray-700 dark:text-dark-text bg-gray-100 dark:bg-dark-bg hover:bg-gray-200 dark:hover:bg-dark-border rounded-lg font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2.5 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all font-medium shadow-lg shadow-indigo-500/30"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            {t("syllabus.title")}
          </h1>
          <p className="text-gray-500 dark:text-dark-text-secondary">
            {t("syllabus.description")}
          </p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-indigo-500/30"
        >
          <FiPlus className="w-4 h-4" />
          <span className="font-medium">{t("syllabus.createNew")}</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const bgColor = {
            blue: "bg-blue-100 dark:bg-blue-500/20",
            green: "bg-green-100 dark:bg-green-500/20",
            yellow: "bg-yellow-100 dark:bg-yellow-500/20",
            purple: "bg-purple-100 dark:bg-purple-500/20",
          }[stat.color];
          const textColor = {
            blue: "text-blue-600 dark:text-blue-400",
            green: "text-green-600 dark:text-green-400",
            yellow: "text-yellow-600 dark:text-yellow-400",
            purple: "text-purple-600 dark:text-purple-400",
          }[stat.color];

          return (
            <div
              key={stat.label}
              className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-5"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${textColor}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search syllabus..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            />
          </div>
          <div className="relative min-w-[160px]">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject === "all" ? "All Subjects" : subject}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative min-w-[140px]">
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            >
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade === "all" ? "All Grades" : grade}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Syllabus Content - Adaptive View */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border overflow-hidden">
        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("dataHub.subject")}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("syllabus.grade")} / {t("syllabus.curriculum")}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("dataHub.chapters")}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("syllabus.totalHours")}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("dataHub.teachers")}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("common.status")}
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("syllabus.lastUpdated")}
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                  {t("common.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-dark-border">
              {filteredSyllabus.map((syllabus) => (
                <tr
                  key={syllabus.id}
                  className="hover:bg-gray-50 dark:hover:bg-dark-bg/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg flex items-center justify-center">
                        <FiBook className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-dark-text">
                        {syllabus.subject}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900 dark:text-dark-text font-medium">
                      {syllabus.grade}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      {syllabus.curriculum}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-dark-text">
                    {syllabus.chapters}
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-dark-text">
                    {syllabus.totalHours}h
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-gray-900 dark:text-dark-text">
                      <FiUsers className="w-4 h-4 text-gray-400" />
                      {syllabus.assignedTeachers}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                        syllabus.status
                      )}`}
                    >
                      {translateData(syllabus.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 dark:text-dark-text-secondary text-sm">
                    {new Date(syllabus.lastUpdated).toLocaleDateString(
                      "en-IN",
                      { day: "2-digit", month: "short", year: "numeric" }
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleView(syllabus)}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
                        title="View"
                      >
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(syllabus)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(syllabus)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card View - Visible on small screens */}
        <div className="lg:hidden">
          <div className="p-4 border-b border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg">
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
              Showing {filteredSyllabus.length} of {syllabusData.length} syllabi
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-dark-border">
            {filteredSyllabus.map((syllabus) => (
              <div
                key={syllabus.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-dark-bg/50 transition-colors"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center">
                      <FiBook className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-dark-text">
                        {syllabus.subject}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                        {syllabus.grade} • {syllabus.curriculum}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                      syllabus.status
                    )}`}
                  >
                    {syllabus.status}
                  </span>
                </div>

                {/* Card Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-2.5 text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-dark-text">
                      {syllabus.chapters}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                      Chapters
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-2.5 text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-dark-text">
                      {syllabus.totalHours}h
                    </p>
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                      Hours
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-2.5 text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-dark-text">
                      {syllabus.assignedTeachers}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                      Teachers
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-dark-text-secondary">
                    Updated:{" "}
                    {new Date(syllabus.lastUpdated).toLocaleDateString(
                      "en-IN",
                      { day: "2-digit", month: "short", year: "numeric" }
                    )}
                  </p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleView(syllabus)}
                      className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
                      title="View"
                    >
                      <FiEye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleEdit(syllabus)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <FiEdit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(syllabus)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredSyllabus.length === 0 && (
          <div className="py-12 text-center">
            <FiBook className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text mb-1">
              No syllabi found
            </h3>
            <p className="text-gray-500 dark:text-dark-text-secondary mb-4">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={handleOpenCreate}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              <FiPlus className="w-4 h-4" />
              Create New Syllabus
            </button>
          </div>
        )}
      </div>

      {/* Create Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={t("syllabus.createNew")}
        size="lg"
      >
        <SyllabusForm
          onSubmit={handleCreateSyllabus}
          submitLabel={t("syllabus.createNew")}
        />
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`${t("common.edit")} ${t("nav.syllabus")}`}
        size="lg"
      >
        <SyllabusForm
          onSubmit={handleUpdateSyllabus}
          submitLabel={`${t("common.update")} ${t("nav.syllabus")}`}
        />
      </Modal>

      {/* View Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title={`${t("common.viewDetails")} - ${t("nav.syllabus")}`}
        size="md"
      >
        {selectedSyllabus && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-dark-border">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center">
                <FiBook className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">
                  {selectedSyllabus.subject}
                </h3>
                <p className="text-gray-500 dark:text-dark-text-secondary">
                  {selectedSyllabus.grade} • {selectedSyllabus.curriculum}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  Chapters
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                  {selectedSyllabus.chapters}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  Total Hours
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                  {selectedSyllabus.totalHours}h
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  Assigned Teachers
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                  {selectedSyllabus.assignedTeachers}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  Status
                </p>
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                    selectedSyllabus.status
                  )}`}
                >
                  {selectedSyllabus.status}
                </span>
              </div>
            </div>
            {selectedSyllabus.description && (
              <div>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary mb-1">
                  Description
                </p>
                <p className="text-gray-900 dark:text-dark-text">
                  {selectedSyllabus.description}
                </p>
              </div>
            )}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-4 py-2.5 text-gray-700 dark:text-dark-text bg-gray-100 dark:bg-dark-bg hover:bg-gray-200 dark:hover:bg-dark-border rounded-lg font-medium transition-colors"
              >
                {t("common.close")}
              </button>
              <button
                onClick={() => {
                  setIsViewModalOpen(false);
                  handleEdit(selectedSyllabus);
                }}
                className="px-4 py-2.5 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all font-medium"
              >
                {t("syllabus.editSyllabus")}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title={t("syllabus.deleteSyllabus")}
        size="sm"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiTrash2 className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
            {t("common.deleteTitle")} "{selectedSyllabus?.subject}"?
          </h3>
          <p className="text-gray-500 dark:text-dark-text-secondary mb-6">
            {t("common.deleteConfirm")}
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="px-4 py-2.5 text-gray-700 dark:text-dark-text bg-gray-100 dark:bg-dark-bg hover:bg-gray-200 dark:hover:bg-dark-border rounded-lg font-medium transition-colors"
            >
              {t("common.cancel")}
            </button>
            <button
              onClick={handleDeleteSyllabus}
              className="px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              {t("common.delete")}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Syllabus;
