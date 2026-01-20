import { useState } from 'react';
import { Users, Sprout, Heart, Linkedin, Instagram, Copy, Check } from 'lucide-react';
import CountUp from 'react-countup';
import { FaFacebook , FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [copiedReg, setCopiedReg] = useState(false);
  const [copiedDarpan, setCopiedDarpan] = useState(false);

  const handleCopy = (text: string, isReg: boolean) => {
    navigator.clipboard.writeText(text);
    if (isReg) {
      setCopiedReg(true);
      setTimeout(() => setCopiedReg(false), 2000);
    } else {
      setCopiedDarpan(true);
      setTimeout(() => setCopiedDarpan(false), 2000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://wpzbzwidaqbbwcvhtcdw.supabase.co/storage/v1/object/public/herovideo/herobackground.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/85"></div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 md:pt-32 text-center text-white max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fadeInSlow">
        {/* Registration and Darpan IDs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-base font-semibold text-yellow-50/90 mb-1">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 shadow-lg hover:bg-white/15 transition-all w-fit">
            <span>Registration Number : S0056943</span>
            <button
              onClick={() => handleCopy("S0056943", true)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors active:scale-95"
              title="Copy Registration Number"
              aria-label="Copy Registration Number"
            >
              {copiedReg ? <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 shadow-lg hover:bg-white/15 transition-all w-fit">
            <span>Darpan Id : WB/2025/0765073</span>
            <button
              onClick={() => handleCopy("WB/2025/0765073", false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors active:scale-95"
              title="Copy Darpan ID"
              aria-label="Copy Darpan ID"
            >
              {copiedDarpan ? <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>

        {/* Headline with shimmer */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 bg-clip-text text-transparent animate-text-shimmer">
          Bangla Susthayi Krishi Foundation
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-4xl font-semibold mb-8 text-[#FED16A] max-w-3xl mx-auto leading-relaxed font-sans">
          Empowering farmers across India through sustainable practices and community support
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/company/susthayi-krishi-foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#134d1f] backdrop-blur-md p-4 rounded-full hover:scale-110 hover:ring-2 hover:ring-primaryGreen hover:shadow-xl transition-transform duration-300 flex items-center justify-center border-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6 text-blue-500"/>
            {/* <Linkedin className="h-6 w-6 text-blue-500" /> */}
          </a>
          <a
            href="https://www.instagram.com/bskf.official?igsh=MXBnMjZmc2Ztc21rcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#134d1f] backdrop-blur-md p-4 rounded-full hover:scale-110 hover:ring-2 hover:ring-primaryGreen hover:shadow-xl transition-transform duration-300 flex items-center justify-center border-2"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-pink-500" />
          </a>
          <a
            href="https://www.facebook.com/share/1CzQowPX4N/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#134d1f] backdrop-blur-md p-4 rounded-full hover:scale-110 hover:ring-2 hover:ring-primaryGreen hover:shadow-xl transition-transform duration-300 flex items-center justify-center border-2"
            aria-label="Facebook"
          >
            <FaFacebook className='h-6 w-6  text-blue-500' />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {[
            { icon: Users, end: 200, suffix: '+', label: 'Farmer Members', color: 'text-green-800' },
            { icon: Sprout, end: 5, suffix: '+', label: 'Projects', color: 'text-green-800' },
            { icon: Heart, end: 50, suffix: '+', label: 'Seeds Preserved', color: 'text-green-800' },
          ].map(({ icon: Icon, end, suffix, label, color }) => (
            <div
              key={label}
              className="text-center bg-white/50 backdrop-blur-md rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:bg-white/30 transform transition-all duration-300"
              aria-label={`${end}${suffix} ${label}`}
            >
              <div className={`bg-white/30 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center drop-shadow-lg`}>
                <Icon className={`h-10 w-10 ${color}`} />
              </div>
              <div className={`text-4xl font-extrabold ${color} mb-2`}>
                <CountUp start={1} end={end} duration={2} suffix={suffix} />
              </div>
              <div className="text-xl font-semibold text-green-800">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Cue */}
        <div className="mt-10 flex justify-center animate-bounceSlow">
          <svg width="28" height="54" className="mx-auto opacity-30" fill="none" viewBox="0 0 28 54">
            <rect x="1.5" y="1.5" width="25" height="51" rx="12.5" stroke="#fff" strokeWidth="3" />
            <circle cx="14" cy="14" r="5" fill="#90c53e" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
