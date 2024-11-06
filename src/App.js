// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import './App.css'; // Global path from 'src'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <HeroSection />
    </div>
  );
}

export default App;
