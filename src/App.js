// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import './App.css';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
