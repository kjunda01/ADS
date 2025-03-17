import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/home/Home';
import About from './components/sections/about/About';
import Projects from './components/sections/projects/Projects';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-grey-100`}>
        
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
};

export default App;
