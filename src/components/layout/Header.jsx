import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiSearch,
  FiGlobe,
  FiBell,
  FiChevronDown,
  FiSun,
  FiMoon,
  FiSettings,
  FiLogOut,
  FiCheck,
} from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import ThinkMentorLogo from "../../assets/ThinkMentorLogo";

// Map routes to section names
const routeToSection = {
  "/superadmin/dashboard": "Dashboard",
  "/superadmin/data-hub": "Data Hub",
  "/superadmin/syllabus": "Syllabus Management",
  "/superadmin/users-roles": "Users & Roles",
  "/superadmin/settings": "Settings",
};

const notifications = [
  {
    id: 1,
    title: "New user registered",
    message: "John Doe has registered as a teacher",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "System update",
    message: "Platform will undergo maintenance at 2 AM",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Course approved",
    message: "Mathematics Grade 10 syllabus has been approved",
    time: "3 hours ago",
    unread: false,
  },
];

const Header = ({ onMenuClick, isSidebarExpanded }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isNotifDropdownOpen, setIsNotifDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const langDropdownRef = useRef(null);
  const notifDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setIsLangDropdownOpen(false);
      }
      if (
        notifDropdownRef.current &&
        !notifDropdownRef.current.contains(event.target)
      ) {
        setIsNotifDropdownOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get current section name based on route
  const currentSection = routeToSection[location.pathname] || "Dashboard";
  const currentLang = availableLanguages.find((l) => l.code === language);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Implement search functionality here
    }
  };

  const handleLogout = () => {
    setIsProfileDropdownOpen(false);
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 right-0 h-14 phablet:h-16 bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border flex items-center justify-between px-3 phablet:px-4 z-50 transition-all duration-300 ${
        isSidebarExpanded ? "left-0 laptop:left-[260px]" : "left-0"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2 phablet:gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
          title="Toggle Sidebar"
        >
          <FiMenu className="w-5 h-5 phablet:w-6 phablet:h-6" />
        </button>

        {/* Brand Name */}
        <div className="flex items-center gap-2 phablet:gap-3">
          <ThinkMentorLogo className="w-8 h-8 phablet:w-9 phablet:h-9" />
          <span className="text-base phablet:text-lg font-bold text-gray-900 dark:text-white">
            Think<span className="text-[#1B42C1]">Mentor</span>
          </span>
        </div>
      </div>

      {/* Center - Search - Hidden on mobile, shown on tablet+ */}
      <form
        onSubmit={handleSearch}
        className="hidden tablet:flex flex-1 max-w-xl mx-4 laptop:mx-8"
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-dark-text-muted">
            <FiSearch className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-input border border-gray-200 dark:border-dark-border rounded-lg text-sm text-gray-900 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </form>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            <FiSun className="w-5 h-5" />
          ) : (
            <FiMoon className="w-5 h-5" />
          )}
        </button>

        {/* Language Selector */}
        <div className="relative" ref={langDropdownRef}>
          <button
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors"
          >
            <FiGlobe className="w-5 h-5" />
            <span className="text-sm font-medium">
              {currentLang?.nativeName || currentLang?.name}
            </span>
            <FiChevronDown
              className={`w-4 h-4 transition-transform ${
                isLangDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isLangDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border shadow-lg py-2 z-50">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </span>
                  {language === lang.code && (
                    <FiCheck className="w-4 h-4 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative" ref={notifDropdownRef}>
          <button
            onClick={() => setIsNotifDropdownOpen(!isNotifDropdownOpen)}
            className="p-2 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-surface-hover rounded-lg transition-colors relative"
          >
            <FiBell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {isNotifDropdownOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border shadow-lg z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-dark-text">
                  Notifications
                </h3>
                {unreadCount > 0 && (
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {unreadCount} new
                  </span>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`px-4 py-3 border-b border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg cursor-pointer transition-colors ${
                      notif.unread ? "bg-indigo-50/50 dark:bg-indigo-500/5" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          notif.unread ? "bg-indigo-500" : "bg-gray-300"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                          {notif.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-dark-text-secondary mt-0.5">
                          {notif.message}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-dark-text-muted mt-1">
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-200 dark:border-dark-border">
                <button className="w-full text-center text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative" ref={profileDropdownRef}>
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="p-1 text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text rounded-full transition-colors"
          >
            <div className="w-9 h-9 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-dark-surface">
              <span className="text-white text-sm font-semibold">SA</span>
            </div>
          </button>

          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border shadow-lg z-50 overflow-hidden">
              {/* User Info */}
              <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-border">
                <p className="font-medium text-gray-900 dark:text-dark-text">
                  Super Admin
                </p>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  superadmin@thinkmentor.com
                </p>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <button
                  onClick={() => {
                    setIsProfileDropdownOpen(false);
                    navigate("/superadmin/settings");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-bg transition-colors"
                >
                  <FiSettings className="w-4 h-4" />
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                >
                  <FiLogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
