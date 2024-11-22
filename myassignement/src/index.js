// index.js
import React from 'react';
import ReactDOM from 'react-dom';
  // Global styles if any
import App from './App'; // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches your HTML file's root element ID
);

