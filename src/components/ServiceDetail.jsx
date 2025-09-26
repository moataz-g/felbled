import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ServiceDetail = ({ service, onClose }) => {
  const {
    name,
    service: serviceType,
    category,
    description,
    location,
    phone,
    rating,
    reviews,
    experience,
    price,
    availability,
    image,
  } = service;

  // ✅ Parse coordinates with fallback to Tunis
  let coordinates = [36.8065, 10.1815]; // Default: Tunis
  if (location) {
    const parts = location.split(",");
    if (parts.length === 2) {
      const lat = parseFloat(parts[0].trim());
      const lng = parseFloat(parts[1].trim());
      if (!isNaN(lat) && !isNaN(lng)) {
        coordinates = [lat, lng];
      }
    }
  }

  // ✅ Close modal when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.id === "modal-overlay") {
        onClose();
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="relative bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-xl overflow-y-auto max-h-screen">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2"
        >
          <span className="text-2xl">×</span>
        </button>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Section (Service Details) */}
          <div className="w-full md:w-1/2">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md mb-4">
              <span className="text-white font-bold text-lg">{image}</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">{name}</h2>
            <p className="text-lg text-gray-600 mb-4">
              {serviceType} - {category}
            </p>
            <p className="text-md text-gray-600 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-2">{location}</p>
            <p className="text-sm text-gray-500 mb-2">
              Phone:{" "}
              <a href={`tel:${phone}`} className="text-blue-600">
                {phone}
              </a>
            </p>

            <div className="flex items-center text-sm text-gray-600 mt-4">
              <span className="font-medium">
                {rating} stars ({reviews} reviews)
              </span>
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
            <MapContainer
              center={coordinates}
              zoom={13}
              className="h-[300px] w-full rounded-lg shadow"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={coordinates}>
                <Popup>{name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
