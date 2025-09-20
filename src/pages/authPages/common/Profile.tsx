import React, { useState } from "react";
import { AppDispatch, RootState } from "@/slices/store/store";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "@/slices/users"; // <-- import your action
import { getProfile } from "@/slices/authSlice";

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

const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<User>(null);

  const handleEdit = () => {
    setForm(currentUser); // preload currentUser info
    setEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleSave = async() => {
    if (!form || !currentUser) return;

    const changedUser = {
      middlename: form.middlename,
      address: form.address,
      phone_number: form.phone_number, // (assuming the field is phone_number)
    };

    await dispatch(updateUser({ changedUser, userId: currentUser.user_id }));
    await dispatch(getProfile({user_id:currentUser.user_id}))
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setForm(null);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2">User Profile</h2>

      {/* --- View Mode --- */}
      {!editing && (
        <div className="border border-gray-700 rounded-lg p-4 space-y-2">
          <p>
            <strong>Name:</strong>{" "}
            {currentUser?.firstname} {currentUser?.middlename}{" "}
            {currentUser?.lastname}
          </p>
          <p>
            <strong>Email:</strong> {currentUser?.email}
          </p>
          <p>
            <strong>Role:</strong> {currentUser?.role}
          </p>
          <p>
            <strong>Address:</strong> {currentUser?.address}
          </p>
          <p>
            <strong>Phone Number:</strong> {currentUser?.phone_number}
          </p>
          <p>
            <strong>Username:</strong> {currentUser?.username}
          </p>

          <button
            onClick={handleEdit}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
      )}

      {/* --- Edit Mode --- */}
      {editing && form && (
        <div className="border border-gray-700 rounded-lg p-4 space-y-3">
          <input
            type="text"
            name="firstname"
            readOnly={true}
            value={form.firstname}
            className="w-full border rounded p-2 cursor-not-allowed text-gray-400 bg-gray-200"
            placeholder="First Name"
          />
          <input
            type="text"
            name="middlename"
            value={form.middlename}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Middle Name"
          />
          <input
            type="text"
            name="lastname"
            readOnly={true}
            value={form.lastname}
            className="w-full border rounded p-2 cursor-not-allowed text-gray-400 bg-gray-200"
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            readOnly={true}
            value={form.email}
            className="w-full border rounded p-2 cursor-not-allowed text-gray-400 bg-gray-200"
            placeholder="Email"
          />
          <input
            type="text"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="Address"
          />
          <input
            type="text"
            name="username"
            readOnly={true}
            value={form.username}
            className="w-full border rounded p-2 cursor-not-allowed text-gray-400 bg-gray-200"
            placeholder="Username"
          />

          <div className="flex space-x-3">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
