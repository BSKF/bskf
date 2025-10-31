import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current location
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24); // adjust as needed
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Updated navLinks to include hash links for homepage sections
  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/about' },
    { name: 'Impact', path: '/#impact' },
    { name: 'Projects', path: '/projects' },
    { name: 'Events', path: '/events' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/#contact' },
    // { name: 'Login', path: '/login' },
  ];

  // Common class names for nav buttons/links
  const navButtonClasses = (isScrolled: boolean) =>
    `text-lg font-sans font-semibold select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded transition-colors duration-200 ${
      isScrolled
        ? 'text-green-900 hover:text-green-600'
        : 'text-white drop-shadow hover:text-green-300'
    }`;
  
  // Common class names for mobile nav buttons/links
  const mobileNavButtonClasses = (isScrolled: boolean) =>
    `transition-colors duration-200 text-left text-lg font-sans font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded ${
      isScrolled ? 'text-green-900' : 'text-white'
    }`;

  // Helper to render the correct link type
  const renderNavLink = (name: string, path: string, isMobile: boolean) => {
    const classes = isMobile ? mobileNavButtonClasses(scrolled) : navButtonClasses(scrolled);
    const isHashLink = path.startsWith('/#');
    const hash = path.split('#')[1] || '';

    if (isHashLink && isHomePage) {
      // We are on the homepage and it's a hash link. Use <a> for CSS smooth scroll.
      return (
        <a
          key={name}
          href={`#${hash}`}
          className={classes}
          onClick={() => setIsMenuOpen(false)}
          aria-label={`Navigate to ${name} section`}
        >
          {name}
        </a>
      );
    }
    
    // It's a page link (e.g., /about) OR a hash link from another page.
    // Use React Router's <Link> component.
    return (
      <Link
        key={name}
        to={path}
        onClick={() => setIsMenuOpen(false)}
        className={classes}
        aria-label={`Navigate to ${name}`}
      >
        {name}
      </Link>
    );
  };


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
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-3 cursor-pointer select-none"
            aria-label="Go to homepage"
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
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8`}>
            {navLinks.map(({ name, path }) => renderNavLink(name, path, false))}
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
            <div className="flex flex-col space-y-4 px-4 py-4">
              {navLinks.map(({ name, path }) => renderNavLink(name, path, true))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;