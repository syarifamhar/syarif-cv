// HeroSection.js
import React from 'react';
import '../App.css'; // Ensure this points to the global CSS in 'src'
import myPhoto from '../assets/myphoto.png';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        {/* Replace with your image source */}
        <img src={myPhoto} alt="Profile" />
      </div>
      <div className="hero-content">
        <h1>Hello <br /> I'm Syarif Amhar</h1>
        <p>
          UI/UX Designer, Frontend Developer, and Product Manager.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
