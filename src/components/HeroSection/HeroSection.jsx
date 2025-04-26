import React from 'react';
import './HeroSection.css';
import img from "../../assets/image1.png";
function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>SafeZone</h1>
        <h2>La sécurité de vos enfants, entre vos mains.</h2>
        <a href="#contact" className="hero-btn">Commencer</a>
      </div>
      <div className="hero-image">
      </div>
    </section>
  );
}

export default HeroSection;
