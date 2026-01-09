import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Sidebar appears expanded if not collapsed OR if collapsed but hovered
  const isSidebarExpanded = !isSidebarCollapsed || isSidebarHovered;

  const toggleSidebar = () => {
    // On mobile/tablet, toggle mobile sidebar
    if (window.innerWidth < 1024) {
      setIsMobileSidebarOpen(!isMobileSidebarOpen);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const handleSidebarMouseEnter = () => {
    if (isSidebarCollapsed) {
      setIsSidebarHovered(true);
    }
  };

  const handleSidebarMouseLeave = () => {
    setIsSidebarHovered(false);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 laptop:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar - Hidden on mobile, shown on laptop+ */}
      <div
        className={`laptop:block ${isMobileSidebarOpen ? "block" : "hidden"}`}
      >
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          isExpanded={isSidebarExpanded}
          onMouseEnter={handleSidebarMouseEnter}
          onMouseLeave={handleSidebarMouseLeave}
          onCloseMobile={closeMobileSidebar}
          isMobile={isMobileSidebarOpen}
        />
      </div>

      {/* Header */}
      <Header
        onMenuClick={toggleSidebar}
        isSidebarExpanded={isSidebarExpanded}
        isMobileView={true}
      />

      {/* Main Content - Adjust margin based on screen size */}
      <main
        className={`pt-14 phablet:pt-16 min-h-screen transition-all duration-300 ml-0 ${
          isSidebarExpanded ? "laptop:ml-[260px]" : "laptop:ml-[72px]"
        }`}
      >
        <div className="p-3 phablet:p-4 tablet:p-5 laptop:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
