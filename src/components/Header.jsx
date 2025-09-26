import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
}) => {
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position
  const logoImageUrl = '/logo.png';

  // Handle scroll event to update header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md text-gray-700 shadow-gray-900 shadow-2xl' : 'bg-white text-gray-700'} fixed top-0 left-0 right-0 z-50 text-2xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logoImageUrl} 
                alt="Logo" 
                className="w-20 h-20 object-contain" // Adjust size as needed
              />
            </Link>
          </div>

          {/* Navigation in the center */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/about" className="hover:text-blue-600 transition duration-100">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition duration-100">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button on the right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;