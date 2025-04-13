import React from 'react';

import Header from './components/Header/header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Features/>
      <HowItWorks/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
