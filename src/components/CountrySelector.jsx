import React, { useState } from "react";
import { Globe, ChevronRight } from "lucide-react";

const CountrySelector = ({ countries, onCountrySelect }) => {
  const [selectedCountry, setSelectedCountry] = useState(Object.keys(countries)[0]);

  // Map country names to flag images (replace with your actual flag image paths/URLs)
  const flagImages = {
    Tunisia: "/tunisia.jpg",
    Egypt: "/egypte.jpg",
    Algeria: "/algerie.jpg",
    Libya: "/lebya.jpg",
    Morocco: "/morroco.jpg",
  };

  const countryEntries = Object.entries(countries);
  const selectedIndex = countryEntries.findIndex(([key]) => key === selectedCountry);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-cyan-600 to-emerald-400 text-white px-6 py-20 overflow-hidden">
      {/* Title */}
      <div className="text-center space-y-2 mb-5">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
          <Globe className="w-8 h-8 text-blue-400" />
          <span>Find Services Near You</span>
        </h2>
        <p className="text-xl text-gray-300">اعثر على الخدمات القريبة منك</p>
      </div>

      <p className="text-lg text-gray-200 mb-8 font-medium tracking-wide">
        Select Your Country | اختر بلدك
      </p>

      {/* Cards deck */}
      <div className="relative flex justify-center items-center w-full h-[350px]">
        {countryEntries.map(([key, country], idx) => {
          const isSelected = selectedCountry === key;
          const offset = (idx - selectedIndex) * 200;
          const zIndex = idx === selectedIndex ? 40 : 40 - Math.abs(idx - selectedIndex);

          return (
            <div
              key={key}
              onClick={() => {
                setSelectedCountry(key);
                onCountrySelect(key);
              }}
              className={`absolute w-72 h-90 rounded-2xl shadow-xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
                ${isSelected ? "scale-110 ring-4 ring-yellow-400 shadow-2xl" : "scale-90 hover:scale-95"}
              `}
              style={{
                transform: `translateX(${offset}px)`,
                zIndex: zIndex,
                backgroundImage: `url(${flagImages[country.name]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient overlay (blurry at top, clear at bottom) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent " />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {country.name}
                  </h3>
                  <p className="text-lg text-gray-200 drop-shadow">{country.nameAr}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-yellow-300">
                    {isSelected ? "Selected" : "Choose"}
                  </span>
                  <ChevronRight
                    className={`w-6 h-6 transition-transform ${
                      isSelected
                        ? "translate-x-2 text-yellow-300"
                        : "group-hover:translate-x-2"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountrySelector;
