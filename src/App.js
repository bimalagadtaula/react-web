import React from 'react';
import { Routes, Route, useLocation  } from "react-router-dom";
import Home from "./Containers/home";
import About from './Containers/about';
import Contact from './Containers/contact';
import Resume from './Containers/resume';
import Navbar from './Components/Navbar';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './utils.js/particle';
import './App.css';
function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  };
  // eslint-disable-next-line no-restricted-globals
  const location = useLocation();
  const renderParticleJsInHomepage = location.pathname === '/';

  return ( 
    <div className="App">
      {/* navbarcontent */}
      {/* importing navbar */}
      <Navbar />
      {/* main page contents */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/contact' element={<Contact />} />
        <Route index path='/resume' element={<Resume />} />
      </Routes>
     {/* particle js content */}
     {
        renderParticleJsInHomepage && 
           <Particles id="particles" init={handleInit} options={particlesConfig} />
      }
    </div>
  );
}

export default App;
