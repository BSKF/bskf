import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Sprout, Heart, Linkedin, Instagram, Copy, Check, ArrowRight, X } from 'lucide-react';
import CountUp from 'react-countup';
import { FaFacebook , FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [copiedReg, setCopiedReg] = useState(false);
  const [copiedDarpan, setCopiedDarpan] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

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
      {showBanner && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-4xl bg-gradient-to-r from-green-400/30 to-yellow-400/30 p-[1px] rounded-full shadow-[0_0_40px_rgba(74,222,128,0.2)] backdrop-blur-xl animate-[fadeInUp_0.5s_ease-out]">
          <div className="bg-green-950/90 rounded-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/20">
            <div className="flex items-center gap-4">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse flex items-center gap-2 whitespace-nowrap shadow-lg shadow-red-500/20">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                ROUND 2 LIVE
              </span>
              <p className="text-base md:text-lg font-bold text-gray-100 hidden sm:block tracking-wide">
                Digital Pathshala Round 2 Funding is Live!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/digital-pathshala" onClick={() => setShowBanner(false)} className="text-sm font-bold text-black bg-[#4ADE80] px-6 py-2.5 rounded-full hover:bg-white hover:scale-105 transition-all whitespace-nowrap shadow-lg shadow-[#4ADE80]/20">
                Support Us
              </Link>
              <button onClick={() => setShowBanner(false)} className="text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full flex items-center justify-center">
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
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
        <p className="text-xl md:text-3xl font-semibold mb-8 text-[#FED16A] max-w-3xl mx-auto leading-relaxed font-sans">
          Empowering farmers across India through sustainable practices and community support
        </p>

        {/* Digital Pathshala CTA */}
        <div className="mb-10">
          <Link 
            to="/digital-pathshala"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 text-white font-bold tracking-wider uppercase text-sm sm:text-base">Explore Digital Pathshala</span>
            <span className="w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center text-black group-hover:scale-110 transition-transform relative z-10">
               <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>
          </Link>
        </div>

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
