import { Card } from '@/components/ui/card';
import { Youtube, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" relative bg-gradient-to-b from-[#FFFDE1]  via-[#FFE88A] to-[#edbe92] text-black overflow-hidden ">
    
      {/* Agriculture Image Section - positioned at the very top */}
      {/* <div className="relative">
        <div 
          className="w-full h-80 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-green-900/30 to-green-900 flex items-end justify-center pb-8">
            <div className="text-center">
              <h3 className="text-black text-2xl md:text-3xl font-bold mb-2">Growing Together for a Sustainable Future</h3>
              <p className="text-black text-lg">Empowering farmers across India</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer Content */}
      <div className="py-16">
       {/* Glass Container */}
        <div className=" max-w-6xl mx-auto px-6 backdrop-blur-xl bg-white/35 border border-green-500 bg-white/30 border border-white/40 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Organization Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 mt-5">Bangla Susthayi Krishi Foundation</h3>
              <p className="text-black mb-6 leading-relaxed">
                Empowering farmers across India and developing rural communities through sustainable agricultural practices.
              </p>
              <div className="flex space-x-4">
                {/*<a 
                  href="https://youtube.com/@sustainableagriculture" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-700 p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>*/}
                <a 
                  href="https://www.linkedin.com/company/susthayi-krishi-foundation/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 p-3 rounded-full hover:bg-blue-400 text-blue-200 border-blue-950 border transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/bskf.official?igsh=MXBnMjZmc2Ztc21rcQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 p-3 rounded-full hover:bg-violet-300 text-purple-900 border-purple-950 border transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                {/*<a 
                  href="https://twitter.com/sustainable_ag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-700 p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>*/}
              </div>
            </div>

            {/* Quick Links 
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-black hover:text-black transition-colors">Home</a></li>
                <li><a href="#projects" className="text-black hover:text-black transition-colors">Projects</a></li>
                <li><a href="#events" className="text-black hover:text-black transition-colors">Events</a></li>
                <li><a href="#about" className="text-black hover:text-black transition-colors">About</a></li>
              </ul>
            </div>*/}

            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-semibold mb-4 mt-5">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-black" />
                  <span className="text-black text-sm">official@bskf.org.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-black" />
                  <span className="text-black text-sm">+91 94740 13486</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1 text-black" />
                  <span className="text-black text-sm">Bankura, West Bengal, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-lime-800 pt-8 pb-4 mt-6 relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                 <p className="text-black/80 text-sm text-center md:text-left">
                    © 2025 Bangla Susthayi Krishi Foundation. All rights reserved.
                 </p>

                <p className="text-black/80 text-sm text-center md:text-right">
                     Developed by{' '}
                    <span className="font-semibold">
                         BSKF Technical Team
                    </span>
                </p>
             </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;