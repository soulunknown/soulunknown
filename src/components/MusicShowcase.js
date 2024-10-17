// src/components/MusicShowcase.js
import React from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import './MusicShowcase.css';

function MusicShowcase() {
  return (
    <section className="music-showcase">
      <h2>Music</h2>
      <SpotifyPlayer />
    </section>
  );
}

export default MusicShowcase;

