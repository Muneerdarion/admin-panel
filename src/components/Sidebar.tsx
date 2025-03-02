"use client";

import { FaHome, FaBook, FaStar, FaCalendarAlt, FaChartBar, FaSignOutAlt, FaPlus, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <aside
      className={`w-64 min-h-screen flex flex-col justify-between p-6 shadow-lg transition-all ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-b from-blue-200 to-indigo-300 text-gray-900"
      }`}
    >
      {/* "Darion" as Heading */}
      <h2 className="text-5xl font-extrabold text-orange-500 text-center mt-8">Darion</h2>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-start mt-6">
        <ul className="space-y-4">
          <SidebarItem href="/" icon={<FaHome />} label="Home" active />
          <SidebarItem href="/courses" icon={<FaBook />} label="All Courses" />
          <SidebarItem href="/popular" icon={<FaStar />} label="Collabration" />
          <SidebarItem href="/schedule" icon={<FaCalendarAlt />} label="Schedule" />
          <SidebarItem href="/stats" icon={<FaChartBar />} label="Statistics" />
        </ul>
      </div>

      {/* Lower Section - Theme Toggle, Add Course, Logout */}
      <div className="space-y-3 pb-6">
        {/* 🌗 Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* 📌 Add Course Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition">
          <FaPlus /> Add New Course
        </button>

        {/* Logout Button */}
        <SidebarItem href="/logout" icon={<FaSignOutAlt />} label="Log Out" isLogout />
      </div>
    </aside>
  );
};

// Sidebar Item Component
interface SidebarItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
  active?: boolean;
  isLogout?: boolean;
}

const SidebarItem = ({ href, icon, label, active = false, isLogout = false }: SidebarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center space-x-3 p-3 rounded-lg transition duration-400 ${
          active
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        } ${isLogout ? "text-red-500 hover:bg-red-100 dark:hover:bg-red-700" : ""}`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
