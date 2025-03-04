"use client"; // ✅ Must be at the top of the file

import { useTheme } from "@/hooks/useTheme";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Image from "next/image"; // ✅ Import the Image component from next/image

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
      setCurrentDate(now.toLocaleDateString(undefined, options));
    };

    updateDate(); // Set initial date
    const interval = setInterval(updateDate, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <main
      className={`flex-1 p-8 transition-all shadow-xl ${
        isDarkMode
          ? "bg-gray-200 text-gray-900 border-gray-700"
          : "bg-gray-200 text-gray-900 border-gray-300"
      }`}
    >
      {/* Header */}
      <header className="flex flex-col mb-6">
        <h1 className="text-3xl font-bold">Welcome, Darion!</h1>
        <p className="text-gray-500 text-lg">Today is {currentDate}</p>
      </header>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Users" value="1,234" icon="👥" />
        <StatCard title="Active Users" value="56" icon="🔥" /> {/* Fixed */}
        <StatCard title="Pending Approvals" value="12" icon="⏳" />
        <StatCard title="New Messages" value="5" icon="✉️" />
      </div>

      {/* My Activity - Bar Graph */}
      <section className="mt-6 bg-white p-6 rounded-3xl shadow-3d">
        <h2 className="text-lg font-semibold mb-4">My Activity</h2>
        <ActivityBarChart />
      </section>

      {/* Your Team Members Section */}
      <section className="mt-6 bg-white p-6 rounded-3xl shadow-3d">
        <h2 className="text-lg font-semibold mb-4">Your Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TeamMember name="John Doe" role="Admin" image="/profiles/john-doe.jpg" />
          <TeamMember name="Jane Smith" role="Teacher" image="/profiles/jane-smith.jpg" />
          <TeamMember name="Alice Johnson" role="Student" image="/profiles/alice-johnson.jpg" />
        </div>
      </section>
    </main>
  );
};

// ✅ Stat Card Component
const StatCard = ({ title, value, icon }: { title: string; value: string; icon: string }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-3d hover:shadow-3d-hover transition-transform transform hover:-translate-y-1 flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  );
};

// ✅ My Activity - Bar Graph Component
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
    <div className="w-full h-56 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-200 p-4 shadow-3d">
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

// ✅ Team Member Component (Rounded Button Profile)
const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => {
  return (
    <button className="flex flex-col items-center space-y-2 p-4 bg-white rounded-full shadow-3d hover:shadow-3d-hover transition-transform transform hover:-translate-y-1">
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </button>
  );
};

// ✅ Ensure only one default export
export default Dashboard;
