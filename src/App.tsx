
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import EventsPage from "./pages/EventsPage";
import About from "./pages/About";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminDashboard from "./pages/authPages/admin/AdminDashboard";
import UserDashboard from "./pages/authPages/user/UserDashboard";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/about" element={<About />} />

        {/* User Protected Section */}
        <Route element={<ProtectedRoutes requiredRole="user" />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/profile" element={<div>User Profile</div>} />
        </Route>

        {/* Admin Protected Section */}
        <Route element={<ProtectedRoutes requiredRole="admin" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<div>Manage Users</div>} />
        </Route>

        <Route path="/unauthorized" element={<div>403 - Unauthorized</div>} />
        <Route path="/login" element={<Login />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
