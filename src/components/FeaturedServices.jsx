import React from 'react';
import { Star, MapPin, Award, Phone, Heart, Shield } from 'lucide-react';

const FeaturedServices = ({ currentCountry, featuredServices }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-3xl">{currentCountry.cultural.bgIcon}</span>
            <h2 className="text-3xl font-bold">
              Top-Rated Services in {currentCountry.name}
            </h2>
            <span className="text-3xl">{currentCountry.cultural.bgIcon}</span>
          </div>
          <p className="text-gray-600">
            Discover trusted professionals in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredServices.map((provider, index) => (
            <div
              key={provider.id}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-2xl opacity-20">
                {currentCountry.cultural.culturalElements[index % 3]}
              </div>

              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition duration-200">
                      {provider.name}
                    </h3>
                    <button className="text-gray-400 hover:text-red-500 transition duration-200">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {provider.service}
                    </span>
                    {provider.verified && (
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-green-600 font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{provider.rating}</span>
                      <span className="ml-1">({provider.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{provider.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{provider.experience} experience</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>{provider.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                  Contact Now
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;