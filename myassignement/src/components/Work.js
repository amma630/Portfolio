import React from 'react';

const Work = () => {
  return (
    <section className="work" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className="box-container">
        <div className="box tilt">
          <img draggable="false" src="/assets/images/voiceassistant.jpeg" alt="" />
          <div className="content">
            <div className="tag">
              <h3>Voice Assistant</h3>
            </div>
            <div className="desc">
              <p> A voice assistant is a software application powered by artificial intelligence that enables users to interact with their devices through voice commands</p>
              <div className="btns">
                <a href="javascript:void(0)" className="btn" target="_blank" rel="noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="https://github.com/amma630/oasisinternship/blob/main/assistant.py" className="btn" target="_blank" rel="noreferrer">
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
         <div className="box tilt">
          <img draggable="false" src="/assets/images/whatherapp.png" alt="" />
          <div className="content">
            <div className="tag">
              <h3>Wheather App</h3>
            </div>
            <div className="desc">
              <p>A weather app developed by Aparna fetches real-time weather data using APIs. It displays current weather conditions, such as temperature, humidity, wind speed, and forecasts. .</p>
              <div className="btns">
                <a href="javascript:void(0)" className="btn" target="_blank" rel="noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="https://github.com/amma630/oasisinternship/blob/main/app.py" className="btn" target="_blank" rel="noreferrer">
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      <div className="box tilt">
          <img draggable="false" src="/assets/images/projects/portfolio1.PNG" alt="" />
          <div className="content">
            <div className="tag">
              <h3>Portfolio Website</h3>
            </div>
            <div className="desc">
              <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
              <div className="btns">
                <a href="javascript:void(0)" className="btn" target="_blank" rel="noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="https://github.com/jigar-sable/Portfolio-Website" className="btn" target="_blank" rel="noreferrer">
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
      </div>
        
     
      </div>

      <div className="viewall">
        <a href="/projects" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Work;
