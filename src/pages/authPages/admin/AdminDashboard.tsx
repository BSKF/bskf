import { useState } from "react";
import { User, PlusCircle, ClipboardCheck, ArrowRightLeft  } from "lucide-react";
import Sidebar from "../common/Sidebar";
import Profile from "../common/Profile";
import CreateAccount from "./CreateAccount";
import ChangeRole from "./ChangeRole";
import CreateTask from "./CreateTask";

const AdminDashboard = () => {
  const [active, setActive] = useState("view-profile");

  const menuItems = [
    { id: "view-profile", label: "View Profile", icon: <User size={18} /> },
    { id: "create-account", label: "Create Account for User", icon: <PlusCircle size={18} /> },
    { id: "change-role", label: "Change User Role", icon: <ArrowRightLeft size={18} /> },
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
        {active === "change-role" && (
          <ChangeRole />
        )}
        {active === "assign-task" && (
          <CreateTask />
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
