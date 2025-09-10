import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/slices/store/store";
import { loginUser, setIsLoggedIn } from "@/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getUserById } from "@/slices/users";

const Login = () => {
  const [loginid, setLoginid] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      const user_id = localStorage.getItem("user_id");

      if (token && role) {
        const user = await dispatch(getUserById(user_id));
      }
      const { isLoggedIn } = useSelector((state: RootState) => state.auth);
      if (token) {
        dispatch(setIsLoggedIn(true));
      }
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "user") {
        navigate("/user/dashboard");
      }
    };
    fetchUser();
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ loginid, password }));

    if (loginUser.fulfilled.match(result)) {
      const role = result.payload.data.role;
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } else {
      alert("Login failed: " + (result.payload as string));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="loginid" className="block text-sm font-medium text-gray-700">
              Email or Username
            </label>
            <input
              type="text"
              id="loginid"
              required
              value={loginid}
              onChange={(e) => setLoginid(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
