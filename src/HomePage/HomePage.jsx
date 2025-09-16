import React from 'react';
import './homePage.css';
import Search from '../Gouvernorats/Search';
import Pays from './Pays';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue sur B2B Afrique</h1>
          <p>Le premier annuaire professionnel pour les services en Afrique du Nord</p>
          <button className="cta-button">Rejoignez-nous</button>
        </div>
      </section>

      {/* Search Section */}
      <Search />

      {/* Country Selection Section */}
      <Pays />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 B2B Afrique. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;
