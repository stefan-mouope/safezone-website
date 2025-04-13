import React from 'react';
import './Features.css';

import location from "../../assets/location.png";
import location1 from "../../assets/location1.png";
import cloche from "../../assets/cloche.png";



// Données des fonctionnalités
const featuresData = [
  {
    image: location,
    title: 'Suivi  en Temps Réel',
    description: 'Suivez la position de votre enfant en direct via l\'application.',
  },
  {
    image: location1,
    title: 'Definition Zones Sécurisées',
    description: 'Créez des zones sûres et recevez des alertes s’il les dépasse.',
  },
  {
    image: cloche,
    title: 'Notifications intelligentes',
    description: "Recevez des alertes en cas d'activités suspectes",
  },
  // Ajouter ici de nouvelles fonctionnalités
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-title">
        <h2>Fonctionnalités Principales</h2>
        <p>Découvrez ce que SafeZone peut faire pour vous</p>
      </div>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
