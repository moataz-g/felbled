import React from 'react';

const ServiceDetail = ({ service, onClose }) => {
  const { name, service: serviceType, category, description, location, phone, rating, reviews, experience, price, availability, image } = service;
  
  // Static map image URL (you can adjust the coordinates for each service)
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=12&size=400x400&markers=color:red%7C${location}`;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg overflow-y-auto max-h-screen">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2"
        >
          <span className="text-2xl">×</span>
        </button>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Section (Service Details) */}
          <div className="w-full md:w-1/2 overflow-y-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md mb-4">
              <span className="text-white font-bold text-lg">{image}</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">{name}</h2>
            <p className="text-lg text-gray-600 mb-4">{serviceType} - {category}</p>
            <p className="text-md text-gray-600 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-2">{location}</p>
            <p className="text-sm text-gray-500 mb-2">Phone: <a href={`tel:${phone}`} className="text-blue-600">{phone}</a></p>

            <div className="flex items-center text-sm text-gray-600 mt-4">
              <span className="font-medium">{rating} stars ({reviews} reviews)</span>
            </div>
            <div className="mt-4">
              <span className="text-gray-600">Experience: {experience}</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-600">Price: {price}</span>
            </div>
            <div className="mt-2">
              <span className="text-green-600 font-medium">{availability}</span>
            </div>
          </div>

          {/* Right Section (Map) */}
          <div className="mt-8 md:mt-0 w-full md:w-1/2">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Location</h3>
            <img src={staticMapUrl} alt="Service location" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
