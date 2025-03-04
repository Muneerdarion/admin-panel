"use client";

import Image from "next/image";
import {
  FaHome,
  FaUsers,
  FaBook,
  FaStar,
  FaCalendarAlt,
  FaChartBar,
  FaSignOutAlt,
  FaPlus,
  FaMoon,
  FaSun,
  FaInbox,
  FaCog,
  FaComments,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserShield,
  FaTasks,
  FaClipboardCheck,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <aside
      className={`w-64 min-h-screen flex flex-col justify-between p-6 shadow-lg transition-all ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-b from-blue-200 to-indigo-300 text-gray-900"
      }`}
    >
      {/* Logo on the Left Side */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-20 h-20 flex items-center justify-center text-white text-[32px] font-semibold rounded-full bg-orange-500 shadow-xl transform hover:scale-110 transition-all">
          Da
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-start">
        <ul className="space-y-2">
          {/* Home */}
          <SidebarItem href="/" icon={<FaHome />} label="Home" active />

          {/* User Management */}
          <SidebarItemWithSubMenu
            icon={<FaUsers />}
            label="User Management"
            isOpen={openSubMenu === "userManagement"}
            onClick={() => toggleSubMenu("userManagement")}
          >
            <SidebarItem href="/students" icon={<FaUserGraduate />} label="Students" />
            <SidebarItem href="/teachers" icon={<FaChalkboardTeacher />} label="Teachers" />
            <SidebarItem href="/admins" icon={<FaUserShield />} label="Admins" />
          </SidebarItemWithSubMenu>

          {/* Course Management */}
          <SidebarItemWithSubMenu
            icon={<FaBook />}
            label="Course Management"
            isOpen={openSubMenu === "courseManagement"}
            onClick={() => toggleSubMenu("courseManagement")}
          >
            <SidebarItem href="/create-course" icon={<FaPlus />} label="Create Course" />
            <SidebarItem href="/edit-course" icon={<FaCog />} label="Edit Course" />
            <SidebarItem href="/approve-courses" icon={<FaClipboardCheck />} label="Approve Courses" />
          </SidebarItemWithSubMenu>

          {/* Collaboration */}
          <SidebarItemWithSubMenu
            icon={<FaStar />}
            label="Collaboration"
            isOpen={openSubMenu === "collaboration"}
            onClick={() => toggleSubMenu("collaboration")}
          >
            <SidebarItem href="/discussions" icon={<FaComments />} label="Discussions" />
            <SidebarItem href="/groups" icon={<FaUsers />} label="Groups" />
            <SidebarItem href="/messages" icon={<FaEnvelope />} label="Messages" />
          </SidebarItemWithSubMenu>

          {/* Schedule & Events */}
          <SidebarItemWithSubMenu
            icon={<FaCalendarAlt />}
            label="Schedule & Events"
            isOpen={openSubMenu === "scheduleEvents"}
            onClick={() => toggleSubMenu("scheduleEvents")}
          >
            <SidebarItem href="/meetings" icon={<FaCalendarAlt />} label="Meetings" />
            <SidebarItem href="/exams" icon={<FaTasks />} label="Exams" />
            <SidebarItem href="/deadlines" icon={<FaClipboardCheck />} label="Deadlines" />
          </SidebarItemWithSubMenu>

          {/* Statistics & Reports */}
          <SidebarItemWithSubMenu
            icon={<FaChartBar />}
            label="Statistics & Reports"
            isOpen={openSubMenu === "statisticsReports"}
            onClick={() => toggleSubMenu("statisticsReports")}
          >
            <SidebarItem href="/analytics" icon={<FaChartBar />} label="Analytics" />
            <SidebarItem href="/engagement" icon={<FaStar />} label="Engagement" />
            <SidebarItem href="/performance" icon={<FaClipboardCheck />} label="Performance" />
          </SidebarItemWithSubMenu>

          {/* Inbox & Support */}
          <SidebarItemWithSubMenu
            icon={<FaInbox />}
            label="Inbox & Support"
            isOpen={openSubMenu === "inboxSupport"}
            onClick={() => toggleSubMenu("inboxSupport")}
          >
            <SidebarItem href="/messages" icon={<FaEnvelope />} label="Messages" />
            <SidebarItem href="/queries" icon={<FaComments />} label="Queries" />
            <SidebarItem href="/complaints" icon={<FaClipboardCheck />} label="Complaints" />
          </SidebarItemWithSubMenu>
        </ul>
      </div>

      {/* Lower Section - Theme Toggle, Add Course, Logout */}
      <div className="space-y-3 pb-6">
        {/* 🌗 Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-glow transition-all hover:scale-105"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* 📌 Add Course Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-glow transition-all hover:scale-105">
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
        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
          active
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-sm" // ✅ Low shadow on hover
        } ${isLogout ? "text-red-500 hover:bg-red-100 dark:hover:bg-red-700" : ""}`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

// Sidebar Item with Sub-Menu Component
interface SidebarItemWithSubMenuProps {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SidebarItemWithSubMenu = ({ icon, label, isOpen, onClick, children }: SidebarItemWithSubMenuProps) => {
  return (
    <li>
      <div
        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
          isOpen ? "bg-gray-200 dark:bg-gray-700 shadow-md" : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-sm" // ✅ Low shadow on hover
        }`}
        onClick={onClick}
      >
        {icon}
        <span>{label}</span>
      </div>
      {isOpen && (
        <ul className="pl-6 mt-2 space-y-2 transition-all duration-300 ease-in-out">
          {children}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;