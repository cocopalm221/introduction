import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="profile scroll">
      <div className="inner">
        <h2 data-aos="fade-up">ABOUT ME</h2>
        <div className="profile-box">
          <div className="p-box-top">
            <div
              className="p-about"
              data-aos="fade-down-right"
              data-aos-duration="400"
              data-aos-delay="300"
            >
              <img src={`${path}/images/me.jpg`} alt="profile" />
              <div className="p-about-txt">
                <span>😀 이 름 : 이혜영</span>
                <span>🎉 생년월일 : 91.04.17</span>
                <span>✨ 성장하는 개발자</span>
                <ul className="about-list">
                  <li>
                    <a>긍정적이고 낙천적입니다.</a>
                  </li>
                  <li>
                    <a>책임감을 갖고 임합니다.</a>
                  </li>
                  <li>
                    <a>스며드는 친화력이 좋습니다.</a>
                  </li>
                  <li>
                    <a>어떤 상황에도 적응을 잘합니다.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="p-experience"
              data-aos="fade-down-left"
              data-aos-duration="400"
              data-aos-delay="300"
            >
              <div className="p-experience-txt">
                <h3 className="ex-title">EXPERIENCE</h3>
                <span>2018/07 - 2022/04</span>
                <span>웹디자이너/MD/기획</span>
                <h3>EDUCATION</h3>
                <span>2012/02</span>
                <span>수성대학교 식품영양학 졸업</span>
                <span>2022/10 - 2023/04</span>
                <span>
                  기업 요구를 반영한 프로젝트 중심 프론트엔드
                  React(리액트)개발자 양성
                </span>
              </div>
            </div>
          </div>
          <div
            className="p-box-bottom"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="300"
          >
            <img src={`${path}/images/mbti.png`} alt="profile-mbti" />
            <div className="mbti">
              <h4>BMTI는 INFJ✨"선의의 옹호자"</h4>
              <span>
                인내심이 많고 화합을 추구하고, 통찰력과 직관력이 뛰어납니다.
              </span>
              <br />
              <span>
                창의력이 좋고, 확고한 신념과 열정으로 자신의 영감을 구현시켜
                나갑니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
