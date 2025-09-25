import React from 'react';

const CulturalElements = ({ selectedCountry }) => {
  if (!selectedCountry) return null;

  return (
    <>
      {selectedCountry === 'tunisia' && (
        <>
          <div className="fixed left-0 top-0 h-full w-16 opacity-30 z-0">
            <svg viewBox="0 0 80 800" className="w-full h-full">
              <rect x="10" y="760" width="60" height="40" fill="white" />
              <rect x="5" y="750" width="70" height="15" fill="white" />
              <rect x="20" y="120" width="40" height="630" fill="white" />
              <line x1="25" y1="120" x2="25" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="30" y1="120" x2="30" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="35" y1="120" x2="35" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="40" y1="120" x2="40" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="45" y1="120" x2="45" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="50" y1="120" x2="50" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="55" y1="120" x2="55" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <rect x="15" y="100" width="50" height="25" fill="white" />
              <rect x="10" y="95" width="60" height="8" fill="white" />
              <rect x="5" y="85" width="70" height="15" fill="white" />
              <rect x="0" y="75" width="80" height="12" fill="white" />
            </svg>
          </div>
          <div className="fixed right-0 top-0 h-full w-16 opacity-30 z-0">
            <svg viewBox="0 0 80 800" className="w-full h-full">
              <rect x="10" y="760" width="60" height="40" fill="white" />
              <rect x="5" y="750" width="70" height="15" fill="white" />
              <rect x="20" y="120" width="40" height="630" fill="white" />
              <line x1="25" y1="120" x2="25" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="30" y1="120" x2="30" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="35" y1="120" x2="35" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="40" y1="120" x2="40" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="45" y1="120" x2="45" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="50" y1="120" x2="50" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <line x1="55" y1="120" x2="55" y2="750" stroke="#e5e7eb" strokeWidth="1.5" />
              <rect x="15" y="100" width="50" height="25" fill="white" />
              <rect x="10" y="95" width="60" height="8" fill="white" />
              <rect x="5" y="85" width="70" height="15" fill="white" />
              <rect x="0" y="75" width="80" height="12" fill="white" />
            </svg>
          </div>
        </>
      )}

      {selectedCountry === 'egypt' && (
        <>
          <div className="fixed left-0 top-0 h-full w-24 opacity-25 z-0">
            <svg viewBox="0 0 120 800" className="w-full h-full">
              <path d="M60 50 L110 750 L10 750 Z" fill="white" />
              <path d="M60 50 L85 200 L35 200 Z" fill="white" opacity="0.9" />
              <path d="M35 200 L60 350 L85 200 L110 350 L10 350 Z" fill="white" opacity="0.8" />
              <line x1="60" y1="50" x2="35" y2="200" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="60" y1="50" x2="85" y2="200" stroke="#e5e7eb" strokeWidth="1" />
            </svg>
          </div>
          <div className="fixed right-0 top-0 h-full w-20 opacity-25 z-0">
            <svg viewBox="0 0 100 800" className="w-full h-full">
              <rect x="20" y="720" width="60" height="80" fill="white" />
              <rect x="30" y="400" width="40" height="320" fill="white" />
              <rect x="25" y="300" width="50" height="60" fill="white" />
              <path d="M25 300 L50 280 L75 300" fill="white" />
            </svg>
          </div>
        </>
      )}

      {selectedCountry === 'algeria' && (
        <>
          <div className="fixed left-0 bottom-0 w-32 h-full opacity-20 z-0">
            <svg viewBox="0 0 150 800" className="w-full h-full">
              <path d="M0 800 L0 400 L30 300 L50 350 L80 250 L110 320 L150 280 L150 800 Z" fill="white" />
              <path d="M0 600 L25 500 L45 550 L70 450 L95 520 L120 480 L150 460 L150 800 Z" fill="white" opacity="0.8" />
            </svg>
          </div>
          <div className="fixed right-0 top-0 h-full w-20 opacity-25 z-0">
            <svg viewBox="0 0 100 800" className="w-full h-full">
              <rect x="25" y="200" width="50" height="600" fill="white" />
              <rect x="20" y="190" width="60" height="15" fill="white" />
              <rect x="25" y="180" width="10" height="20" fill="white" />
              <rect x="45" y="180" width="10" height="20" fill="white" />
              <rect x="65" y="180" width="10" height="20" fill="white" />
            </svg>
          </div>
        </>
      )}

      {selectedCountry === 'libya' && (
        <>
          <div className="fixed left-0 top-0 h-full w-24 opacity-25 z-0">
            <svg viewBox="0 0 120 800" className="w-full h-full">
              <rect x="10" y="600" width="100" height="200" fill="white" />
              <rect x="20" y="200" width="20" height="400" fill="white" />
              <rect x="80" y="200" width="20" height="400" fill="white" />
              <path d="M40 200 C40 150, 80 150, 80 200 L80 600 L40 600 Z" fill="#f3f4f6" />
              <rect x="0" y="180" width="120" height="25" fill="white" />
            </svg>
          </div>
          <div className="fixed right-0 top-0 h-full w-16 opacity-25 z-0">
            <svg viewBox="0 0 80 800" className="w-full h-full">
              <rect x="15" y="720" width="50" height="80" fill="white" />
              <rect x="25" y="150" width="30" height="570" fill="white" />
              <rect x="20" y="130" width="40" height="25" fill="white" />
            </svg>
          </div>
        </>
      )}

      {selectedCountry === 'morocco' && (
        <>
          <div className="fixed left-0 top-0 h-full w-20 opacity-25 z-0">
            <svg viewBox="0 0 100 800" className="w-full h-full">
              <rect x="20" y="400" width="60" height="400" fill="white" />
              <rect x="25" y="200" width="50" height="200" fill="white" />
              <rect x="30" y="100" width="40" height="100" fill="white" />
              <path d="M30 100 C30 80, 70 80, 70 100" fill="white" />
              <path d="M45 70 C40 60, 60 60, 55 70" fill="white" />
            </svg>
          </div>
          <div className="fixed right-0 top-0 h-full w-24 opacity-25 z-0">
            <svg viewBox="0 0 120 800" className="w-full h-full">
              <rect x="10" y="500" width="100" height="300" fill="white" />
              <rect x="20" y="200" width="15" height="300" fill="white" />
              <rect x="85" y="200" width="15" height="300" fill="white" />
              <path d="M35 200 C35 150, 50 130, 60 130 C70 130, 85 150, 85 200 L85 500 L35 500 Z" fill="#f3f4f6" />
            </svg>
          </div>
        </>
      )}
    </>
  );
};

export default CulturalElements;