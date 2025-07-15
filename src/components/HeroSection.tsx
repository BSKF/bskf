
import { Button } from '@/components/ui/button';
import { Users, Sprout, Heart, Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 text-center text-white max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-green-300">Bangla Susthayi Krishi Foundation</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
          Empowering farmers across India through sustainable practices and community support
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-8">
          {/*<a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <Youtube className="h-6 w-6" />
          </a>*/}
          <a 
            href="https://www.linkedin.com/company/susthayi-krishi-foundation/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/susthayi.krishi.foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <Instagram className="h-6 w-6" />
          </a>
          {/*<a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <Twitter className="h-6 w-6" />
          </a>*/}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-300" />
            </div>
            <div className="text-3xl font-bold text-green-300 mb-2">1000+</div>
            <div className="text-lg text-green-100">Farmer Members</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Sprout className="h-8 w-8 text-orange-300" />
            </div>
            <div className="text-3xl font-bold text-orange-300 mb-2">50+</div>
            <div className="text-lg text-green-100">Projects</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-red-300" />
            </div>
            <div className="text-3xl font-bold text-red-300 mb-2">15</div>
            <div className="text-lg text-green-100">States</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
