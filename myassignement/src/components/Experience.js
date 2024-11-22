import experiences from "../experience.json";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Project Experience
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`container ${index % 2 === 0 ? "right" : "left"}`} key={index}>
            <div className="content">
              <div className="tag">
                <h2>{exp.organization}</h2>
              </div>
              <div className="desc">
                <h3>{exp.role}</h3>
                <p><strong>{exp.duration}</strong></p>
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="morebtn">
        <a href="/experience" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Experience;
