import React from 'react';
import './About.css';
import hand from "../../assets/main.png";
import location from "../../assets/location.png";
import alerte from "../../assets/alerte.png";
import data from "../../assets/logo.png";
import security from "../../assets/security.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>À propos de SafeZone</h2>
          <p>
            SafeZone est une solution conçue pour offrir aux parents une tranquillité d'esprit totale.
            Grâce à une montre connectée portée par l'enfant, les parents peuvent suivre sa position
            en temps réel et être alertés en cas de sortie de zone.
          </p>
        </div>
        <div className="about-image">
          <img src={hand} alt="Montre connectée sur un poignet" />
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <img src={location} alt="Géolocalisation" /> 
          <h3>Géolocalisation en temps réel</h3>
        </div>
        <div className="feature">
          <img src={alerte} alt="Alertes" />
          <h3>Alertes en cas de zone à risque</h3>
        </div>
        <div className="feature">
          <img src={security} alt="Sécurité" />
          <h3>Données sécurisées</h3>
        </div>
      </div>
    </section>
  );
}

export default About;
