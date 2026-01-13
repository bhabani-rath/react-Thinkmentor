import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiDatabase,
  FiBook,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

const Sidebar = ({ isCollapsed, isExpanded, onMouseEnter, onMouseLeave }) => {
  const location = useLocation();
  const { t } = useLanguage();

  // Menu items with translation keys
  const menuItems = [
    {
      sectionKey: "sections.main",
      items: [
        {
          nameKey: "nav.dashboard",
          path: "/superadmin/dashboard",
          icon: FiGrid,
          badge: null,
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
          badge: null,
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
          badge: null,
        },
        {
          nameKey: "nav.settings",
          path: "/superadmin/settings",
          icon: FiSettings,
          badge: null,
        },
      ],
    },
  ];

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
                  {t(section.sectionKey)}
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

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`group relative flex items-center gap-3 px-3 py-2.5 phablet:py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                        : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-dark-surface hover:text-gray-900 dark:hover:text-white hover:shadow-sm"
                    } ${!isExpanded ? "justify-center" : ""}`}
                    title={!isExpanded ? t(item.nameKey) : ""}
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
                          {t(item.nameKey)}
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
          title={!isExpanded ? t("user.superAdmin") : ""}
        >
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-9 h-9 phablet:w-10 phablet:h-10 rounded-xl bg-linear-to-br from-amber-500 to-amber-600 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
              <span className="text-white text-sm font-bold">SA</span>
            </div>
            {/* Online Status */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-dark-surface" />
          </div>

          {/* Name and Role */}
          {isExpanded && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {t("user.superAdmin")}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {t("user.administrator")}
                </p>
              </div>

              {/* Logout Button */}
              <button
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                title={t("nav.logout")}
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
