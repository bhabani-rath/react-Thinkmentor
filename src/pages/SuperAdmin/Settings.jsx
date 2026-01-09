import React, { useState } from "react";
import {
  FiSettings,
  FiUser,
  FiLock,
  FiBell,
  FiGlobe,
  FiMail,
  FiShield,
  FiDatabase,
  FiSave,
  FiToggleLeft,
  FiToggleRight,
  FiUpload,
  FiCamera,
} from "react-icons/fi";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    platformName: "ThinkMentor",
    supportEmail: "support@thinkmentor.com",
    timezone: "Asia/Kolkata",
    language: "en",
    emailNotifications: true,
    pushNotifications: true,
    maintenanceMode: false,
    twoFactorAuth: true,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    dataRetention: 365,
    autoBackup: true,
  });

  const tabs = [
    { id: "general", label: "General", icon: FiSettings },
    { id: "security", label: "Security", icon: FiShield },
    { id: "notifications", label: "Notifications", icon: FiBell },
    { id: "system", label: "System", icon: FiDatabase },
  ];

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const ToggleSwitch = ({ enabled, onToggle }) => (
    <button
      onClick={onToggle}
      className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
        enabled ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
          enabled ? "left-7" : "left-1"
        }`}
      />
    </button>
  );

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      {/* Platform Settings */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
          Platform Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
              Platform Name
            </label>
            <input
              type="text"
              value={settings.platformName}
              onChange={(e) => handleChange("platformName", e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
              Support Email
            </label>
            <input
              type="email"
              value={settings.supportEmail}
              onChange={(e) => handleChange("supportEmail", e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Timezone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleChange("timezone", e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
              >
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                <option value="America/New_York">America/New York (EST)</option>
                <option value="Europe/London">Europe/London (GMT)</option>
                <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Default Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleChange("language", e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Branding */}
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
          Branding
        </h3>
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-gray-100 dark:bg-dark-bg rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-dark-border">
            <FiCamera className="w-8 h-8 text-gray-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-3">
              Upload your platform logo. Recommended size: 200x200px
            </p>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-dark-text rounded-lg hover:bg-gray-200 dark:hover:bg-dark-border transition-colors">
              <FiUpload className="w-4 h-4" />
              Upload Logo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
          Authentication
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-dark-border">
            <div>
              <p className="font-medium text-gray-900 dark:text-dark-text">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Require 2FA for all admin accounts
              </p>
            </div>
            <ToggleSwitch
              enabled={settings.twoFactorAuth}
              onToggle={() => handleToggle("twoFactorAuth")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={settings.sessionTimeout}
              onChange={(e) =>
                handleChange("sessionTimeout", parseInt(e.target.value))
              }
              className="w-48 px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
              Max Login Attempts
            </label>
            <input
              type="number"
              value={settings.maxLoginAttempts}
              onChange={(e) =>
                handleChange("maxLoginAttempts", parseInt(e.target.value))
              }
              className="w-48 px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
          Notification Preferences
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-dark-border">
            <div>
              <p className="font-medium text-gray-900 dark:text-dark-text">
                Email Notifications
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Receive important updates via email
              </p>
            </div>
            <ToggleSwitch
              enabled={settings.emailNotifications}
              onToggle={() => handleToggle("emailNotifications")}
            />
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-dark-border">
            <div>
              <p className="font-medium text-gray-900 dark:text-dark-text">
                Push Notifications
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Receive real-time push notifications
              </p>
            </div>
            <ToggleSwitch
              enabled={settings.pushNotifications}
              onToggle={() => handleToggle("pushNotifications")}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
          System Configuration
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-dark-border">
            <div>
              <p className="font-medium text-gray-900 dark:text-dark-text">
                Maintenance Mode
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Enable maintenance mode to restrict access
              </p>
            </div>
            <ToggleSwitch
              enabled={settings.maintenanceMode}
              onToggle={() => handleToggle("maintenanceMode")}
            />
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-dark-border">
            <div>
              <p className="font-medium text-gray-900 dark:text-dark-text">
                Automatic Backups
              </p>
              <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                Automatically backup data daily
              </p>
            </div>
            <ToggleSwitch
              enabled={settings.autoBackup}
              onToggle={() => handleToggle("autoBackup")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
              Data Retention Period (days)
            </label>
            <input
              type="number"
              value={settings.dataRetention}
              onChange={(e) =>
                handleChange("dataRetention", parseInt(e.target.value))
              }
              className="w-48 px-4 py-2.5 bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-dark-text"
            />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 dark:bg-red-500/10 rounded-xl border border-red-200 dark:border-red-500/30 p-6">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
          Danger Zone
        </h3>
        <p className="text-sm text-red-600 dark:text-red-300 mb-4">
          These actions are irreversible. Please proceed with caution.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-500/30 transition-colors font-medium">
            Clear All Cache
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
            Reset Platform
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "security":
        return renderSecuritySettings();
      case "notifications":
        return renderNotificationSettings();
      case "system":
        return renderSystemSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex flex-col phablet:flex-row phablet:items-center phablet:justify-between mb-4 phablet:mb-6">
        <div className="mb-3 phablet:mb-0">
          <h1 className="text-xl phablet:text-2xl font-bold text-gray-900 dark:text-dark-text mb-1">
            Settings
          </h1>
          <p className="text-sm phablet:text-base text-gray-500 dark:text-dark-text-secondary">
            Configure your platform settings and preferences.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-indigo-500/30 w-full phablet:w-auto">
          <FiSave className="w-4 h-4" />
          <span className="font-medium">Save Changes</span>
        </button>
      </div>

      {/* Tabs and Content */}
      <div className="flex flex-col tablet:flex-row gap-4 phablet:gap-6">
        {/* Sidebar Tabs - Horizontal on mobile, vertical on tablet+ */}
        <div className="tablet:w-56 laptop:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border p-1.5 phablet:p-2">
            <div className="flex tablet:flex-col gap-1 overflow-x-auto tablet:overflow-x-visible pb-1 tablet:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 phablet:gap-3 px-3 phablet:px-4 py-2.5 phablet:py-3 rounded-lg transition-all duration-200 whitespace-nowrap tablet:w-full ${
                      activeTab === tab.id
                        ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        : "text-gray-600 dark:text-dark-text-secondary hover:bg-gray-50 dark:hover:bg-dark-bg"
                    }`}
                  >
                    <Icon className="w-4 h-4 phablet:w-5 phablet:h-5" />
                    <span className="font-medium text-sm phablet:text-base">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Settings;
