import React from 'react';

const CulturalHeritage = ({ currentCountry }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            {currentCountry.cultural.culturalElements.map((element, idx) => (
              <span key={idx} className="text-4xl opacity-60">{element}</span>
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Celebrating {currentCountry.name} Heritage
          </h2>
          <p className="text-gray-600">
            Connecting you with local services that understand your culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-6xl mb-4">{currentCountry.cultural.bgIcon}</div>
            <h3 className="text-xl font-semibold mb-3">Local Heritage</h3>
            <p className="text-gray-600">
              Services rooted in {currentCountry.name} traditions and values
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="flex justify-center space-x-2 text-3xl mb-4">
              {currentCountry.cultural.culturalElements.map((element, idx) => (
                <span key={idx}>{element}</span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-3">Cultural Understanding</h3>
            <p className="text-gray-600">
              Providers who speak your language and understand your needs
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-6xl mb-4">{currentCountry.flag}</div>
            <h3 className="text-xl font-semibold mb-3">National Pride</h3>
            <p className="text-gray-600">
              Supporting local businesses and strengthening communities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritage;