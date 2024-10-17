import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MusicShowcase from './components/MusicShowcase';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router basename="/soulunknown">
      <div className="App">
        <Navbar />

        {/* Define Routes for each section */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<MusicShowcase />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback route for unmatched paths */}
          <Route path="*" element={<Hero />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


