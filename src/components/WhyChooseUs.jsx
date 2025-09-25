import React from 'react';
import { Shield, MapPin, Star } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Felbled?
          </h2>
          <p className="text-gray-600">
            Your trusted platform for finding reliable services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Verified Providers</h3>
            <p className="text-gray-600">
              All service providers are verified and background-checked for your safety
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local Focus</h3>
            <p className="text-gray-600">
              Find services exactly where you need them in your city or neighborhood
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
            <p className="text-gray-600">
              Read real reviews and ratings from verified customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;