import React, { useState, useEffect } from "react";

const DynamicTypingText = () => {
  // Array of texts to cycle through
  const textArray = [
    "React development",
    "Web development",
    "Frontend development",
    "Full-stack development",
  ];

  // Index to track the current text
  const [index, setIndex] = useState(0);

  // Update the index dynamically every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [textArray.length]);

  // Derive the current text from textArray
  const currentText = textArray[index];

  return <span className="typing-text">{currentText}</span>;
};

const HeroSection = () => {
  return (
    <section className="home" id="home">
      <div className="App"></div>
      <div className="content">
        <h2>
          Hi There,
          <br /> I'm Sriman <span>Vara Prasad</span>
        </h2>
        <p>
          I am into <DynamicTypingText />
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/sriman-vara-prasad-illingi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/amma630"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            
            
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/srimanvaraprasad/profilecard/?igsh=ajNpdjh6YWJmenNt"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src="./assets/images/hero1.png"
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default HeroSection;
