import React from 'react';
import './Footer.css';

import facebook_icon from "../../assets/facebook.png";
import twitter_icon from "../../assets/twitter.png";
import instagram_icon from "../../assets/whatsapp.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>SafeZone</h3>
          <p>Votre sécurité, notre priorité.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#features">Fonctionnalités</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Suivez-nous :</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook_icon} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitter_icon} alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagram_icon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SafeZone. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
