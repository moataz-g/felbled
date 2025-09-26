import React from 'react';

const Footer = ({ countries, selectedCountry, onCountrySelect }) => {
    const logoImageUrl = '/logo.png';
  return (
    <footer className="bg-gradient-to-r from-cyan-600 to-emerald-400 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className=" bg-white flex items-center justify-center">
                              <img 
                src={logoImageUrl} 
                alt="Logo" 
                className="w-20 h-20 object-contain" // Adjust size as needed
              />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting communities with trusted services across North Africa
            </p>
            <div className="flex space-x-2">
              {Object.entries(countries).map(([key, country]) => (
                <span key={key} className="text-2xl">{country.flag}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-200">Find Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">For Providers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-200">List Your Service</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Provider Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Countries</h3>
            <div className="space-y-2">
              {Object.entries(countries).map(([key, country]) => (
                <button
                  key={key}
                  onClick={() => onCountrySelect(key)}
                  className={`block hover:text-white transition duration-200 text-left ${
                    selectedCountry === key ? 'text-white font-medium' : ''
                  }`}
                >
                  {country.flag} {country.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Felbled. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;