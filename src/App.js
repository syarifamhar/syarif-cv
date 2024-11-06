// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import './App.css';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <HeroSection />
      <AboutMe />
    </div>
  );
}

export default App;
