import React, { useState } from "react";

const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const ViewIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

// Tab configuration
const tabs = ["Boards", "Classes", "Topics", "Chapters", "Syllabus"];

// Sample board data (only Boards has data)
const sampleBoardsData = [
  {
    board: "CBSE",
    class: "Class 10",
    subject: "Science",
    chapter: "Chemical Reactions",
    topics: 12,
    status: "Active",
  },
  {
    board: "CBSE",
    class: "Class 10",
    subject: "Science",
    chapter: "Chemical Reactions",
    topics: 12,
    status: "Active",
  },
  {
    board: "CBSE",
    class: "Class 10",
    subject: "Science",
    chapter: "Chemical Reactions",
    topics: 12,
    status: "Active",
  },
  {
    board: "CBSE",
    class: "Class 10",
    subject: "Science",
    chapter: "Chemical Reactions",
    topics: 12,
    status: "Active",
  },
  {
    board: "CBSE",
    class: "Class 10",
    subject: "Science",
    chapter: "Chemical Reactions",
    topics: 12,
    status: "Active",
  },
  {
    board: "CBSE",
    class: "Class 10",
    subject: "Science",
    chapter: "Chemical Reactions",
    topics: 12,
    status: "Active",
  },
];

// Tab content configuration
const tabConfig = {
  Boards: {
    title: "Boards Data",
    description:
      "Manage syllabus content by Board, Class, Subject, and Chapter",
    columns: [
      "Board",
      "Class",
      "Subject",
      "Chapter",
      "Topics",
      "Status",
      "Action",
    ],
    data: sampleBoardsData,
  },
  Classes: {
    title: "Classes Data",
    description: "Manage class levels and their configurations",
    columns: [
      "Class",
      "Board",
      "Sections",
      "Students",
      "Teachers",
      "Status",
      "Action",
    ],
    data: [],
  },
  Topics: {
    title: "Topics Data",
    description: "Manage topics and their learning materials",
    columns: [
      "Topic",
      "Subject",
      "Chapter",
      "Resources",
      "Duration",
      "Status",
      "Action",
    ],
    data: [],
  },
  Chapters: {
    title: "Chapters Data",
    description: "Manage chapters and their topic organization",
    columns: [
      "Chapter",
      "Subject",
      "Class",
      "Topics",
      "Progress",
      "Status",
      "Action",
    ],
    data: [],
  },
  Syllabus: {
    title: "Syllabus Data",
    description: "Manage syllabus structure and curriculum mapping",
    columns: [
      "Syllabus",
      "Board",
      "Class",
      "Subjects",
      "Year",
      "Status",
      "Action",
    ],
    data: [],
  },
};

const DataHub = () => {
  const [activeTab, setActiveTab] = useState("Boards");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const currentConfig = tabConfig[activeTab];
  const currentData = currentConfig.data;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIndexes = [];
      for (let i = 0; i < currentData.length; i++) {
        allIndexes.push(i);
      }
      setSelectedRows(allIndexes);
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Master Data Hub
        </h1>
        <p className="text-gray-500">
          Central repository for all educational content organization.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedRows([]);
              }}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "text-gray-900 border-gray-900"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Card Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            {currentConfig.title}
          </h2>
          <p className="text-sm text-gray-500">{currentConfig.description}</p>
        </div>

        {/* Search, Filters, and Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            {/* Filters Dropdown */}
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Filters
              <ChevronDownIcon />
            </button>
            {/* Export CSV Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-primary bg-white text-primary text-sm font-medium rounded-lg hover:bg-primary/5 transition-colors">
              <DownloadIcon />
              Export CSV
            </button>
            {/* Add Entry Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
              <PlusIcon />
              Add Entry
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 pr-4 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedRows.length === currentData.length &&
                      currentData.length > 0
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                  />
                </th>
                {currentConfig.columns.slice(0, -1).map((col) => (
                  <th
                    key={col}
                    className="pb-3 px-4 text-left text-sm font-medium text-gray-600"
                  >
                    {col}
                  </th>
                ))}
                <th className="pb-3 pl-4 text-left text-sm font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 pr-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(index)}
                        onChange={() => handleSelectRow(index)}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                      />
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {row.board}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {row.class}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {row.subject}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {row.chapter}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 text-center">
                      {row.topics}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <ViewIcon />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <EditIcon />
                        </button>
                        <button className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <DeleteIcon />
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
                    <p className="text-gray-400 text-sm">No data available</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataHub;
