
import Navbar from '@/components/Navbar';
import LiveProjects from '@/components/LiveProjects';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />
      <div className="pt-16">
        <LiveProjects />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
