import React from 'react';
import './Navbar.css';
import logo from './soulunknowngraffi.jpg'; // Adjust path to your logo file

function Navbar({ onSectionChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Soul Unknown Logo" className="navbar-logo" />
        <div className="logo"></div>
      </div>
      <ul className="nav-links">
        <li><button onClick={() => onSectionChange('home')}>Home</button></li>
        <li><button onClick={() => onSectionChange('about')}>About</button></li>
        <li><button onClick={() => onSectionChange('music')}>Music</button></li>
        <li><button onClick={() => onSectionChange('events')}>Events</button></li>
        <li><button onClick={() => onSectionChange('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
