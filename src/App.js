import React, { useState } from 'react'; // Ensure useState is imported
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MusicShowcase from './components/MusicShowcase';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange} />
      
      {activeSection === 'home' && <Hero />}
      {activeSection === 'about' && <About />}
      {activeSection === 'music' && <MusicShowcase />}
      {activeSection === 'events' && <Events />}
      {activeSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  );
}

export default App;
