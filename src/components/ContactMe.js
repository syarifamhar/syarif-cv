// ContactMe.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';
import './ContactMe.css'; // Import the CSS file for styling

const ContactMe = () => {
  return (
    <section id="contact" className="contact-me">
      <div class="contact-title-container">
        <h2 class="contact-title">Contact Me</h2>
      </div>
      
      <div className="contact-content">
        <h3 className="contact-header">
        "Have Ideas? Let's Bring Them to Life!"
        </h3>
        <p className="contact-description">
        Got a project idea, want to learn something new, or just feel like talking tech? I’m here for projects big or small, online classes, sharing knowledge—or just a casual chat. Reach out, and let’s start something awesome!
        </p>
        <div className="contact-icons">
          <a href="mailto:syarifamhar@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> Email
          </a>
          <a href="https://www.linkedin.com/in/muhamad-syarif/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.instagram.com/devpathbysyarif/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://github.com/syarifamhar" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.behance.net/syarifamhar" target="_blank" rel="noopener noreferrer">
            <FaBehance />Behance
          </a>
          <a href="https://dribbble.com/syarif_amhar" target="_blank" rel="noopener noreferrer">
            <FaDribbble />Dribbble
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
