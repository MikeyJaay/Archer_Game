import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="nav-title">Home</h1>
      </nav>
      <div className="content">
        <h2>Welcome to the Character Trivia Game!</h2>
        <div className="button-container">
          <button className="play-button">Play Trivia</button>
          <button className="about-button">About this Project</button>
        </div>
      </div>
    </div>
  );
}

export default Home;