
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => navigate('/')}
          >
            <img
            src="/Logo.png" // assuming your logo is named logo.png and is in /public
            alt="Bangla Susthayi Krishi Foundation Logo"
            className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl text-green-800">
              Bangla Susthayi Krishi Foundation
              </span>
              </div>

              
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('/')}
              className="text-green-700 hover:text-green-900 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/projects')}
              className="text-green-700 hover:text-green-900 font-medium transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('/events')}
              className="text-green-700 hover:text-green-900 font-medium transition-colors duration-200"
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className="text-green-700 hover:text-green-900 font-medium transition-colors duration-200"
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-green-700 hover:text-green-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('/')}
                className="text-green-700 hover:text-green-900 font-medium py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('/projects')}
                className="text-green-700 hover:text-green-900 font-medium py-2 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('/events')}
                className="text-green-700 hover:text-green-900 font-medium py-2 text-left"
              >
                Events
              </button>
              <button
                onClick={() => handleNavClick('/about')}
                className="text-green-700 hover:text-green-900 font-medium py-2 text-left"
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
