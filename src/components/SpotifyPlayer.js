import React from "react";
import "./SpotifyPlayer.css";

const tracks = [
  {
    className: "spotify-track1",
    title: "Cosmic Energy",
    src: "https://open.spotify.com/embed/track/6sokDkZEhTalyD2csJw4Ob?utm_source=generator",
  },
  {
    className: "spotify-track2",
    title: "Something Real",
    src: "https://open.spotify.com/embed/track/7Bi3rDs1eAREVRLwsIeVKC?utm_source=generator",
  },
  {
    className: "spotify-track3",
    title: "Leave it Alone",
    src: "https://open.spotify.com/embed/track/4jiI90djQLwOz2zHCQw9iF?utm_source=generator&theme=0",
  },
  {
    className: "spotify-track4",
    title: "Follow the Lead",
    src: "https://open.spotify.com/embed/track/7fE3wEZgWj9yDUb3eTx7wx?utm_source=generator",
  },
  {
    className: "spotify-track5",
    title: "Way Out",
    src: "https://open.spotify.com/embed/track/73LRwjEELZbiKnWUKz1rIV?utm_source=generator",
  },
  {
    className: "spotify-track6",
    title: "Talking in My Sleep",
    src: "https://open.spotify.com/embed/track/7r2s9WLNxOA09O1yoN3j4I?utm_source=generator",
  },
  {
    className: "spotify-track7",
    title: "i'll wait for you",
    src: "https://open.spotify.com/embed/track/5OS4e6R36zopYMt7dvTZDj?utm_source=generator",
  },
  {
    className: "spotify-track8",
    title: "New Track",
    src: "https://open.spotify.com/embed/track/2Bfmmm6Tov6GXAhlm27Ryl?utm_source=generator",
  },
];

function SpotifyPlayer() {
  return (
    <div className="spotify-player-container">
      {tracks.map((track, index) => (
        <div key={index} className={`spotify-track ${track.className}`}>
          <iframe
            className="spotify-iframe"
            title={track.title}
            src={track.src}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default SpotifyPlayer;
