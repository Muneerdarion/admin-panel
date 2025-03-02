"use client";

import { useTheme } from "@/hooks/useTheme";
import { FaSearch, FaBell, FaCommentDots } from "react-icons/fa";

const RightPanel = () => {
  const { isDarkMode } = useTheme();

  return (
    <aside
      className={`w-80 p-6 shadow-lg transition-all ${
        isDarkMode ? "bg-white text-gray-900" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* 🔍 Search & Icons - Positioned at the Top-Right */}
      <div className="flex items-center justify-end space-x-4">
        {/* 🔍 Search Bar */}
        <div className="relative w-44">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 bg-white text-gray-700 rounded-full shadow-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* 🔔 Notifications Icon */}
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-xl hover:text-blue-500 transition" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* 💬 Messages Icon */}
        <div className="relative cursor-pointer">
          <FaCommentDots className="text-gray-600 text-xl hover:text-blue-500 transition" />
          <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            5
          </span>
        </div>
      </div>

      {/* 📘 English Test Section */}
      <div className="mt-6 bg-blue-500 text-white p-4 rounded-3xl text-center shadow-md">
        <p className="text-lg font-semibold">Test your English level!</p>
        <button className="mt-3 bg-white text-blue-500 px-4 py-2 rounded shadow-md transition hover:bg-blue-100">
          Pass Test
        </button>
      </div>

      {/* 📚 My Courses Section */}
      <section className="mt-6 bg-white p-4 rounded-3xl shadow-md">
        <h2 className="text-lg font-semibold mb-3">My Courses</h2>
        <ul className="space-y-3">
          <li className="bg-gray-200 p-3 rounded">Maths in Simple Terms</li>
          <li className="bg-gray-200 p-3 rounded">Chemistry is Easy!</li>
          <li className="bg-gray-200 p-3 rounded">Economic Geography</li>
        </ul>
      </section>
    </aside>
  );
};

export default RightPanel;
