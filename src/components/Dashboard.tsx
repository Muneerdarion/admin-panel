"use client";

import { useTheme } from "@/hooks/useTheme";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  return (
    <main
      className={`flex-1 p-8 transition-all shadow-xl  ${
        isDarkMode
          ? "bg-gray-100 text-gray-900 border-gray-700"
          : "bg-gray-50 text-gray-900 border-gray-300"
      }`}
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Home</h1>
          <p className="text-gray-500">Welcome back! 🚀</p>
        </div>

        {/* 📌 Action Buttons */}
        <div className="space-x-3">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
            Start New Lesson
          </button>
          <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-400 transition">
            View Stats
          </button>
        </div>
      </header>

      {/* My Activity - Bar Graph */}
      <section className="mt-6 bg-white p-6 rounded-3xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">My Activity</h2>
        <ActivityBarChart />
      </section>
{/* Your Team Member Section */}
<section className="mt-6 bg-white p-6 rounded-3xl shadow-md flex justify-between items-center">
  <h2 className="text-lg font-semibold">Your Team Member</h2>
  
  {/* More Button */}
  <button className="text-blue-500 text-sm font-medium hover:underline">More</button>
</section>


      {/* Popular Courses */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Popular Courses</h2>
        <CourseList />
      </section>
    </main>
  );
};

// ✅ My Activity - Bar Graph Component (Rounded & Smooth)
const ActivityBarChart = () => {
  const data = [
    { day: "Mon", activity: 10 },
    { day: "Tue", activity: 20 },
    { day: "Wed", activity: 12 },
    { day: "Thu", activity: 30 }, // Highest
    { day: "Fri", activity: 14 },
    { day: "Sat", activity: 18 },
    { day: "Sun", activity: 8 },
  ];

  return (
    <div className="w-full h-56 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-200 p-4 shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#4F46E5" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="activity" fill="#2563EB" radius={[10, 10, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// ✅ Team Member List Component
const TeamMemberList = () => {
  return (
    <div className="flex space-x-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-16 h-16 bg-gray-300 rounded-full shadow-md"></div>
      ))}
    </div>
  );
};

// ✅ Course List Component (Rounded Cards)
const CourseList = () => {
  return (
    <div className="flex space-x-4">
      <div className="p-4 bg-white rounded-3xl shadow-md w-40 hover:shadow-lg transition">
        <p className="text-sm font-medium">German Grammar</p>
      </div>
      <div className="p-4 bg-white rounded-3xl shadow-md w-40 hover:shadow-lg transition">
        <p className="text-sm font-medium">Logic & Math</p>
      </div>
      <div className="p-4 bg-white rounded-3xl shadow-md w-40 hover:shadow-lg transition">
        <p className="text-sm font-medium">Chemistry</p>
      </div>
    </div>
  );
};

export default Dashboard;
