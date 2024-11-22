import React from "react";
// Font Awesome Link Component

// About Component
const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>
      <div className="row">
        <div className="image">
          <img
  draggable="false"
  className="tilt"
  src={`${process.env.PUBLIC_URL}/assets/images/sriman2.jpeg`}
  alt="Profile"
/>

        </div>
        <div className="content">
          <h3>I'm Sriman</h3>
          <span className="tag">Frontend Developer </span>
          <p>
             s a Frontend Developer, you are responsible for creating intuitive, visually appealing, and responsive user interfaces. Your role involves translating design mockups into functional web pages or applications while ensuring performance, accessibility, and compatibility across devices and browsers. A strong grasp of modern frontend technologies, frameworks,
              and best practices is crucial to delivering seamless user experiences.
             </p>
          <div className="box-container">
            <div className="box">
              <p>
                <span>Email:</span> illingi.srimanvaraprasad@gmail.com
              </p>
              <p>
                <span>Place:</span> Telangana, India - 412206
              </p>
            </div>
          </div>
          <div className="resumebtn">
            <a
              href="https://drive.google.com/file/d/1rZiXl562q7aVyk1kJ2nO85YBAq8ixTiw/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// App Component (Only default export here)
const App1 = () => {
  return (
    <>
      
      <About />
    </>
  );
};

// Default export of App component
export default App1;
