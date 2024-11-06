import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Burger Menu Icon */}
      <div className="burger-menu" onClick={toggleSidebar}>
        &#9776; {/* This is the burger icon (≡) */}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`} onMouseLeave={toggleSidebar}>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Skills</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
