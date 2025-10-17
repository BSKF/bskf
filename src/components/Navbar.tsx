import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24); // adjust as needed
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Publications', path: '/publications' }, // Corrected spelling and path
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled
          ? 'bg-white/90 backdrop-blur shadow-lg'
          : 'bg-transparent shadow-none'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Name */}
          <div
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => handleNavClick('/')}
            aria-label="Go to homepage"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleNavClick('/');
            }}
          >
            <img
              src="/Logo.png"
              alt="Bangla Susthayi Krishi Foundation Logo"
              className="w-10 h-10 object-contain"
              draggable={false}
            />
            <span
              className={`font-sans font-extrabold text-xl md:text-2xl whitespace-nowrap transition-colors ${
                scrolled ? 'text-green-900' : 'text-white drop-shadow-md'
              }`}
            >
              BSKF
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 font-sans font-semibold select-none`}>
            {navLinks.map(({ name, path }) => (
              <button
                key={name}
                onClick={() => handleNavClick(path)}
                className={`text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded transition-colors duration-200
                  ${
                    scrolled
                      ? 'text-green-900 hover:text-green-600'
                      : 'text-white drop-shadow hover:text-green-300'
                  }`}
                aria-label={`Navigate to ${name}`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-200 ${
              scrolled ? 'text-green-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden rounded-b-lg mt-2 shadow-lg ${
              scrolled ? 'bg-white/90' : 'bg-black/70'
            }`}
          >
            <div
              className={`flex flex-col space-y-4 px-4 py-4 font-sans font-semibold ${
                scrolled ? 'text-green-900' : 'text-white'
              }`}
            >
              {navLinks.map(({ name, path }) => (
                <button
                  key={name}
                  onClick={() => handleNavClick(path)}
                  className="transition-colors duration-200 text-left text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
                  aria-label={`Navigate to ${name}`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
