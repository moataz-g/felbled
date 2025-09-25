import React, { useState, useEffect } from 'react';
import CountrySelector from './CountrySelector';
import Footer from './Footer';
import Hero from './Hero';
import FeaturedServices from './FeaturedServices';
import WhyChooseUs from './WhyChooseUs';
import Newsletter from './Newsletter';


const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Country configurations
  const countries = {
    tunisia: {
      name: 'Tunisia',
      nameAr: 'تونس',
      flag: '🇹🇳',
      cultural: {
        bgIcon: '🏛️',
        culturalElements: ['🫒', '🏺', '🌊']
      },
      cities: ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Bizerte', 'Gabes', 'Ariana', 'Gafsa'],
      popularServices: ['Doctor', 'Plumber', 'Electrician', 'Lawyer', 'Dentist', 'Mechanic']
    },
    egypt: {
      name: 'Egypt',
      nameAr: 'مصر',
      flag: '🇪🇬',
      cultural: {
        bgIcon: '🔺',
        culturalElements: ['🐪', '🏺', '🌅']
      },
      cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Aswan'],
      popularServices: ['Doctor', 'Teacher', 'Engineer', 'Lawyer', 'Pharmacist', 'Accountant']
    },
    algeria: {
      name: 'Algeria',
      nameAr: 'الجزائر',
      flag: '🇩🇿',
      cultural: {
        bgIcon: '🏔️',
        culturalElements: ['🌴', '⭐', '🌙']
      },
      cities: ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Batna', 'Djelfa', 'Sétif'],
      popularServices: ['Doctor', 'Contractor', 'Plumber', 'Teacher', 'Mechanic', 'Electrician']
    },
    libya: {
      name: 'Libya',
      nameAr: 'ليبيا',
      flag: '🇱🇾',
      cultural: {
        bgIcon: '🏛️',
        culturalElements: ['🏺', '⭐', '🌙']
      },
      cities: ['Tripoli', 'Benghazi', 'Misrata', 'Tarhuna', 'Al Khums', 'Az Zawiyah', 'Ajdabiya', 'Tobruk'],
      popularServices: ['Doctor', 'Engineer', 'Lawyer', 'Teacher', 'Mechanic', 'Electrician']
    },
    morocco: {
      name: 'Morocco',
      nameAr: 'المغرب',
      flag: '🇲🇦',
      cultural: {
        bgIcon: '🕌',
        culturalElements: ['🐪', '🌟', '🏺']
      },
      cities: ['Casablanca', 'Rabat', 'Fez', 'Marrakech', 'Agadir', 'Tangier', 'Meknes', 'Oujda'],
      popularServices: ['Doctor', 'Artisan', 'Guide', 'Teacher', 'Mechanic', 'Carpenter']
    }
  };

  // Sample featured services
  const featuredServices = [
    {
      id: 1,
      name: 'Dr. Ahmed Hassan',
      service: 'Cardiologist',
      rating: 4.9,
      reviews: 127,
      location: selectedCountry ? countries[selectedCountry].cities[0] : 'City',
      phone: '+216 XX XXX XXX',
      experience: '15 years',
      verified: true
    },
    {
      id: 2,
      name: 'Mohamed Electricals',
      service: 'Electrician',
      rating: 4.7,
      reviews: 89,
      location: selectedCountry ? countries[selectedCountry].cities[1] : 'City',
      phone: '+216 XX XXX XXX',
      experience: '8 years',
      verified: true
    },
    {
      id: 3,
      name: 'Fatima Legal Services',
      service: 'Lawyer',
      rating: 4.8,
      reviews: 156,
      location: selectedCountry ? countries[selectedCountry].cities[2] : 'City',
      phone: '+216 XX XXX XXX',
      experience: '12 years',
      verified: false
    },
    {
      id: 4,
      name: 'Quick Fix Plumbing',
      service: 'Plumber',
      rating: 4.6,
      reviews: 203,
      location: selectedCountry ? countries[selectedCountry].cities[0] : 'City',
      phone: '+216 XX XXX XXX',
      experience: '6 years',
      verified: true
    }
  ];

  // Auto-detect country (simulated)
  useEffect(() => {
    const timer = setTimeout(() => {
      const detectedCountry = 'tunisia';
      setSelectedCountry(detectedCountry);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = ({ searchTerm, selectedCity }) => {
    // Navigate to search results page
    console.log('Searching for:', { searchTerm, selectedCity });
    // You would typically use React Router here to navigate to search results
  };

  // 👇 use actual selected country instead of hardcoding tunisia
  const currentCountry = selectedCountry ? countries[selectedCountry] : null;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      
       {/* Country selector on top */}
      <CountrySelector
        countries={countries}
        onCountrySelect={(countryKey) => setSelectedCountry(countryKey)}
      />
      
{/* Only render Hero/Services when a country is chosen */}
      {currentCountry && (
        <>
          <Hero 
            currentCountry={currentCountry}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            onSearch={handleSearch}
          />

          <FeaturedServices 
            currentCountry={currentCountry}
            featuredServices={featuredServices}
          />
                <WhyChooseUs />
      
      
      <Newsletter currentCountry={currentCountry} />
      
        </>
      )}
      

      

    </div>
  );
};

export default HomePage;