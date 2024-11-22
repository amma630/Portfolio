import React from 'react';
import '../footer.css'; // Ensure this file is imported

// Font Awesome import for icons
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Let's Connect</h3>
        <div className="features">
          <a href="#about">About Me</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          
          <a href="https://github.com/amma630" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sriman-vara-prasad-illingi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/srimanvaraprasad/profilecard/?igsh=ajNpdjh6YWJmenNt" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sriman Vara Prasad. All Rights Reserved. <br />
          <a href="https://yourwebsite.com">Your Website</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
