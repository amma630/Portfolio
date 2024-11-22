// src/components/Preloader.js
import React from 'react';
import '../Preloader.css';  // Import the CSS file for the preloader

const Preloader = () => {
  return (
    <div className="preloader">
      <h1 className="title">Loading</h1>
      <div className="rainbow-marker-loader"></div>
    </div>
  );
};

export default Preloader;


