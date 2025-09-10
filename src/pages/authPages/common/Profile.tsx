import { RootState } from "@/slices/store/store";
import { useSelector } from "react-redux";
interface ProfileProps {username: string;
  email: string;
  firstname: string;
  middlename: string;
  lastname: string;
  address: string;
  phone_number: string;
  role: string;
  user_id: string;
}
const Profile = () => {
    const { currentUser } = useSelector((state: RootState) => state.auth);
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">User Profile</h2>
            <div className="border border-gray-700 rounded-lg p-4">
                
                <p className="mb-2"><strong>Name:</strong> {currentUser?.firstname} {currentUser?.middlename} {currentUser?.lastname}</p>
                <p className="mb-2"><strong>Email:</strong> {currentUser?.email}</p>
                <p className="mb-2"><strong>Role:</strong> {currentUser?.role}</p>
                <p className="mb-2"><strong>Address:</strong> {currentUser?.address}</p>
                <p className="mb-2"><strong>Phone Number:</strong> {currentUser?.phone_number}</p>
                <p className="mb-2"><strong>Username:</strong> {currentUser?.username}</p>
            </div>
        </div>
    );
};

export default Profile;