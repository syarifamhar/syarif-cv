import React from "react";
import "./Sidebar.css";

function Sidebar({ isOpen, scrollTo, onClose }) {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""}`}
      onMouseLeave={onClose} // Closes sidebar on mouse leave
    >
      <ul>
        <li><button onClick={() => scrollTo("home")}>Home</button></li>
        <li><button onClick={() => scrollTo("about")}>About Me</button></li>
        <li><button onClick={() => scrollTo("experience")}>Experience</button></li>
        <li><button onClick={() => scrollTo("portfolio")}>Portfolio</button></li>
        <li><button onClick={() => scrollTo("skills")}>Skills</button></li>
        <li><button onClick={() => scrollTo("contact")}>Contact Me</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
