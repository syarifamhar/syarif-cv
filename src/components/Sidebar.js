// Sidebar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <ul className="menu-list">
        <li>Home</li>
        <li>About Me</li>
        <li>Experience</li>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

export default Sidebar;
