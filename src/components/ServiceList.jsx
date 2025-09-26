import React, { useState, useEffect } from 'react';
import ServiceDetail from './ServiceDetail';
import { Search, MapPin, Star, Shield, Heart, Filter, SlidersHorizontal, Phone, Award } from 'lucide-react';

const SearchResults = ({ searchTerm, selectedCity, currentCountry }) => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
  const [filters, setFilters] = useState({
    rating: '',
    verified: false,
    priceRange: '',
    availability: ''
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  // Sample services data
  const sampleServices = [
    {
      id: 1,
      name: 'Dr. Ahmed Hassan',
      service: 'Cardiologist',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 127,
      location: 'Tunis',
      phone: '+216 70 123 456',
      experience: '15 years',
      verified: true,
      price: '$50-80',
      availability: 'Available today',
      description: 'Experienced cardiologist specializing in heart disease prevention and treatment. Fluent in Arabic, French, and English.',
      image: 'AH'
    },
    {
      id: 2,
      name: 'Mohamed\'s Electrical Services',
      service: 'Electrician',
      category: 'Home Services',
      rating: 4.7,
      reviews: 89,
      location: 'Sfax',
      phone: '+216 70 987 654',
      experience: '8 years',
      verified: true,
      price: '$30-50',
      availability: 'Available tomorrow',
      description: 'Professional electrical services for homes and businesses. Emergency repairs available 24/7.',
      image: 'ME'
    },
    {
      id: 3,
      name: 'Fatima Legal Consulting',
      service: 'Lawyer',
      category: 'Legal Services',
      rating: 4.8,
      reviews: 156,
      location: 'Sousse',
      phone: '+216 70 456 789',
      experience: '12 years',
      verified: false,
      price: '$100-150',
      availability: 'Available next week',
      description: 'Specialized in business law and contract negotiations. Providing legal advice in Arabic and French.',
      image: 'FL'
    },
    {
      id: 4,
      name: 'Quick Fix Plumbing',
      service: 'Plumber',
      category: 'Home Services',
      rating: 4.6,
      reviews: 203,
      location: 'Tunis',
      phone: '+216 70 321 654',
      experience: '6 years',
      verified: true,
      price: '$25-40',
      availability: 'Available today',
      description: 'Fast and reliable plumbing services. Specializing in emergency repairs and installations.',
      image: 'QF'
    },
    {
      id: 5,
      name: 'Digital Marketing Pro',
      service: 'Digital Marketer',
      category: 'Business Services',
      rating: 4.5,
      reviews: 78,
      location: 'Tunis',
      phone: '+216 70 555 123',
      experience: '4 years',
      verified: true,
      price: '$40-70',
      availability: 'Available this week',
      description: 'Social media management, SEO, and digital advertising for small and medium businesses.',
      image: 'DM'
    },
    {
      id: 6,
      name: 'Home Cleaning Experts',
      service: 'House Cleaner',
      category: 'Home Services',
      rating: 4.4,
      reviews: 92,
      location: 'Ariana',
      phone: '+216 70 888 999',
      experience: '3 years',
      verified: false,
      price: '$20-35',
      availability: 'Available today',
      description: 'Professional home cleaning services with eco-friendly products. Regular and one-time cleaning available.',
      image: 'HC'
    },
    {
      id: 7,
      name: 'Auto Mechanic Expert',
      service: 'Mechanic',
      category: 'Automotive',
      rating: 4.3,
      reviews: 145,
      location: 'Tunis',
      phone: '+216 70 777 888',
      experience: '10 years',
      verified: true,
      price: '$35-60',
      availability: 'Available tomorrow',
      description: 'Complete automotive repair and maintenance services. Specializing in European and Japanese cars.',
      image: 'AM'
    },
    {
      id: 8,
      name: 'Dental Care Clinic',
      service: 'Dentist',
      category: 'Healthcare',
      rating: 4.8,
      reviews: 234,
      location: 'Sfax',
      phone: '+216 70 111 222',
      experience: '18 years',
      verified: true,
      price: '$40-90',
      availability: 'Available next week',
      description: 'Comprehensive dental care including general dentistry, cosmetic procedures, and orthodontics.',
      image: 'DC'
    }
  ];

  useEffect(() => {
    // Simulate API call - filter by search term
    const filteredBySearch = sampleServices.filter(service => 
      service.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Filter by city if selected
    const filteredByCity = selectedCity 
      ? filteredBySearch.filter(service => service.location === selectedCity)
      : filteredBySearch;
    
    setServices(filteredByCity);
    setFilteredServices(filteredByCity);
  }, [searchTerm, selectedCity]);
  // Handle service click to show the popup
  const handleServiceClick = (service) => {
    setSelectedService(service);  // Set the clicked service to show details
  };
  const closeServiceDetail = () => {
    setSelectedService(null); // Close the detail view
  };
  useEffect(() => {
    let filtered = [...services];

    // Apply filters
    if (filters.verified) {
      filtered = filtered.filter(service => service.verified);
    }

    if (filters.rating) {
      filtered = filtered.filter(service => service.rating >= parseFloat(filters.rating));
    }

    // Sort results
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'price-low':
        filtered.sort((a, b) => {
          const aPrice = parseInt(a.price.split('-')[0].replace('$', ''));
          const bPrice = parseInt(b.price.split('-')[0].replace('$', ''));
          return aPrice - bPrice;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const aPrice = parseInt(a.price.split('-')[0].replace('$', ''));
          const bPrice = parseInt(b.price.split('-')[0].replace('$', ''));
          return bPrice - aPrice;
        });
        break;
      default:
        // relevance - keep original order
        break;
    }

    setFilteredServices(filtered);
  }, [filters, sortBy, services]);

  const clearFilters = () => {
    setFilters({
      rating: '',
      verified: false,
      priceRange: '',
      availability: ''
    });
    setSortBy('relevance');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Search Results for "{searchTerm}"
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredServices.length} services found
                {selectedCity && ` in ${selectedCity}`}
                {currentCountry && ` • ${currentCountry.name} ${currentCountry.flag}`}
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
                {(filters.verified || filters.rating) && (
                  <span className="ml-1 bg-blue-600 text-white text-xs rounded-full w-2 h-2"></span>
                )}
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="relevance">Most Relevant</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear all
                </button>
              </div>
              <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                              <input
                                type="text"
                                placeholder="What service do you need?"
                                className="w-full pl-10 pr-4 py-4 text-gray-700 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value="keyword"
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                            </div>
              <div className="space-y-6">
                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Minimum Rating
                  </label>
                  <div className="space-y-2">
                    {['4.5', '4.0', '3.5', '3.0'].map((rating) => (
                      <label key={rating} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={filters.rating === rating}
                          onChange={(e) => setFilters({...filters, rating: e.target.value})}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(parseFloat(rating)) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{rating}+</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Verified Filter */}
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.verified}
                      onChange={(e) => setFilters({...filters, verified: e.target.checked})}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">Verified Only</span>
                    </div>
                  </label>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <div className="space-y-2">
                    {['Healthcare', 'Home Services', 'Legal Services', 'Business Services', 'Automotive'].map(category => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                        <span className="text-xs text-gray-500">
                          ({sampleServices.filter(s => s.category === category).length})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    {['$0-30', '$30-60', '$60-100', '$100+'].map(range => (
                      <label key={range} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="priceRange"
                          value={range}
                          checked={filters.priceRange === range}
                          onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Availability
                  </label>
                  <div className="space-y-2">
                    {['Available today', 'Available tomorrow', 'Available this week'].map(availability => (
                      <label key={availability} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{availability}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Count and Quick Actions */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                Showing {filteredServices.length} of {services.length} results
              </p>
              <div className="flex items-center space-x-2">
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Save Search
                </button>
                <span className="text-gray-300">|</span>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Set Alert
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-200 border border-gray-100"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-lg">{service.image}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                              {service.name}
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                {service.service}
                              </span>
                              {service.verified && (
                                <div className="flex items-center space-x-1">
                                  <Shield className="h-4 w-4 text-green-500" />
                                  <span className="text-xs text-green-600 font-medium">Verified</span>
                                </div>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">{service.category}</span>
                          </div>
                        </div>
                        
                        <button className="text-gray-400 hover:text-red-500 transition duration-200 p-2">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Service Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                      {/* Service Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{service.rating}</span>
                          <span>({service.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{service.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Award className="h-4 w-4 text-gray-400" />
                          <span>{service.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="font-medium text-blue-600">{service.price}</span>
                        </div>
                      </div>

                      {/* Availability and Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                          <span className="text-sm text-green-600 font-medium flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {service.availability}
                          </span>
                          <span className="text-sm text-gray-500">
                            Response time: ~2 hours
                          </span>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 text-sm font-medium">
                            View Profile
                          </button>
                          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-200 text-sm font-medium">
                            Message
                          </button>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-sm font-medium">
                            Contact Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* No Results State */}
              {filteredServices.length === 0 && (
                <div className="text-center py-16">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={clearFilters}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      Clear Filters
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                      Browse All Services
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredServices.length > 0 && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                  <span className="text-sm text-gray-600">Showing</span>
                  <select className="px-2 py-1 border border-gray-300 rounded text-sm">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <span className="text-sm text-gray-600">per page</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    10
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
       {/* Popup for Service Detail */}
      {selectedService && (
        <ServiceDetail service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
};

export default SearchResults;