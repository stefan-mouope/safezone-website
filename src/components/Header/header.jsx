import React from 'react';
import logo from "../../assets/logo.png";
import './Header.css';

function Header() {
  return (
    <header className="header">
     <div className="logo-container">
        <img src={logo} alt="SafeZone logo" className="logo-image" />
        <span className="logo-text">SafeZone</span>
      </div>
      <nav className="nav"> 
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#how">Comment ça marche</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
