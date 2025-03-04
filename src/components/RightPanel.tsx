"use client";

import { useTheme } from "@/hooks/useTheme";
import { FaSearch, FaBell, FaUserCircle, FaCog, FaSignOutAlt, FaCheck, FaUsers, FaFileAlt, FaCalendarAlt, FaShieldAlt, FaDatabase, FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const RightPanel = () => {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState(""); // 🔍 State for search input
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown
  const [showAdminTools, setShowAdminTools] = useState(false); // State to toggle Admin Tools & Settings
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown menu

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle Admin Tools & Settings visibility
  const handleSettingsClick = () => {
    setShowAdminTools(!showAdminTools); // Toggle visibility
    setIsProfileDropdownOpen(false); // Close the dropdown
  };

  return (
    <aside
      className={`w-80 p-6 shadow-lg transition-all bg-white text-gray-900`} // ✅ Set background to white
    >
      {/* 🔍 Search & Icons - Positioned at the Top-Right */}
      <div className="flex items-center justify-end space-x-4">
        {/* 🔍 Search Bar */}
        <div className="relative w-44">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery} // ✅ Binds input value to state
            onChange={(e) => setSearchQuery(e.target.value)} // ✅ Updates state on typing
            className="w-full p-2 pl-10 bg-white text-gray-700 rounded-full shadow-md focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-300" />
        </div>

        {/* 🔔 Notifications Icon */}
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-xl hover:text-blue-500 transition" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* 👤 User Profile Icon with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="cursor-pointer"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <FaUserCircle className="text-gray-600 text-2xl hover:text-blue-500 transition" />
          </div>

          {/* Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2">
                  <FaUserCircle className="text-gray-600" />
                  <span>Profile</span>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer"
                  onClick={handleSettingsClick} // Toggle Admin Tools & Settings
                >
                  <FaCog className="text-gray-600" />
                  <span>Settings</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2">
                  <FaSignOutAlt className="text-gray-600" />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Display Search Result */}
      {searchQuery && (
        <div className="mt-4 p-2 bg-gray-200 text-gray-800 rounded-md shadow-sm">
          Searching for: <span className="font-semibold">{searchQuery}</span>
        </div>
      )}

      {/* 📘 Notifications Panel */}
      <section className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-3xl shadow-md text-white">
        <h2 className="text-lg font-semibold mb-3">Notifications</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <FaCheck className="text-green-300" />
            <span>Pending Approvals: 5</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-200" />
            <span>New Messages: 3</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaBell className="text-red-200" />
            <span>System Alerts: 1</span>
          </li>
        </ul>
      </section>

      {/* 🚀 Quick Actions */}
      <section className="mt-6 bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-3xl shadow-md text-white">
        <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <FaCheck className="text-green-300" />
            <span>Approve user Requests</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers className="text-blue-200" />
            <span>Manage User Accounts</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaFileAlt className="text-purple-200" />
            <span>Generate Reports</span>
          </li>
        </ul>
      </section>

      {/* 📅 Recent Activities */}
      <section className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-3xl shadow-md text-white">
        <h2 className="text-lg font-semibold mb-3">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <FaUserCircle className="text-gray-200" />
            <span>Recent Logins: 12</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaFileAlt className="text-gray-200" />
            <span>Trending features: 5</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaCalendarAlt className="text-gray-200" />
            <span>Upcoming Projects: 3</span>
          </li>
        </ul>
      </section>

      {/* ⚙️ Admin Tools & Settings */}
      {showAdminTools && (
        <section className="mt-6 bg-white p-4 rounded-3xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">Admin Tools & Settings</h2>
          <div className="space-y-3">
            <Button
              icon={<FaCog className="text-gray-500" />}
              title="System Configuration"
              description="Manage themes, permissions, integrations"
              onClick={() => console.log("System Configuration clicked")}
            />
            <Button
              icon={<FaShieldAlt className="text-gray-500" />}
              title="Security & Access Logs"
              description="View login attempts and security alerts"
              onClick={() => console.log("Security & Access Logs clicked")}
            />
            <Button
              icon={<FaDatabase className="text-gray-100" />}
              title="Backup & Restore Data"
              description="System backup controls"
              onClick={() => console.log("Backup & Restore Data clicked")}
            />
          </div>
        </section>
      )}

      {/* ❓ Help & Support */}
      <section className="mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 p-4 rounded-3xl shadow-md text-white">
        <h2 className="text-lg font-semibold mb-3">Help & Support</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <FaQuestionCircle className="text-gray-200" />
            <span>Admin Guide</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-200" />
            <span>Contact Technical Support</span>
          </li>
        </ul>
      </section>
    </aside>
  );
};

// ✅ Reusable Button Component
const Button = ({ icon, title, description, onClick }: { icon: React.ReactNode; title: string; description: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-left transition-all"
    >
      <div className="flex items-center space-x-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default RightPanel;