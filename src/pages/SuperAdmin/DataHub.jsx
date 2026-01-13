import React, { useState, useMemo } from "react";
import Modal from "../../components/ui/Modal";
import ConfirmDialog from "../../components/ui/ConfirmDialog";
import {
  FiSearch,
  FiPlus,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiFilter,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

// Tab keys for translation
const tabKeys = {
  Boards: "dataHub.boards",
  Classes: "dataHub.classes",
  Topics: "dataHub.topics",
  Chapters: "dataHub.chapters",
  Syllabus: "dataHub.syllabus",
};

const tabs = ["Boards", "Classes", "Topics", "Chapters", "Syllabus"];

const initialData = {
  Boards: [
    {
      id: 1,
      board: "CBSE",
      class: "Class 10",
      subject: "Science",
      chapter: "Chemical Reactions",
      topics: 12,
      status: "Active",
    },
    {
      id: 2,
      board: "CBSE",
      class: "Class 10",
      subject: "Mathematics",
      chapter: "Algebra",
      topics: 8,
      status: "Active",
    },
    {
      id: 3,
      board: "ICSE",
      class: "Class 9",
      subject: "Physics",
      chapter: "Motion",
      topics: 6,
      status: "Inactive",
    },
    {
      id: 4,
      board: "CBSE",
      class: "Class 12",
      subject: "Chemistry",
      chapter: "Organic Chemistry",
      topics: 15,
      status: "Active",
    },
    {
      id: 5,
      board: "State Board",
      class: "Class 11",
      subject: "Biology",
      chapter: "Cell Structure",
      topics: 10,
      status: "Active",
    },
    {
      id: 6,
      board: "ICSE",
      class: "Class 10",
      subject: "Science",
      chapter: "Light",
      topics: 7,
      status: "Active",
    },
  ],
  Classes: [
    {
      id: 1,
      class: "Class 10",
      board: "CBSE",
      sections: 4,
      students: 120,
      teachers: 8,
      status: "Active",
    },
    {
      id: 2,
      class: "Class 9",
      board: "ICSE",
      sections: 3,
      students: 90,
      teachers: 6,
      status: "Active",
    },
    {
      id: 3,
      class: "Class 12",
      board: "CBSE",
      sections: 5,
      students: 150,
      teachers: 10,
      status: "Inactive",
    },
    {
      id: 4,
      class: "Class 11",
      board: "State Board",
      sections: 3,
      students: 85,
      teachers: 5,
      status: "Active",
    },
  ],
  Topics: [
    {
      id: 1,
      topic: "Photosynthesis",
      subject: "Biology",
      chapter: "Plant Nutrition",
      resources: 5,
      duration: "2 hrs",
      status: "Active",
    },
    {
      id: 2,
      topic: "Newton's Laws",
      subject: "Physics",
      chapter: "Motion",
      resources: 8,
      duration: "3 hrs",
      status: "Active",
    },
    {
      id: 3,
      topic: "Quadratic Equations",
      subject: "Mathematics",
      chapter: "Algebra",
      resources: 6,
      duration: "2.5 hrs",
      status: "Inactive",
    },
  ],
  Chapters: [
    {
      id: 1,
      chapter: "Chemical Reactions",
      subject: "Chemistry",
      class: "Class 10",
      topics: 12,
      progress: "80%",
      status: "Active",
    },
    {
      id: 2,
      chapter: "Algebra",
      subject: "Mathematics",
      class: "Class 9",
      topics: 8,
      progress: "60%",
      status: "Active",
    },
    {
      id: 3,
      chapter: "Motion",
      subject: "Physics",
      class: "Class 10",
      topics: 6,
      progress: "45%",
      status: "Inactive",
    },
  ],
  Syllabus: [
    {
      id: 1,
      syllabus: "CBSE 2024",
      board: "CBSE",
      class: "Class 10",
      subjects: 6,
      year: "2024",
      status: "Active",
    },
    {
      id: 2,
      syllabus: "ICSE 2024",
      board: "ICSE",
      class: "Class 9",
      subjects: 5,
      year: "2024",
      status: "Active",
    },
    {
      id: 3,
      syllabus: "CBSE 2023",
      board: "CBSE",
      class: "Class 12",
      subjects: 5,
      year: "2023",
      status: "Inactive",
    },
  ],
};

// Column translation keys mapping
const columnTranslationKeys = {
  Board: "dataHub.board",
  Class: "dataHub.class",
  Subject: "dataHub.subject",
  Chapter: "dataHub.chapter",
  Topics: "dataHub.topics",
  Sections: "dataHub.sections",
  Students: "dataHub.students",
  Teachers: "dataHub.teachers",
  Status: "common.status",
  Action: "common.action",
  Topic: "common.topic",
  Resources: "common.resources",
  Duration: "common.duration",
  Progress: "common.progress",
  Syllabus: "dataHub.syllabus",
  Subjects: "common.subjects",
  Year: "common.year",
};

const tabConfig = {
  Boards: {
    titleKey: "dataHub.boardsData",
    descriptionKey: "dataHub.boardsDescription",
    columns: [
      "Board",
      "Class",
      "Subject",
      "Chapter",
      "Topics",
      "Status",
      "Action",
    ],
    fields: ["board", "class", "subject", "chapter", "topics", "status"],
    filterFields: ["board", "class", "subject", "status"],
  },
  Classes: {
    titleKey: "dataHub.classesData",
    descriptionKey: "dataHub.classesDescription",
    columns: [
      "Class",
      "Board",
      "Sections",
      "Students",
      "Teachers",
      "Status",
      "Action",
    ],
    fields: ["class", "board", "sections", "students", "teachers", "status"],
    filterFields: ["board", "class", "status"],
  },
  Topics: {
    titleKey: "dataHub.topicsData",
    descriptionKey: "dataHub.topicsDescription",
    columns: [
      "Topic",
      "Subject",
      "Chapter",
      "Resources",
      "Duration",
      "Status",
      "Action",
    ],
    fields: ["topic", "subject", "chapter", "resources", "duration", "status"],
    filterFields: ["subject", "chapter", "status"],
  },
  Chapters: {
    titleKey: "dataHub.chaptersData",
    descriptionKey: "dataHub.chaptersDescription",
    columns: [
      "Chapter",
      "Subject",
      "Class",
      "Topics",
      "Progress",
      "Status",
      "Action",
    ],
    fields: ["chapter", "subject", "class", "topics", "progress", "status"],
    filterFields: ["subject", "class", "status"],
  },
  Syllabus: {
    titleKey: "dataHub.syllabusData",
    descriptionKey: "dataHub.syllabusDescription",
    columns: [
      "Syllabus",
      "Board",
      "Class",
      "Subjects",
      "Year",
      "Status",
      "Action",
    ],
    fields: ["syllabus", "board", "class", "subjects", "year", "status"],
    filterFields: ["board", "class", "year", "status"],
  },
};

const DataHub = () => {
  const [activeTab, setActiveTab] = useState("Boards");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(initialData);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});
  const { t, translateData } = useLanguage();

  const currentConfig = tabConfig[activeTab];
  const currentData = data[activeTab];

  // Tab key translations for modal titles
  const tabKeys = {
    Boards: "dataHub.board",
    Classes: "dataHub.class",
    Topics: "dataHub.topics",
    Chapters: "dataHub.chapter",
    Syllabus: "dataHub.syllabus",
  };

  const getFilterOptions = (field) =>
    [...new Set(currentData.map((row) => row[field]))].sort();
  const activeFilterCount = Object.values(filters).filter(
    (v) => v && v !== "All"
  ).length;

  const filteredData = useMemo(() => {
    return currentData.filter((row) => {
      const matchesSearch = Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      );
      const matchesFilters = Object.entries(filters).every(
        ([field, value]) => !value || value === "All" || row[field] === value
      );
      return matchesSearch && matchesFilters;
    });
  }, [currentData, searchQuery, filters]);

  const handleSelectAll = (e) =>
    setSelectedRows(e.target.checked ? filteredData.map((_, i) => i) : []);
  const handleSelectRow = (index) =>
    setSelectedRows(
      selectedRows.includes(index)
        ? selectedRows.filter((i) => i !== index)
        : [...selectedRows, index]
    );
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedRows([]);
    setSearchQuery("");
    setFilters({});
    setShowFilters(false);
  };
  const clearFilters = () => setFilters({});
  const handleAddEntry = () => {
    setData((prev) => ({
      ...prev,
      [activeTab]: [
        ...prev[activeTab],
        { ...formData, id: Date.now(), status: formData.status || "Active" },
      ],
    }));
    setIsAddModalOpen(false);
    setFormData({});
  };
  const handleView = (item) => {
    setSelectedItem(item);
    setIsViewModalOpen(true);
  };
  const handleEdit = (item) => {
    setSelectedItem(item);
    setFormData(item);
    setIsEditModalOpen(true);
  };
  const handleSaveEdit = () => {
    setData((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((item) =>
        item.id === selectedItem.id ? { ...formData, id: item.id } : item
      ),
    }));
    setIsEditModalOpen(false);
    setFormData({});
    setSelectedItem(null);
  };
  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };
  const confirmDelete = () => {
    setData((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter(
        (item) => item.id !== selectedItem.id
      ),
    }));
    setSelectedItem(null);
  };

  // Dropdown options for class and board
  const classOptions = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];
  const boardOptions = [
    "CBSE",
    "ICSE",
    "State Board",
    "IB",
    "Cambridge",
    "NIOS",
  ];

  // Field label translation keys
  const fieldLabelKeys = {
    board: "dataHub.board",
    class: "dataHub.class",
    subject: "dataHub.subject",
    chapter: "dataHub.chapter",
    topics: "dataHub.topics",
    name: "common.name",
    year: "common.year",
    sections: "dataHub.sections",
    students: "dataHub.students",
    teachers: "dataHub.teachers",
    duration: "common.duration",
    resources: "common.resources",
    description: "common.description",
  };

  const getFieldLabel = (field) => {
    const key = fieldLabelKeys[field];
    return key ? t(key) : field;
  };

  const renderFormFields = () =>
    currentConfig.fields
      .filter((f) => f !== "status")
      .map((field) => {
        // Use dropdown for class field
        if (field === "class") {
          return (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1 capitalize">
                {getFieldLabel(field)}
              </label>
              <div className="relative">
                <select
                  value={formData[field] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer"
                >
                  <option value="">{t("common.selectStatus")}</option>
                  {classOptions.map((option) => (
                    <option key={option} value={option}>
                      {translateData(option)}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          );
        }

        // Use dropdown for board field
        if (field === "board") {
          return (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1 capitalize">
                {getFieldLabel(field)}
              </label>
              <div className="relative">
                <select
                  value={formData[field] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer"
                >
                  <option value="">{t("common.selectStatus")}</option>
                  {boardOptions.map((option) => (
                    <option key={option} value={option}>
                      {translateData(option)}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          );
        }

        // Default text input for other fields
        return (
          <div key={field} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1 capitalize">
              {getFieldLabel(field)}
            </label>
            <input
              type="text"
              value={formData[field] || ""}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder={`${t("common.enterField")} ${getFieldLabel(field)}`}
            />
          </div>
        );
      });

  const renderCellValue = (row, field) => {
    if (field === "status") {
      return (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            row.status === "Active"
              ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400"
              : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400"
          }`}
        >
          {translateData(row.status)}
        </span>
      );
    }
    // Translate common data values
    return translateData(row[field]);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="mb-4 phablet:mb-6">
        <h1 className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          {t("dataHub.title")}
        </h1>
        <p className="text-sm phablet:text-base text-gray-500 dark:text-dark-text-secondary">
          {t("dataHub.description")}
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-dark-border mb-4 phablet:mb-6 overflow-x-auto">
        <nav className="flex gap-4 phablet:gap-6 tablet:gap-8 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-gray-900 dark:text-dark-text border-gray-900 dark:border-primary"
                  : "text-gray-500 dark:text-dark-text-muted border-transparent hover:text-gray-700 dark:hover:text-dark-text-secondary"
              }`}
            >
              {t(tabKeys[tab])}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-3 phablet:p-4 tablet:p-6">
        <div className="mb-4 phablet:mb-6">
          <h2 className="text-base phablet:text-lg font-semibold text-gray-900 dark:text-dark-text mb-1">
            {t(currentConfig.titleKey)}
          </h2>
          <p className="text-xs phablet:text-sm text-gray-500 dark:text-dark-text-secondary">
            {t(currentConfig.descriptionKey)}
          </p>
        </div>

        <div className="flex flex-col phablet:flex-row phablet:items-center phablet:justify-between gap-3 phablet:gap-4 mb-4 phablet:mb-6">
          <div className="relative flex-1 phablet:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-dark-text-muted">
              <FiSearch className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm placeholder-gray-400 dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded-lg transition-colors ${
                  activeFilterCount > 0
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-600 dark:text-dark-text-secondary hover:bg-gray-50 dark:hover:bg-dark-surface-hover"
                }`}
              >
                <FiFilter className="w-4 h-4" />
                {t("common.filters")}
                {activeFilterCount > 0 && (
                  <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
                <FiChevronDown className="w-4 h-4" />
              </button>
              {showFilters && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg shadow-xl z-20 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-dark-text">
                      Filter by
                    </h4>
                    {activeFilterCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-primary hover:text-primary-hover font-medium"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {currentConfig.filterFields.map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-medium text-gray-500 dark:text-dark-text-muted mb-1.5 uppercase tracking-wide">
                          {field}
                        </label>
                        <select
                          value={filters[field] || "All"}
                          onChange={(e) =>
                            setFilters({ ...filters, [field]: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="All">All {field}s</option>
                          {getFilterOptions(field).map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-border flex gap-2">
                    <button
                      onClick={() => setShowFilters(false)}
                      className="flex-1 px-3 py-2 border border-gray-200 dark:border-dark-border text-gray-600 dark:text-dark-text-secondary text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        clearFilters();
                        setShowFilters(false);
                      }}
                      className="flex-1 px-3 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setFormData({});
                setIsAddModalOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
            >
              <FiPlus className="w-5 h-5" />
              {t("dataHub.addEntry")}
            </button>
          </div>
        </div>

        {activeFilterCount > 0 && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-xs text-gray-500 dark:text-dark-text-muted">
              Active filters:
            </span>
            {Object.entries(filters).map(
              ([field, value]) =>
                value &&
                value !== "All" && (
                  <span
                    key={field}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    <span className="capitalize">{field}:</span> {value}
                    <button
                      onClick={() => setFilters({ ...filters, [field]: "All" })}
                      className="ml-1 hover:text-primary-hover"
                    >
                      ×
                    </button>
                  </span>
                )
            )}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-dark-border">
                <th className="pb-3 pr-4 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedRows.length === filteredData.length &&
                      filteredData.length > 0
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 dark:border-dark-border text-primary focus:ring-primary/20"
                  />
                </th>
                {currentConfig.columns.slice(0, -1).map((col) => (
                  <th
                    key={col}
                    className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary"
                  >
                    {columnTranslationKeys[col]
                      ? t(columnTranslationKeys[col])
                      : col}
                  </th>
                ))}
                <th className="pb-3 pl-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                  {t("common.action")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-100 dark:border-dark-border hover:bg-gray-50/50 dark:hover:bg-dark-surface-hover/50 transition-colors"
                  >
                    <td className="py-4 pr-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(index)}
                        onChange={() => handleSelectRow(index)}
                        className="w-4 h-4 rounded border-gray-300 dark:border-dark-border text-primary focus:ring-primary/20"
                      />
                    </td>
                    {currentConfig.fields.map((field, i) => (
                      <td
                        key={field}
                        className={`py-4 px-4 text-sm ${
                          i === 0
                            ? "text-gray-900 dark:text-dark-text font-medium"
                            : "text-gray-600 dark:text-dark-text-secondary"
                        }`}
                      >
                        {renderCellValue(row, field)}
                      </td>
                    ))}
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(row)}
                          className="p-1.5 text-gray-400 dark:text-dark-text-muted hover:text-gray-600 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
                          title="View"
                        >
                          <FiEye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(row)}
                          className="p-1.5 text-gray-400 dark:text-dark-text-muted hover:text-gray-600 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
                          title="Edit"
                        >
                          <FiEdit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(row)}
                          className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/20 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={currentConfig.columns.length + 1}
                    className="py-12 text-center"
                  >
                    <p className="text-gray-400 dark:text-dark-text-muted text-sm">
                      No data available
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-dark-text-secondary">
          Showing {filteredData.length} of {currentData.length} entries
          {activeFilterCount > 0 && ` (filtered)`}
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={`${t("common.addNew")} ${t(tabKeys[activeTab])}`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddEntry();
          }}
        >
          {renderFormFields()}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
              {t("common.status")}
            </label>
            <select
              value={formData.status || "Active"}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="Active">{t("common.active")}</option>
              <option value="Inactive">{t("common.inactive")}</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end mt-6">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-600 dark:text-dark-text-secondary text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover"
            >
              {t("common.cancel")}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg"
            >
              {t("dataHub.addEntry")}
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title={`${t("common.viewDetails")} - ${t(tabKeys[activeTab])}`}
      >
        {selectedItem && (
          <div className="space-y-4">
            {currentConfig.fields.map((field) => (
              <div
                key={field}
                className="flex justify-between py-2 border-b border-gray-100 dark:border-dark-border"
              >
                <span className="text-sm font-medium text-gray-600 dark:text-dark-text-muted capitalize">
                  {field}
                </span>
                <span className="text-sm text-gray-900 dark:text-dark-text">
                  {selectedItem[field]}
                </span>
              </div>
            ))}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg"
              >
                {t("common.close")}
              </button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`${t("common.edit")} ${t(tabKeys[activeTab])}`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveEdit();
          }}
        >
          {renderFormFields()}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
              {t("common.status")}
            </label>
            <select
              value={formData.status || "Active"}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="Active">{t("common.active")}</option>
              <option value="Inactive">{t("common.inactive")}</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end mt-6">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-600 dark:text-dark-text-secondary text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover"
            >
              {t("common.cancel")}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg"
            >
              {t("common.saveChanges")}
            </button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title={t("common.deleteTitle")}
        message={t("common.deleteConfirm")}
      />
    </div>
  );
};

export default DataHub;
