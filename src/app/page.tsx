import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Dashboard />
      <RightPanel />
    </div>
  );
}
