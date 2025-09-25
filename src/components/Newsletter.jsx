import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = ({ currentCountry }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 to-emerald-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-gray-300 mb-8">
          Get notified about new services and special offers in {currentCountry.name}
        </p>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition duration-200"
            >
              <Mail className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
