import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ 
  currentCountry, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  onCountryChange 
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
      className={`transition-all duration-300 ${isScrolled ? 'bg-gray-700 opacity-75 backdrop-blur-md text-white shadow-gray-900 shadow-2xl' : 'bg-transparent text-gray-700'} fixed top-0 left-0 right-0 z-50 text-2xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">

            <Link to="/">
              <img 
                src={logoImageUrl} 
                alt="Logo" 
                className="w-16 h-16 object-contain" // Adjust size as needed
              />
            </Link>
            {currentCountry && (
              <div className="flex items-center space-x-2 ml-4">
                <span className="text-2xl">{currentCountry.flag}</span>
                <span className="text-sm text-gray-600">{currentCountry.name}</span>
                <span className="text-lg opacity-60">{currentCountry.cultural.bgIcon}</span>
              </div>
            )}
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className=" hover:text-blue-600 transition duration-100">
              About
            </Link>
            <Link to="/contact" className=" hover:text-blue-600 transition duration-100">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/auth" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </Link>
          </div>

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
                to="/services" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Services
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                List Your Service
              </Link>
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
              <button 
                onClick={() => {
                  onCountryChange();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600"
              >
                Change Country
              </button>
              <Link 
                to="/auth" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
