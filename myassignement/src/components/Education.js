import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="quote">Education is not the learning of facts, but the training of the mind to think.</p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              className="tilt"
              src={`${process.env.PUBLIC_URL}/assets/images/college.jpg`}
              alt="Profile"
            />
          </div>

          <div className="content">
            <h3>Bachelor of Technology in Computer Science and Enginerring</h3>
            <p>JNTU College of Engineering Sulthanpur | JNTUHCES</p>
            <h4>2021-2025 | Pursuing</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src={`${process.env.PUBLIC_URL}/assets/images/school.png`}
              alt="School"
            />
          </div>
          <div className="content">
            <h3>Secondary School Education</h3>
            <p>Manasa Vikas High School | SSC</p>
            <h4>2018-2020 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
