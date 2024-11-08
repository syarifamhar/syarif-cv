// App.js
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button className="burger-menu" onClick={toggleSidebar}>
        ☰
      </button>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

      <HeroSection id="home" />       {/* Ensure this matches the Link target */}
      <AboutMe id="about" />          {/* Ensure this matches the Link target */}
      <Experience id="experience" />  {/* Ensure this matches the Link target */}
      <Portfolio id="portfolio" />    {/* Ensure this matches the Link target */}
      <Skills id="skills" />          {/* Ensure this matches the Link target */}
      <ContactMe id="contact" />      {/* Ensure this matches the Link target */}
    </div>
  );
}

export default App;