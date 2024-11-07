import React from 'react';
import './AboutMe.css';

// Importing icons from the assets folder
import codingIcon from '../assets/coding-icon.png';
import aiIcon from '../assets/ai-icon.png';
import coffeeIcon from '../assets/coffee-cup.png';
import footballIcon from '../assets/soccer-player.png';
import designIcon from '../assets/design-icon.png';
import productIcon from '../assets/product-icon.png';

function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-heading">
        <h1>About</h1>
      </div>
      <div className="about-content">
        <h2>Meet Syarif: Powered by Coffee, Driven by Curiosity!</h2>
        <p>
I           code, I design, I sip coffee... and still somehow manage to feel sleepy. When I’m not learning the latest AI trick or geeking out over football, I’m busy finding creative ways to mix work and caffeine. Life’s a game, and I’m here to play it—one debug session at a time.
        </p>

        <div className="about-icons">
          <div className="icon-item">
            <img src={codingIcon} alt="Coding Icon" />
            <p>Always Coding</p>
          </div>
          <div className="icon-item">
            <img src={productIcon} alt="Product Icon" />
            <p>Product Management Expert</p>
          </div>
          <div className="icon-item">
            <img src={designIcon} alt="Design Icon" />
            <p>Design Lover</p>
          </div>
        </div>

        <div class ="about-icons">
        <div className="icon-item">
            <img src={aiIcon} alt="AI Icon" />
            <p>AI Enthusiast</p>
          </div>
          <div className="icon-item">
            <img src={coffeeIcon} alt="Coffee Icon" />
            <p>Coffee Drinker</p>
          </div>
          <div className="icon-item">
            <img src={footballIcon} alt="Football Icon" />
            <p>Football Fanatic</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
