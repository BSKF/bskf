import { Users, Sprout, Heart, Linkedin, Instagram } from 'lucide-react';
import CountUp from 'react-countup';

const HeroSection = () => {
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
        <source src="https://wpzbzwidaqbbwcvhtcdw.supabase.co/storage/v1/object/public/herovideo/hero%20background.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/85"></div>

      {/* Hero Content */}
      <div className="relative z-10 pt-36 md:pt-32 text-center text-white max-w-5xl mx-auto space-y-8 animate-fadeInSlow">
        {/* Headline with shimmer */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 bg-clip-text text-transparent animate-text-shimmer">
          Bangla Susthayi Krishi Foundation
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-4xl font-semibold mb-8 text-yellow-400 max-w-3xl mx-auto leading-relaxed font-sans">
          Empowering farmers across India through sustainable practices and community support
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/company/susthayi-krishi-foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/70 backdrop-blur-md p-4 rounded-full hover:scale-110 hover:ring-2 hover:ring-primaryGreen hover:shadow-xl transition-transform duration-300 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-green-900" />
          </a>
          <a
            href="https://www.instagram.com/susthayi.krishi.foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/70 backdrop-blur-md p-4 rounded-full hover:scale-110 hover:ring-2 hover:ring-primaryGreen hover:shadow-xl transition-transform duration-300 flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-pink-600" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {[
            { icon: Users, end: 3000, suffix: '+', label: 'Farmer Members', color: 'text-green-800' },
            { icon: Sprout, end: 50, suffix: '+', label: 'Projects', color: 'text-yellow-400' },
            { icon: Heart, end: 2, suffix: '+', label: 'States', color: 'text-orange-700' },
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
              <div className="text-xl font-semibold text-green-100">{label}</div>
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
