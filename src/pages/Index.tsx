import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FlipCards from '@/components/FlipCards';
import ImpactSection from '@/components/ImpactSection';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import EnquiryForm from '@/components/EnquiryForm';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <FlipCards />
      <div id="impact">
        <ImpactSection />
      </div>
      <Partners />
      <Testimonials />
      <EnquiryForm />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
