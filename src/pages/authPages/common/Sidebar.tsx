import { User, PlusCircle, ClipboardCheck, LogOut  } from "lucide-react";
const Sidebar = ({ menuItems, setActive, active }) => {
    const handleLogout = () => {
        // Clear user session (e.g., remove token from localStorage)
        localStorage.removeItem("token");
        // Redirect to login page
        window.location.href = "/login";
    }
    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
            <div className="p-4 text-lg font-bold border-b border-gray-700">
                Dashboard
            </div>
            <nav className="flex-1 p-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`w-full flex items-center gap-2 p-2 rounded-lg mb-2 transition ${active === item.id
                                ? "bg-blue-600 text-white"
                                : "hover:bg-gray-700"
                            }`}
                    >
                        {item.icon}
                        {item.label}
                    </button>
                ))}
                <button
                    onClick={() => handleLogout()}
                    className={`w-full flex items-center gap-2 p-2 rounded-lg mt-4 bg-red-600 text-white hover:bg-red-700 transition`}
                >
                    <LogOut  className="w-5 h-5" />
                    Logout
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;