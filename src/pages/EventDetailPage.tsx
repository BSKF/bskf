
import Navbar from '@/components/Navbar';
import EventDetail from '@/components/EventDetail';
import Footer from '@/components/Footer';

const EventDetailPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />
      <div className="pt-16">
        <EventDetail />
      </div>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
