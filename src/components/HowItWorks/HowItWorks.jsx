import React from 'react';
import './HowItWorks.css';
import phone from "../../assets/phone.png";
import watch from "../../assets/watch.png";
import map from "../../assets/map.png";


const steps = [
  {
    image: phone,
    title: 'Téléchargez l\'application',
    description: 'Installez l\'application SafeZone sur votre téléphone.',
  },
  {
    image: watch,
    title: 'Connectez la montre',
    description: 'Associez la montre de votre enfant via Bluetooth ou QR code.',
  },
  {
    image: map,
    title: 'Commencez à suivre',
    description: 'Recevez les alertes et suivez la position en temps réel.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how">
      <h2 className="hiw-title">Comment ça marche ?</h2>
      <div className="hiw-steps">
        {steps.map((step, index) => (
          <div className="hiw-step" key={index}>
            <img src={step.image} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
