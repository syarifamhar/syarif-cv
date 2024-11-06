// HeroSection.js
import React from 'react';
import '../App.css'; // Ensure this points to the global CSS in 'src'


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        {/* Replace with your image source */}
        <img src="./assets/myphoto.png" alt="Profile" />
      </div>
      <div className="hero-content">
        <h1>Hello <br /> I'm Anna Peterson</h1>
        <p>
          A full stack all-around designer that tristique est placerat in massa consectetur
          quisque lobortis vitae faucibus diam consequat.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
