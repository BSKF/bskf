import { AppDispatch, RootState } from "@/slices/store/store";
import { getUsers, updateUsers } from "@/slices/users";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface User {
    username: string;
    email: string;
    firstname: string;
    middlename: string;
    lastname: string;
    address: string;
    phone_number: string;
    role: string;
    user_id: string;
}

const ChangeRole: React.FC = () => {
    const { users, loading } = useSelector((state: RootState) => state.users);
    const { currentUser } = useSelector((state: RootState) => state.auth);

    // If you want to fetch users from Redux, use dispatch here
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getUsers());
        };
        fetchData();
    }, [dispatch]);

    const [localUsers, setLocalUsers] = useState<User[]>([]);

    useEffect(() => {
        if (Array.isArray(users)) {
            const filtered = users.filter(u => u.user_id !== currentUser.user_id);
            setLocalUsers(filtered);
        }
    }, [users, currentUser]);

    const toggleRole = (user_id: string) => {
        setLocalUsers(prev =>
            prev.map(u =>
                u.user_id === user_id ? { ...u, role: u.role === "admin" ? "user" : "admin" } : u
            )
        );
    };

    const handleSave = () => {
        if (!Array.isArray(users)) return;

        const changedUsers: User[] = localUsers.filter(local => {
            const orig = users.find(u => u.user_id === local.user_id);
            return orig && orig.role !== local.role;
        });

        console.log(changedUsers);  // pretty display in console
        dispatch(updateUsers(changedUsers))
        alert(
            changedUsers.length
                ? `Roles saved for ${changedUsers.length} user(s).`
                : "No changes to save."
        );
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">✅ Change Role Sections</h2>

            {/* Scrollable List */}
            <div className="max-h-80 overflow-y-auto border rounded-lg divide-y">
                {localUsers.map((user) => (
                    <div
                        key={user.user_id}
                        className="flex items-center justify-between p-3"
                    >
                        <div>
                            <p className="font-medium">{user.firstname} {user.middlename} {user.lastname}</p>
                            <p className="text-sm text-gray-600">@{user.username}</p>
                        </div>

                        {/* Role Switch */}
                        <div className="flex items-center space-x-2">
                            <span
                                className={`text-sm font-medium ${user.role === "user" ? "text-blue-600" : "text-gray-400"
                                    }`}
                            >
                                User
                            </span>

                            <button
                                onClick={() => toggleRole(user.user_id)}
                                className={`relative w-12 h-6 rounded-full transition-colors ${user.role === "admin" ? "bg-blue-600" : "bg-gray-400"
                                    }`}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${user.role === "admin" ? "translate-x-6" : ""
                                        }`}
                                />
                            </button>

                            <span
                                className={`text-sm font-medium ${user.role === "admin" ? "text-blue-600" : "text-gray-400"
                                    }`}
                            >
                                Admin
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Save Button */}
            <button
                onClick={handleSave}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
                {loading ? "Saving..." : "Save"}
            </button>
        </div>
    );
};

export default ChangeRole;
