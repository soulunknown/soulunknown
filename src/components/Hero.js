// src/components/Hero.js
import React from 'react';
import './Hero.css';
import heroImage from './wfu.jpeg'; // Adjust the path as necessary

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-content">
       
       
      </div>
    </section>
  );
}

export default Hero;

