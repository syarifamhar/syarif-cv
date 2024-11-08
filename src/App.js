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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false); // Close sidebar after clicking a menu item
    }
  };

  return (
    <div>
      <button className="burger-menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </button>
      <Sidebar
        isOpen={isSidebarOpen}
        scrollTo={scrollToSection}
        onClose={() => setIsSidebarOpen(false)} // Close when sidebar loses focus
      />
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutMe /></section>
      <section id="experience"><Experience /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><ContactMe /></section>
    </div>
  );
}

export default App;
