import { useEffect } from "react"; 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import ProjectsPage from "./pages/ProjectsPage";   // ✅ FIXED
import ProjectDetailPage from "./pages/ProjectDetailPage"; // already correct

import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";

import About from "./pages/About";

import PublicationsPage from "./pages/PublicationsPage";
import PublicationDetailPage from "./pages/PublicationDetailPage";

const App = () => {
  useEffect(() => {
    if (typeof SmoothScroll !== "undefined") {
      new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
        offset: 80,
      });
    }
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* ✅ Project Routes */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />

          {/* Events */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Publications */}
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/publications/:id" element={<PublicationDetailPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
