import { useEffect } from "react"; // <-- Import useEffect
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
import PublicationsPage from "./pages/PublicationsPage";
import PublicationDetailPage from "./pages/PublicationDetailPage";

const App = () => {
  // Add this hook to initialize the library
  useEffect(() => {
    // Check if the script has loaded from the CDN
    if (typeof SmoothScroll !== "undefined") {
      new SmoothScroll('a[href*="#"]', {
        speed: 1000, // Speed in milliseconds (1000ms = 1 second)
        speedAsDuration: true,
        offset: 80, // Offset for your fixed navbar (h-16 is 64px, 80 gives more space)
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/about" element={<About />} />
          {/* Publication Routes */}
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/publications/:id" element={<PublicationDetailPage />} />
          {/* User Protected Section */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;