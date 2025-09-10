import { useState } from "react";
import { User, PlusCircle, ClipboardCheck } from "lucide-react";
import Sidebar from "../common/Sidebar";
import Profile from "../common/Profile";

const UserDashboard = () => {
  const [active, setActive] = useState("view-profile");

  const menuItems = [
    { id: "view-profile", label: "View Profile", icon: <User size={18} /> },
    { id: "view-task", label: "View Task for User", icon: <ClipboardCheck size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} setActive={setActive} active={active} />
      {/* Main Content */}
      <main className="flex-1 p-6">
        {active === "view-profile" && (
          <Profile />
        )}
        {active === "view-task" && (
          <div className="text-xl font-semibold">✅ View Task Section</div>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;
