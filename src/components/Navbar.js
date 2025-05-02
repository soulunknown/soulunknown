// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './soulunknowngraffi.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmoking, setIsSmoking] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleSmoke = () => {
    setIsSmoking(true);
    setTimeout(() => setIsSmoking(false), 800); // reset after animation
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <Link to="/" onClick={handleSmoke}>
          <img
            src={logo}
            alt="Soul Unknown Logo"
            className={`navbar-logo ${isSmoking ? 'smoke-out' : ''}`}
          />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/music" onClick={() => setMenuOpen(false)}>Music</Link></li>
        <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
