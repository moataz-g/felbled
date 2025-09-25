import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignInSignUp from './components/SignInSignUp';
import HomePage from './components/Homepage'; // Your home component
import Footer from './components/Footer';
import CountrySelector from './components/CountrySelector';
import SearchResults from './components/ServiceList';
import { useState } from 'react';

function App() {
  const [currentCountry, setCurrentCountry] = useState(/* your country state */);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCountryChange = () => {
    // Your country change logic
  };
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

  return (
    <Router>
      <div className="App">
        <Header 
          currentCountry={currentCountry}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onCountryChange={handleCountryChange}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<SearchResults />} />
          <Route path="/countries" element={<HomePage />} />
          <Route path="/about" element={<AboutUs currentCountry={currentCountry} />} />
          <Route path="/contact" element={<ContactUs currentCountry={currentCountry} />} />
          <Route path="/auth" element={<SignInSignUp />} />
      {/*    <Route path="/services" element={ Your services component } />  
          <Route path="/become-provider" element={ Your provider registration component } />
          <Route path="/signup" element={ Your signup component } /> */}
        </Routes>
        <Footer countries={countries} />
      </div>
    </Router>
  );
}

export default App;