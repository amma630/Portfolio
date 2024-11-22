import React from "react";
import skillsData from "../skills.json"; // Adjust the path as needed

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {skillsData.map((skill, index) => (
            <div className="col skill-card" key={index}>
              <img src={skill.icon} alt={`${skill.name} logo`} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
