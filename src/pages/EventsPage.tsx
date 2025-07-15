
import Navbar from '@/components/Navbar';
import Events from '@/components/Events';
import Footer from '@/components/Footer';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />
      <div className="pt-16">
        <Events />
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
