import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/slices/store/store";
import { loginUser, setIsLoggedIn } from "@/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { getUserById } from "@/slices/users";''

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

      console.log(token , role , user_id);

      if (token && role && user_id) {
        try {
          await dispatch(getUserById(user_id));
          dispatch(setIsLoggedIn(true));
          if (role === "admin") navigate("/admin/dashboard");
          else navigate("/user/dashboard");
        } catch (error) {
          console.error("Error fetching user:", error);
          // Clear invalid tokens
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("user_id");
          dispatch(setIsLoggedIn(false));
        }
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ loginid, password }));

    if (loginUser.fulfilled.match(result)) {
      const role = result.payload.data.role;
      if (role === "admin") navigate("/admin/dashboard");
      else navigate("/user/dashboard");
    } else {
      alert("Login failed: " + (result.payload as string));
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: "url('/assets/images/farmer.jpg')",
          filter: "brightness(1)",
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>

      {/* Logo + Branding */}
      <div className="absolute top-8 left-10 flex items-center gap-3 text-white z-20">
        <img
          src="/assets/images/ms.png"
          alt="BSKF Logo"
          className="w-12 h-12 rounded-lg object-cover shadow-lg border border-white/20"
        />
        <div>
          <h1 className="font-bold text-xl tracking-wide">BSKF</h1>
         
        </div>
      </div>

      {/* Login Card */}
      <div className="relative z-20 w-[95%] max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 text-white animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Sign in to continue to BSKF Farmer Services
        </p>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email / Username */}
          <div>
            <label
              htmlFor="loginid"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="loginid"
              required
              value={loginid}
              onChange={(e) => setLoginid(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="you@example.com or +91XXXXXXXXXX"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />
              Remember me
            </label>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-200"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold py-2 rounded-md shadow-md"
          >
            {loading ? "Logging in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          By continuing, you agree to our{" "}
          <a
            href="#"
            className="text-green-400 hover:text-green-300 underline"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-green-400 hover:text-green-300 underline"
          >
            Privacy Policy
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-xs z-20">
        Inspired by <span className="text-green-400">bskf.org.in</span>
      </footer>
    </div>
  );
};

export default Login;
