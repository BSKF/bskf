import { useState } from "react";
import { User, PlusCircle, ClipboardCheck } from "lucide-react";
import Sidebar from "../common/Sidebar";
import Profile from "../common/Profile";
import CreateAccount from "./CreateAccount";

const AdminDashboard = () => {
  const [active, setActive] = useState("view-profile");

  const menuItems = [
    { id: "view-profile", label: "View Profile", icon: <User size={18} /> },
    { id: "create-account", label: "Create Account for User", icon: <PlusCircle size={18} /> },
    { id: "assign-task", label: "Assign Task to User", icon: <ClipboardCheck size={18} /> },
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
        {active === "create-account" && (
          <CreateAccount />
        )}
        {active === "assign-task" && (
          <div className="text-xl font-semibold">✅ Assign Task Section</div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
