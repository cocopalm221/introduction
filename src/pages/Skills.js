import React from "react";

const Skills = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="skills scroll">
      <div className="inner">
        <h2>Skills</h2>
        <div className="contents">
          <ul className="skills-list">
            <li>
              <img
                src={`${path}/images/skill-html.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-css.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="400"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-js.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-react.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-git.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="700"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-redux.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-figma.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="900"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-type.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              />
            </li>
            <li>
              <img
                src={`${path}/images/skill-sass.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1100"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
