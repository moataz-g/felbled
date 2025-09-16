import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pays.css';
import { useTranslation } from 'react-i18next';

const CountryCard = ({ image, title, isActive, comingSoon, onClick }) => (
  <div className={`region-card ${isActive ? 'active' : 'inactive'}`} onClick={onClick}>
    <img src={image} alt={title} className="region-flag" />
    <div className="region-name">{title}</div>
    {comingSoon && <div className="region-status">{comingSoon}</div>}
  </div>
);

const Pays = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const countries = [
    { isActive: true, image: '/flags/Tunisie.png', title: 'Tunisie' },
    { isActive: false, image: '/flags/Lybie.png', title: 'Libye', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Algerie.png', title: 'Algérie', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Maroc.png', title: 'Maroc', comingSoon: 'Bientôt disponible' },
    { isActive: false, image: '/flags/Egypte.png', title: 'Egypte', comingSoon: 'Bientôt disponible' },
  ];

  const handleClick = (country) => {
    if (country.isActive) {
      navigate('/tunisie');
    } else {
      alert(`${country.title} sera bientôt disponible`);
    }
  };

  return (
    <section className="region-selection">
      <div className="region-panel">
        <h2 className="region-title">Sélection de Région</h2>
        <div className="region-grid">
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              image={country.image}
              title={t(country.title)}
              isActive={country.isActive}
              comingSoon={country.comingSoon}
              onClick={() => handleClick(country)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pays;
