// src/pages/ProjectDetailPage.tsx

import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";

const ProjectDetailPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />

      <div className="pt-16">
        <ProjectDetail />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
