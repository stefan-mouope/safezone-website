import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.png";
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="SafeZone logo" className="logo-image" />
        <span className="logo-text">SafeZone</span>
      </div>

      <img
        src={menuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />

      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul onClick={() => setIsMobileMenuOpen(false)}>
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
