import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// Icons as components
const DashboardIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const DataHubIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="4" y1="10" x2="20" y2="10" />
    <line x1="10" y1="4" x2="10" y2="20" />
  </svg>
);

const SyllabusIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const menuItems = [
  {
    section: "OVERVIEW",
    items: [{ name: "Dashboard", path: "/dashboard", icon: DashboardIcon }],
  },
  {
    section: "MASTER DATA",
    items: [
      { name: "Data Hub", path: "/data-hub", icon: DataHubIcon },
      { name: "Syllabus Management", path: "/syllabus", icon: SyllabusIcon },
    ],
  },
  {
    section: "ADMINISTRATION",
    items: [
      { name: "Users & Roles", path: "/users-roles", icon: UsersIcon },
      { name: "Settings", path: "/settings", icon: SettingsIcon },
    ],
  },
];

const Sidebar = ({ isCollapsed, isExpanded, onMouseEnter, onMouseLeave }) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-sidebar-bg text-white transition-all duration-300 ease-in-out z-40 flex flex-col ${
        isExpanded ? "w-[260px]" : "w-[72px]"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center px-4 border-b border-gray-700/50">
        <div
          className={`flex items-center gap-3 ${
            !isExpanded ? "justify-center w-full" : ""
          }`}
        >
          <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center shadow-md shadow-amber-500/20 shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7zm2.9 11.1l-.9.6V16h-4v-2.3l-.9-.6C7.8 12.2 7 10.6 7 9c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.6-.8 3.2-2.1 4.1z" />
            </svg>
          </div>
          {isExpanded && (
            <span className="text-lg font-bold text-white">
              Think
              <span className="text-amber-400">Mentor</span>
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((section, sectionIndex) => (
          <div key={section.section} className={sectionIndex > 0 ? "mt-6" : ""}>
            {/* Section Label */}
            {isExpanded && (
              <div className="px-6 py-2">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                  {section.section}
                </span>
              </div>
            )}

            {/* Menu Items */}
            <div className="space-y-1 px-3">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                        : "text-gray-300 hover:bg-sidebar-hover hover:text-white"
                    } ${!isExpanded ? "justify-center" : ""}`}
                    title={!isExpanded ? item.name : ""}
                  >
                    <Icon />
                    {isExpanded && (
                      <span className="text-sm font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-3 border-t border-gray-700/50">
        <div
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-hover transition-all duration-200 cursor-pointer ${
            !isExpanded ? "justify-center" : ""
          }`}
          title={!isExpanded ? "Super Admin" : ""}
        >
          {/* Profile Picture */}
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 ring-2 ring-indigo-400/30">
            <span className="text-white text-sm font-semibold">SA</span>
          </div>

          {/* Name and Role */}
          {isExpanded && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Super Admin
              </p>
              <p className="text-xs text-gray-400 truncate">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
