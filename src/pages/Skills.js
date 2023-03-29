import React from "react";

const Skills = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="skills scroll">
      {/* <div className="bg"></div> */}
      <div className="inner">
        <h2 data-aos="fade-up">SKILLS & TOOLS</h2>
        <div className="contents">
          <div
            className="skills-txt"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
          >
            <span>
              🚶‍♀️ 웹표준과 크로스브라우징의 완성도를 높이기 위해 노력하고
              있습니다.
            </span>
            <span>
              🏃‍♀️ 코드를 짧고 간결하게 배치, 작성하여 효율성을 높일 수 있도록
              신경쓰고 있습니다.
            </span>
            <span>🤸‍♂️ 기술 스택의 성장을 위해 꾸준히 학습하고자 합니다.</span>
          </div>
          <ul className="skills-list">
            <li
              data-aos="flip-left"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <img src={`${path}/images/icon-html.png`} alt="skill" />
              <a>HTML5</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <img src={`${path}/images/icon-css.png`} alt="skill" />
              <a>CSS3</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="600"
              data-aos-delay="700"
            >
              <img src={`${path}/images/icon-js.png`} alt="skill" />
              <a>JAVA SCRIPT</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="700"
              data-aos-delay="800"
            >
              <img src={`${path}/images/icon-TS.png`} alt="skill" />
              <a>TYPE SCRIPT</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <img src={`${path}/images/icon-react.png`} alt="skill" />
              <a>REACT</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <img src={`${path}/images/icon-redux.png`} alt="skill" />
              <a>REDUX</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <img src={`${path}/images/icon-sass.png`} alt="skill" />
              <a>SASS</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="600"
              data-aos-delay="700"
            >
              <img src={`${path}/images/icon-tailwind.png`} alt="skill" />
              <a>TAILWIND</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="700"
              data-aos-delay="800"
            >
              <img src={`${path}/images/icon-stylecomponent.png`} alt="skill" />
              <a>STYLE COMPONENT</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <img src={`${path}/images/icon-jquery.png`} alt="skill" />
              <a>j-QUERY</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <img src={`${path}/images/icon-ps.png`} alt="skill" />
              <a>PHOTO SHOP</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <img src={`${path}/images/icon-ai.png`} alt="skill" />
              <a>ILLUSTRATOR</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="600"
              data-aos-delay="700"
            >
              <img src={`${path}/images/icon-figma.png`} alt="skill" />
              <a>FIGMA</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="700"
              data-aos-delay="800"
            >
              <img src={`${path}/images/icon-git.png`} alt="skill" />
              <a>GIT</a>
            </li>
            <li
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <img src={`${path}/images/icon-slack.png`} alt="skill" />
              <a>SLACK</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
