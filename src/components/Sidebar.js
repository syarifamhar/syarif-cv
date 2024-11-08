// Sidebar.js
import React from "react";
import { Link } from "react-scroll";
import "./Sidebar.css";

function Sidebar({ isOpen, toggle }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li><Link to="home" smooth={true} duration={500} onClick={toggle}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={toggle}>About Me</Link></li>
        <li><Link to="experience" smooth={true} duration={500} onClick={toggle}>Experience</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500} onClick={toggle}>Portfolio</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={toggle}>Skills</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={toggle}>Contact Me</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
