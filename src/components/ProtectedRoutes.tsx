import { RootState } from "@/slices/store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  requiredRole?: "user" | "admin"; // role restriction
}

const ProtectedRoutes = ({ requiredRole }: ProtectedRoutesProps) => {
  const { isLoggedIn, currentUser } = useSelector((state: RootState) => state.auth);

  // Simulated auth + role logic
  const userRole: "user" | "admin" =
    currentUser && (currentUser.role === "user" || currentUser.role === "admin")
      ? currentUser.role
      : "user"; // get from your auth context / API

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
