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

const initialUsers = [
  {
    id: 1,
    name: "Rohit Mehra",
    email: "r.mehra12@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.s@gmail.com",
    role: "Teacher",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.k@gmail.com",
    role: "Student",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha.p@gmail.com",
    role: "Teacher",
    status: "Active",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.s@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 6,
    name: "Ananya Das",
    email: "ananya.d@gmail.com",
    role: "Student",
    status: "Active",
  },
  {
    id: 7,
    name: "Rajesh Kumar",
    email: "rajesh.k@gmail.com",
    role: "Adminstrator",
    status: "Active",
  },
  {
    id: 8,
    name: "Deepa Nair",
    email: "deepa.n@gmail.com",
    role: "Teacher",
    status: "Inactive",
  },
];

const initialRoles = [
  {
    id: 1,
    name: "Admin",
    permissions: "Full Access",
    createdOn: "20/12/2025 | 14:23:37",
    lastUpdatedOn: "28/12/2025 | 14:23:37",
    status: "Active",
  },
  {
    id: 2,
    name: "Teacher",
    permissions: "Content Management",
    createdOn: "15/12/2025 | 10:00:00",
    lastUpdatedOn: "26/12/2025 | 11:30:00",
    status: "Active",
  },
  {
    id: 3,
    name: "Student",
    permissions: "Read Only",
    createdOn: "10/12/2025 | 09:00:00",
    lastUpdatedOn: "25/12/2025 | 15:45:00",
    status: "Active",
  },
  {
    id: 4,
    name: "Parent",
    permissions: "Reports & Analytics",
    createdOn: "05/12/2025 | 08:30:00",
    lastUpdatedOn: "20/12/2025 | 16:00:00",
    status: "Inactive",
  },
];

const availableRoles = [
  "Admin",
  "Teacher",
  "Student",
  "Parent",
  "Adminstrator",
];
const availablePermissions = [
  "Full Access",
  "Content Management",
  "Read Only",
  "Reports & Analytics",
];

