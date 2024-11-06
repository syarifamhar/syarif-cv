// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import './App.css';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <HeroSection />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
