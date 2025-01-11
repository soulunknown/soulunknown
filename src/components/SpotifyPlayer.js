import React from 'react';
import './SpotifyPlayer.css';

function SpotifyPlayer() {
  return (
    <div className="spotify-player-container">
      

     
      <div className="spotify-track1">
       
        <iframe
        className= "spotify-iframe1"
          title="Cosmic Energy"
         
          src="https://open.spotify.com/embed/track/6sokDkZEhTalyD2csJw4Ob?utm_source=generator"
        
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Song 2 */}
      <div className="spotify-track2">
        
        <iframe 
          className="spotify-iframe"
          title="Something Real"
       
          src="https://open.spotify.com/embed/track/7Bi3rDs1eAREVRLwsIeVKC?utm_source=generator" 
        
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      </div>

      {/* Song 3 */}
      <div className="spotify-track3">
       
        <iframe 
          className="spotify-iframe"
          title="Leave it Alone"
        
          src="https://open.spotify.com/embed/track/4jiI90djQLwOz2zHCQw9iF?utm_source=generator&theme=0"
        
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      </div>

      {/* Song 4 */}
      <div className="spotify-track4">
        
        <iframe
          className="spotify-iframe"
          title="Follow the Lead"
          
          src="https://open.spotify.com/embed/track/7fE3wEZgWj9yDUb3eTx7wx?utm_source=generator"
      
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Song 5 */}
      <div className="spotify-track5">
      
        <iframe
          className="spotify-iframe5"
          title="Way Out"
      
          src="https://open.spotify.com/embed/track/73LRwjEELZbiKnWUKz1rIV?utm_source=generator"
         
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Song 6 */}
      <div className="spotify-track6">
     
        <iframe
          className="spotify-iframe"
          title="Talking in My Sleep"
        
          src="https://open.spotify.com/embed/track/7r2s9WLNxOA09O1yoN3j4I?utm_source=generator"
        
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
       {/* Song 7 */}
       <div className="spotify-track7">
        <iframe
          className="spotify-iframe"
          title="i'll wait for you"
          src="https://open.spotify.com/embed/track/5OS4e6R36zopYMt7dvTZDj?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    
  );


}

export default SpotifyPlayer;