const UsersAndRoles = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});

  const getUserFilterOptions = (field) =>
    [...new Set(users.map((u) => u[field]))].sort();
  const getRoleFilterOptions = (field) =>
    [...new Set(roles.map((r) => r[field]))].sort();
  const activeFilterCount = Object.values(filters).filter(
    (v) => v && v !== "All"
  ).length;
  const clearFilters = () => setFilters({});

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters = Object.entries(filters).every(
        ([field, value]) => !value || value === "All" || user[field] === value
      );
      return matchesSearch && matchesFilters;
    });
  }, [users, searchQuery, filters]);

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const matchesSearch =
        role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.permissions.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters = Object.entries(filters).every(
        ([field, value]) => !value || value === "All" || role[field] === value
      );
      return matchesSearch && matchesFilters;
    });
  }, [roles, searchQuery, filters]);

  const handleSelectAllUsers = (e) =>
    setSelectedUsers(e.target.checked ? filteredUsers.map((_, i) => i) : []);
  const handleSelectUser = (index) =>
    setSelectedUsers(
      selectedUsers.includes(index)
        ? selectedUsers.filter((i) => i !== index)
        : [...selectedUsers, index]
    );
  const handleSelectAllRoles = (e) =>
    setSelectedRoles(e.target.checked ? filteredRoles.map((_, i) => i) : []);
  const handleSelectRole = (index) =>
    setSelectedRoles(
      selectedRoles.includes(index)
        ? selectedRoles.filter((i) => i !== index)
        : [...selectedRoles, index]
    );
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchQuery("");
    setFilters({});
    setShowFilters(false);
  };

  const handleAddEntry = () => {
    if (activeTab === "user") {
      setUsers([
        ...users,
        {
          id: Date.now(),
          name: formData.name || "",
          email: formData.email || "",
          role: formData.role || "Student",
          status: formData.status || "Active",
        },
      ]);
    } else {
      const now = new Date();
      const dateStr = `${now.getDate().toString().padStart(2, "0")}/${(
        now.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${now.getFullYear()} | ${now
        .getHours()
        .toString()
        .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
      setRoles([
        ...roles,
        {
          id: Date.now(),
          name: formData.name || "",
          permissions: formData.permissions || "Read Only",
          createdOn: dateStr,
          lastUpdatedOn: dateStr,
          status: formData.status || "Active",
        },
      ]);
    }
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
    if (activeTab === "user") {
      setUsers(
        users.map((user) =>
          user.id === selectedItem.id ? { ...formData, id: user.id } : user
        )
      );
    } else {
      const now = new Date();
      const dateStr = `${now.getDate().toString().padStart(2, "0")}/${(
        now.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${now.getFullYear()} | ${now
        .getHours()
        .toString()
        .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
      setRoles(
        roles.map((role) =>
          role.id === selectedItem.id
            ? { ...formData, id: role.id, lastUpdatedOn: dateStr }
            : role
        )
      );
    }
    setIsEditModalOpen(false);
    setFormData({});
    setSelectedItem(null);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };
  const confirmDelete = () => {
    if (activeTab === "user")
      setUsers(users.filter((user) => user.id !== selectedItem.id));
    else setRoles(roles.filter((role) => role.id !== selectedItem.id));
    setSelectedItem(null);
  };

  const getRoleColor = (role) => {
    const colors = {
      Admin:
        "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400",
      Teacher:
        "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400",
      Student:
        "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400",
      Adminstrator:
        "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400",
      Manager:
        "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400",
    };
    return (
      colors[role] ||
      "bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400"
    );
  };

  const renderUserForm = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Enter full name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Enter email address"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
          Role
        </label>
        <select
          value={formData.role || "Student"}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          {availableRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
          Status
        </label>
        <select
          value={formData.status || "Active"}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
    </>
  );

  const renderRoleForm = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
          Role Name
        </label>
        <input
          type="text"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Enter role name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
          Permissions
        </label>
        <select
          value={formData.permissions || "Read Only"}
          onChange={(e) =>
            setFormData({ ...formData, permissions: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          {availablePermissions.map((perm) => (
            <option key={perm} value={perm}>
              {perm}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">
          Status
        </label>
        <select
          value={formData.status || "Active"}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
    </>
  );

  const currentData = activeTab === "user" ? users : roles;
  const currentFilteredData =
    activeTab === "user" ? filteredUsers : filteredRoles;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="mb-4 phablet:mb-6">
        <h1 className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
          Users & Roles
        </h1>
        <p className="text-sm phablet:text-base text-gray-500 dark:text-dark-text-secondary">
          Manage platform users and their access permissions.
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-dark-border mb-4 phablet:mb-6">
        <nav className="flex gap-4 phablet:gap-8 overflow-x-auto">
          <button
            onClick={() => handleTabChange("user")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "user"
                ? "text-gray-900 dark:text-dark-text border-gray-900 dark:border-primary"
                : "text-gray-500 dark:text-dark-text-muted border-transparent hover:text-gray-700 dark:hover:text-dark-text-secondary"
            }`}
          >
            User Management
          </button>
          <button
            onClick={() => handleTabChange("role")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "role"
                ? "text-gray-900 dark:text-dark-text border-gray-900 dark:border-primary"
                : "text-gray-500 dark:text-dark-text-muted border-transparent hover:text-gray-700 dark:hover:text-dark-text-secondary"
            }`}
          >
            Role Management
          </button>
        </nav>
      </div>

      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-3 phablet:p-4 tablet:p-6">
        <div className="mb-4 phablet:mb-6">
          <h2 className="text-base phablet:text-lg font-semibold text-gray-900 dark:text-dark-text mb-1">
            {activeTab === "user" ? "User Management" : "Role Management"}
          </h2>
          <p className="text-xs phablet:text-sm text-gray-500 dark:text-dark-text-secondary">
            {activeTab === "user"
              ? "Manage and configure user accounts and permissions."
              : "Create and manage roles with specific permissions."}
          </p>
        </div>

        <div className="flex flex-col phablet:flex-row phablet:items-center phablet:justify-between gap-3 phablet:gap-4 mb-4 phablet:mb-6">
          <div className="relative flex-1 phablet:max-w-xs">
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
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
                <FiChevronDown className="w-4 h-4" />
              </button>
              {showFilters && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg shadow-xl z-20 p-4">
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
                    {activeTab === "user" ? (
                      <>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 dark:text-dark-text-muted mb-1.5 uppercase tracking-wide">
                            Role
                          </label>
                          <select
                            value={filters.role || "All"}
                            onChange={(e) =>
                              setFilters({ ...filters, role: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="All">All Roles</option>
                            {getUserFilterOptions("role").map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 dark:text-dark-text-muted mb-1.5 uppercase tracking-wide">
                            Status
                          </label>
                          <select
                            value={filters.status || "All"}
                            onChange={(e) =>
                              setFilters({ ...filters, status: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 dark:text-dark-text-muted mb-1.5 uppercase tracking-wide">
                            Permissions
                          </label>
                          <select
                            value={filters.permissions || "All"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                permissions: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="All">All Permissions</option>
                            {getRoleFilterOptions("permissions").map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 dark:text-dark-text-muted mb-1.5 uppercase tracking-wide">
                            Status
                          </label>
                          <select
                            value={filters.status || "All"}
                            onChange={(e) =>
                              setFilters({ ...filters, status: e.target.value })
                            }
                            className="w-full px-3 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-900 dark:text-dark-text rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                      </>
                    )}
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
              Add {activeTab === "user" ? "User" : "Role"}
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

        {activeTab === "user" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-dark-border">
                  <th className="pb-3 pr-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        selectedUsers.length === filteredUsers.length &&
                        filteredUsers.length > 0
                      }
                      onChange={handleSelectAllUsers}
                      className="w-4 h-4 rounded border-gray-300 dark:border-dark-border text-primary focus:ring-primary/20"
                    />
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    User ID
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    User Name
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Email ID
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Role
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Status
                  </th>
                  <th className="pb-3 pl-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 dark:border-dark-border hover:bg-gray-50/50 dark:hover:bg-dark-surface-hover/50 transition-colors"
                    >
                      <td className="py-4 pr-4">
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(index)}
                          onChange={() => handleSelectUser(index)}
                          className="w-4 h-4 rounded border-gray-300 dark:border-dark-border text-primary focus:ring-primary/20"
                        />
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-dark-text-secondary">
                        UID{String(user.id).padStart(3, "0")}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 dark:text-dark-text font-medium">
                        {user.name}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-dark-text-secondary">
                        {user.email}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getRoleColor(
                            user.role
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400"
                              : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleView(user)}
                            className="p-1.5 text-gray-400 dark:text-dark-text-muted hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
                            title="View"
                          >
                            <FiEye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(user)}
                            className="p-1.5 text-gray-400 dark:text-dark-text-muted hover:text-gray-600 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
                            title="Edit"
                          >
                            <FiEdit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(user)}
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
                    <td colSpan={7} className="py-12 text-center">
                      <p className="text-gray-400 dark:text-dark-text-muted text-sm">
                        No users found
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "role" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-dark-border">
                  <th className="pb-3 pr-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        selectedRoles.length === filteredRoles.length &&
                        filteredRoles.length > 0
                      }
                      onChange={handleSelectAllRoles}
                      className="w-4 h-4 rounded border-gray-300 dark:border-dark-border text-primary focus:ring-primary/20"
                    />
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Role ID
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Role Name
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Permissions
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Created On
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Last Updated
                  </th>
                  <th className="pb-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Status
                  </th>
                  <th className="pb-3 pl-4 text-left text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRoles.length > 0 ? (
                  filteredRoles.map((role, index) => (
                    <tr
                      key={role.id}
                      className="border-b border-gray-100 dark:border-dark-border hover:bg-gray-50/50 dark:hover:bg-dark-surface-hover/50 transition-colors"
                    >
                      <td className="py-4 pr-4">
                        <input
                          type="checkbox"
                          checked={selectedRoles.includes(index)}
                          onChange={() => handleSelectRole(index)}
                          className="w-4 h-4 rounded border-gray-300 dark:border-dark-border text-primary focus:ring-primary/20"
                        />
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-dark-text-secondary">
                        RID{String(role.id).padStart(3, "0")}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 dark:text-dark-text font-medium">
                        {role.name}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400">
                          {role.permissions}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-dark-text-secondary">
                        {role.createdOn}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-dark-text-secondary">
                        {role.lastUpdatedOn}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            role.status === "Active"
                              ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400"
                              : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400"
                          }`}
                        >
                          {role.status}
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleView(role)}
                            className="p-1.5 text-gray-400 dark:text-dark-text-muted hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
                            title="View"
                          >
                            <FiEye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(role)}
                            className="p-1.5 text-gray-400 dark:text-dark-text-muted hover:text-gray-600 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
                            title="Edit"
                          >
                            <FiEdit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(role)}
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
                    <td colSpan={8} className="py-12 text-center">
                      <p className="text-gray-400 dark:text-dark-text-muted text-sm">
                        No roles found
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-4 text-sm text-gray-500 dark:text-dark-text-secondary">
          Showing {currentFilteredData.length} of {currentData.length} entries
          {activeFilterCount > 0 && ` (filtered)`}
        </div>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={`Add New ${activeTab === "user" ? "User" : "Role"}`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddEntry();
          }}
        >
          {activeTab === "user" ? renderUserForm() : renderRoleForm()}
          <div className="flex gap-3 justify-end mt-6">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-600 dark:text-dark-text-secondary text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg"
            >
              Add {activeTab === "user" ? "User" : "Role"}
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`Edit ${activeTab === "user" ? "User" : "Role"}`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveEdit();
          }}
        >
          {activeTab === "user" ? renderUserForm() : renderRoleForm()}
          <div className="flex gap-3 justify-end mt-6">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-600 dark:text-dark-text-secondary text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>

      {/* View Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title={`View ${activeTab === "user" ? "User" : "Role"} Details`}
      >
        {selectedItem && (
          <div className="space-y-4">
            {activeTab === "user" ? (
              <>
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-dark-border">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {selectedItem.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">
                      {selectedItem.name}
                    </h3>
                    <p className="text-gray-500 dark:text-dark-text-secondary">
                      UID{String(selectedItem.id).padStart(3, "0")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      Email
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                      {selectedItem.email}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      Role
                    </p>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getRoleColor(
                        selectedItem.role
                      )}`}
                    >
                      {selectedItem.role}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3 col-span-2">
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      Status
                    </p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        selectedItem.status === "Active"
                          ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400"
                          : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {selectedItem.status}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-dark-border">
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-lg font-bold">
                      {selectedItem.name?.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">
                      {selectedItem.name}
                    </h3>
                    <p className="text-gray-500 dark:text-dark-text-secondary">
                      RID{String(selectedItem.id).padStart(3, "0")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      Permissions
                    </p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400">
                      {selectedItem.permissions}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      Status
                    </p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        selectedItem.status === "Active"
                          ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400"
                          : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {selectedItem.status}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      Created On
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                      {selectedItem.createdOn}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-bg rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                      Last Updated
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                      {selectedItem.lastUpdatedOn}
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-4 py-2 border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-input text-gray-600 dark:text-dark-text-secondary text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-dark-surface-hover"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsViewModalOpen(false);
                  handleEdit(selectedItem);
                }}
                className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg"
              >
                Edit {activeTab === "user" ? "User" : "Role"}
              </button>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title={`Delete ${activeTab === "user" ? "User" : "Role"}`}
        message={`Are you sure you want to delete this ${
          activeTab === "user" ? "user" : "role"
        }? This action cannot be undone.`}
      />
    </div>
  );
};

export default UsersAndRoles;
