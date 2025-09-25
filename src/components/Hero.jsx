import React, { useState } from 'react';
import SearchResults from './ServiceList'; // Assuming this is SearchResults
import { Search, MapPin } from 'lucide-react';

const Hero = ({ 
  currentCountry 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = () => {
    const params = {
      searchTerm,
      selectedCity,
      currentCountry,
    };

    setSearchParams(params);
    setSearchPerformed(true);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-cyan-600 to-emerald-400 text-white py-20 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Trusted Services<br />
            <span className="text-2xl md:text-3xl opacity-90">
              in {currentCountry.name}
            </span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Connect with verified service providers in your area
          </p>

          <div className="bg-white rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full pl-10 pr-4 py-4 text-gray-700 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 pr-4 py-4 text-gray-700 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {currentCountry.cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={handleSearch}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold"
              >
                Search Services
              </button>
            </div>
          </div>

          <div className="mt-8">
            <p className="opacity-80 mb-4">Popular Services:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {currentCountry.popularServices.map((service) => (
                <button
                  key={service}
                  onClick={() => {
                    setSearchTerm(service);
                    setSearchParams({
                      searchTerm: service,
                      selectedCity,
                      currentCountry
                    });
                    setSearchPerformed(true);
                  }}
                  className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition duration-200 backdrop-blur-sm"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditionally render SearchResults */}
      {searchPerformed && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <SearchResults 
            searchTerm={searchParams.searchTerm} 
            selectedCity={searchParams.selectedCity} 
            currentCountry={searchParams.currentCountry} 
          />
        </div>
      )}
    </>
  );
};

export default Hero;
