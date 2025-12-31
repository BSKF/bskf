// src/pages/ProjectsPage.tsx

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />

      <div className="pt-16">
        <Projects />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
