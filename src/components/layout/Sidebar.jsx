import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiDatabase,
  FiBook,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiChevronRight,
  FiFileText,
  FiClipboard,
  FiCalendar,
  FiCheckSquare,
  FiAward,
  FiMessageCircle,
  FiBell,
  FiBarChart2,
  FiClock,
  FiHome,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Sidebar = ({ isCollapsed, isExpanded, onMouseEnter, onMouseLeave }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Detect user type from URL
  const getUserType = () => {
    const path = location.pathname;
    if (path.startsWith("/superadmin")) return "superadmin";
    if (path.startsWith("/admin")) return "admin";
    if (path.startsWith("/adminstrator")) return "adminstrator";
    if (path.startsWith("/teacher")) return "teacher";
    if (path.startsWith("/student")) return "student";
    if (path.startsWith("/parent")) return "parent";
    return "superadmin";
  };

  const userType = getUserType();

  // User type configurations
  const userConfigs = {
    superadmin: {
      name: "Super Admin",
      initials: "SA",
      color: "from-amber-500 to-amber-600",
      shadowColor: "shadow-amber-500/30",
    },
    admin: {
      name: "Admin",
      initials: "AD",
      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/30",
    },
    adminstrator: {
      name: "Administrator",
      initials: "AM",
      color: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/30",
    },
    teacher: {
      name: "Teacher",
      initials: "TC",
      color: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30",
    },
    student: {
      name: "Student",
      initials: "ST",
      color: "from-cyan-500 to-cyan-600",
      shadowColor: "shadow-cyan-500/30",
    },
    parent: {
      name: "Parent",
      initials: "PA",
      color: "from-pink-500 to-pink-600",
      shadowColor: "shadow-pink-500/30",
    },
  };

  // Menu items for each user type
  const menuItemsByUserType = {
    superadmin: [
      {
        sectionKey: "sections.main",
        items: [
          {
            nameKey: "nav.dashboard",
            path: "/superadmin/dashboard",
            icon: FiGrid,
          },
        ],
      },
      {
        sectionKey: "sections.content",
        items: [
          {
            nameKey: "nav.dataHub",
            path: "/superadmin/data-hub",
            icon: FiDatabase,
          },
          {
            nameKey: "nav.syllabus",
            path: "/superadmin/syllabus",
            icon: FiBook,
            badge: "New",
          },
        ],
      },
      {
        sectionKey: "sections.management",
        items: [
          {
            nameKey: "nav.usersRoles",
            path: "/superadmin/users-roles",
            icon: FiUsers,
          },
          {
            nameKey: "nav.settings",
            path: "/superadmin/settings",
            icon: FiSettings,
          },
        ],
      },
    ],
    admin: [
      {
        sectionKey: "sections.main",
        items: [
          { nameKey: "nav.dashboard", path: "/admin/dashboard", icon: FiGrid },
        ],
      },
      {
        sectionKey: "sections.management",
        items: [
          { name: "Students", path: "/admin/students", icon: FiUsers },
          { name: "Teachers", path: "/admin/teachers", icon: FiUsers },
          { name: "Courses", path: "/admin/courses", icon: FiBook },
        ],
      },
      {
        sectionKey: "sections.reports",
        items: [
          { name: "Reports", path: "/admin/reports", icon: FiBarChart2 },
          {
            name: "Attendance",
            path: "/admin/attendance",
            icon: FiCheckSquare,
          },
          { name: "Settings", path: "/admin/settings", icon: FiSettings },
        ],
      },
    ],
    adminstrator: [
      {
        sectionKey: "sections.main",
        items: [
          {
            nameKey: "nav.dashboard",
            path: "/adminstrator/dashboard",
            icon: FiGrid,
          },
        ],
      },
      {
        sectionKey: "sections.operations",
        items: [
          {
            name: "Staff Management",
            path: "/adminstrator/staff",
            icon: FiUsers,
          },
          {
            name: "Documents",
            path: "/adminstrator/documents",
            icon: FiFileText,
          },
          { name: "Tasks", path: "/adminstrator/tasks", icon: FiClipboard },
        ],
      },
      {
        sectionKey: "sections.system",
        items: [
          { name: "System Logs", path: "/adminstrator/logs", icon: FiDatabase },
          {
            name: "Maintenance",
            path: "/adminstrator/maintenance",
            icon: FiSettings,
          },
        ],
      },
    ],
    teacher: [
      {
        sectionKey: "sections.main",
        items: [
          {
            nameKey: "nav.dashboard",
            path: "/teacher/dashboard",
            icon: FiGrid,
          },
        ],
      },
      {
        sectionKey: "sections.teaching",
        items: [
          {
            name: "Content Hub",
            path: "/teacher/content-hub",
            icon: FiDatabase,
            badge: "New",
          },
          { name: "My Classes", path: "/teacher/classes", icon: FiBook },
          { name: "Schedule", path: "/teacher/schedule", icon: FiCalendar },
          {
            name: "Assignments",
            path: "/teacher/assignments",
            icon: FiCheckSquare,
          },
        ],
      },
      {
        sectionKey: "sections.students",
        items: [
          { name: "My Students", path: "/teacher/students", icon: FiUsers },
          {
            name: "Attendance",
            path: "/teacher/attendance",
            icon: FiClipboard,
          },
          { name: "Grades", path: "/teacher/grades", icon: FiAward },
        ],
      },
    ],
    student: [
      {
        sectionKey: "sections.main",
        items: [
          {
            nameKey: "nav.dashboard",
            path: "/student/dashboard",
            icon: FiGrid,
          },
        ],
      },
      {
        sectionKey: "sections.learning",
        items: [
          { name: "My Courses", path: "/student/courses", icon: FiBook },
          { name: "Schedule", path: "/student/schedule", icon: FiCalendar },
          {
            name: "Assignments",
            path: "/student/assignments",
            icon: FiCheckSquare,
          },
        ],
      },
      {
        sectionKey: "sections.progress",
        items: [
          { name: "My Grades", path: "/student/grades", icon: FiAward },
          { name: "Attendance", path: "/student/attendance", icon: FiClock },
          { name: "Resources", path: "/student/resources", icon: FiFileText },
        ],
      },
    ],
    parent: [
      {
        sectionKey: "sections.main",
        items: [
          { nameKey: "nav.dashboard", path: "/parent/dashboard", icon: FiGrid },
        ],
      },
      {
        sectionKey: "sections.children",
        items: [
          { name: "My Children", path: "/parent/children", icon: FiUsers },
          {
            name: "Performance",
            path: "/parent/performance",
            icon: FiBarChart2,
          },
          {
            name: "Attendance",
            path: "/parent/attendance",
            icon: FiCheckSquare,
          },
        ],
      },
      {
        sectionKey: "sections.communication",
        items: [
          { name: "Messages", path: "/parent/messages", icon: FiMessageCircle },
          {
            name: "Notifications",
            path: "/parent/notifications",
            icon: FiBell,
          },
          { name: "Events", path: "/parent/events", icon: FiCalendar },
        ],
      },
    ],
  };

  const menuItems =
    menuItemsByUserType[userType] || menuItemsByUserType.superadmin;
  const currentUserConfig = userConfigs[userType];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-light-surface-alt dark:bg-dark-surface/50 border-r border-light-border dark:border-dark-border transition-all duration-300 ease-in-out z-40 flex flex-col backdrop-blur-xl ${
        isExpanded ? "w-[260px]" : "w-[72px]"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Spacer for header alignment */}
      <div className="h-14 phablet:h-16" />

      {/* Navigation */}
      <nav className="flex-1 py-3 phablet:py-4 overflow-y-auto">
        {menuItems.map((section, sectionIndex) => (
          <div
            key={section.sectionKey}
            className={sectionIndex > 0 ? "mt-4 phablet:mt-6" : ""}
          >
            {/* Section Label */}
            {isExpanded && (
              <div className="px-4 phablet:px-5 py-2">
                <span className="text-[10px] phablet:text-[11px] font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                  {t(section.sectionKey) !== section.sectionKey
                    ? t(section.sectionKey)
                    : section.sectionKey.split(".")[1]?.toUpperCase() ||
                      section.sectionKey}
                </span>
              </div>
            )}

            {/* Collapsed Section Divider */}
            {!isExpanded && sectionIndex > 0 && (
              <div className="mx-4 my-2 border-t border-gray-200 dark:border-dark-border" />
            )}

            {/* Menu Items */}
            <div className="space-y-1 px-2 phablet:px-3">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                const itemName = item.nameKey ? t(item.nameKey) : item.name;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`group relative flex items-center gap-3 px-3 py-2.5 phablet:py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                        : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-dark-surface hover:text-gray-900 dark:hover:text-white hover:shadow-sm"
                    } ${!isExpanded ? "justify-center" : ""}`}
                    title={!isExpanded ? itemName : ""}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full -ml-2 phablet:-ml-3" />
                    )}

                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center ${
                        isActive
                          ? ""
                          : "group-hover:scale-110 transition-transform"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Label */}
                    {isExpanded && (
                      <>
                        <span className="text-sm font-medium whitespace-nowrap flex-1">
                          {itemName}
                        </span>

                        {/* Badge */}
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 rounded-full">
                            {item.badge}
                          </span>
                        )}

                        {/* Hover Arrow */}
                        <FiChevronRight
                          className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                            isActive ? "text-white/70" : "text-gray-400"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User Profile Card */}
      <div className="p-2 phablet:p-3 border-t border-light-border dark:border-dark-border">
        <div
          className={`flex items-center gap-3 p-2 phablet:p-3 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border-light dark:border-dark-border hover:border-primary/30 dark:hover:border-indigo-500/30 transition-all duration-200 cursor-pointer group ${
            !isExpanded ? "justify-center" : ""
          }`}
          title={!isExpanded ? currentUserConfig.name : ""}
        >
          {/* Profile Picture */}
          <div className="relative">
            <div
              className={`w-9 h-9 phablet:w-10 phablet:h-10 rounded-xl bg-linear-to-br ${currentUserConfig.color} flex items-center justify-center shrink-0 shadow-lg ${currentUserConfig.shadowColor}`}
            >
              <span className="text-white text-sm font-bold">
                {currentUserConfig.initials}
              </span>
            </div>
            {/* Online Status */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-dark-surface" />
          </div>

          {/* Name and Role */}
          {isExpanded && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {currentUserConfig.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {currentUserConfig.name}
                </p>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                title="Logout"
              >
                <FiLogOut className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
