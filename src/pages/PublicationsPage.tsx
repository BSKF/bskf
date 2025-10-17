import Navbar from '../components/Navbar';
import Publications from '../components/Publications';
import Footer from '../components/Footer';

const PublicationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />
      <div className="pt-16">
        <Publications />
      </div>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
