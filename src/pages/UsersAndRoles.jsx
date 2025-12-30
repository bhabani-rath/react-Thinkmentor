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

// Sample user data
const sampleUsers = [
  {
    id: "UID01",
    name: "Rohit Mehra",
    email: "r.mehra12@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "UID01",
    name: "Class 10",
    email: "r.mehra12@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "UID01",
    name: "Rohit Mehra",
    email: "r.mehra12@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "UID01",
    name: "Class 10",
    email: "r.mehra12@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "UID01",
    name: "Rohit Mehra",
    email: "r.mehra12@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "UID01",
    name: "Class 10",
    email: "r.mehra12@gmail.com",
    role: "Admin",
    status: "Active",
  },
];

// Sample role data
const sampleRoles = [
  {
    id: "RID01",
    name: "Admin",
    createdOn: "20/12/2025 | 14:23:37",
    lastUpdatedOn: "28/12/2025 | 14:23:37",
    status: "Active",
  },
  {
    id: "RID01",
    name: "Admin",
    createdOn: "20/12/2025 | 14:23:37",
    lastUpdatedOn: "28/12/2025 | 14:23:37",
    status: "Active",
  },
  {
    id: "RID01",
    name: "Admin",
    createdOn: "20/12/2025 | 14:23:37",
    lastUpdatedOn: "28/12/2025 | 14:23:37",
    status: "Active",
  },
  {
    id: "RID01",
    name: "Admin",
    createdOn: "20/12/2025 | 14:23:37",
    lastUpdatedOn: "28/12/2025 | 14:23:37",
    status: "Active",
  },
  {
    id: "RID01",
    name: "Admin",
    createdOn: "20/12/2025 | 14:23:37",
    lastUpdatedOn: "28/12/2025 | 14:23:37",
    status: "Active",
  },
  {
    id: "RID01",
    name: "Admin",
    createdOn: "20/12/2025 | 14:23:37",
    lastUpdatedOn: "28/12/2025 | 14:23:37",
    status: "Active",
  },
];

const UsersAndRoles = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleSelectAllUsers = (e) => {
    if (e.target.checked) {
      setSelectedUsers(sampleUsers.map((_, index) => index));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (index) => {
    if (selectedUsers.includes(index)) {
      setSelectedUsers(selectedUsers.filter((i) => i !== index));
    } else {
      setSelectedUsers([...selectedUsers, index]);
    }
  };

  const handleSelectAllRoles = (e) => {
    if (e.target.checked) {
      setSelectedRoles(sampleRoles.map((_, index) => index));
    } else {
      setSelectedRoles([]);
    }
  };

  const handleSelectRole = (index) => {
    if (selectedRoles.includes(index)) {
      setSelectedRoles(selectedRoles.filter((i) => i !== index));
    } else {
      setSelectedRoles([...selectedRoles, index]);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Users & Roles</h1>
        <p className="text-gray-500">
          Manage platform users and their access permissions.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveTab("user")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "user"
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => setActiveTab("role")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "role"
                ? "text-gray-900 border-gray-900"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Role Management
          </button>
        </nav>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {activeTab === "user" ? (
          <>
            {/* User Management Card Header */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                User Management
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Search, Filters, and Actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative flex-1 max-w-xs">
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
                {/* Add New User Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                  <PlusIcon />
                  Add Entry
                </button>
              </div>
            </div>

            {/* User Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 pr-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedUsers.length === sampleUsers.length}
                        onChange={handleSelectAllUsers}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                      />
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      User ID
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      User Name
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Email ID
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Role
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Status
                    </th>
                    <th className="pb-3 pl-4 text-left text-sm font-medium text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sampleUsers.map((user, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 pr-4">
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(index)}
                          onChange={() => handleSelectUser(index)}
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                        />
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {user.id}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {user.name}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {user.role}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <EditIcon />
                          </button>
                          <button className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <DeleteIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            {/* Role Management Card Header */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Role Management
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Search, Filters, and Actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative flex-1 max-w-xs">
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
                {/* Add New Role Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                  <PlusIcon />
                  Add Entry
                </button>
              </div>
            </div>

            {/* Role Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 pr-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedRoles.length === sampleRoles.length}
                        onChange={handleSelectAllRoles}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                      />
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Role ID
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Role Name
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Created On
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Last Updated On
                    </th>
                    <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600">
                      Status
                    </th>
                    <th className="pb-3 pl-4 text-left text-sm font-medium text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sampleRoles.map((role, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 pr-4">
                        <input
                          type="checkbox"
                          checked={selectedRoles.includes(index)}
                          onChange={() => handleSelectRole(index)}
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20"
                        />
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {role.id}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {role.name}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {role.createdOn}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {role.lastUpdatedOn}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            role.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {role.status}
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <EditIcon />
                          </button>
                          <button className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <DeleteIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UsersAndRoles;
