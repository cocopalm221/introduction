import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="profile scroll">
      <div className="inner">
        <h2 data-aos="fade-up">ABOUT ME</h2>
        <div className="profile-box">
          <div
            className="profile-intro"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-delay="500"
          >
            <img src={`${path}/images/me.jpg`} alt="profile" />
            <div className="intro_txt">
              <span>😀 이 름 : 이혜영</span>
              <span>🎉 생년월일 : 91.04.17</span>
              <span>✨ 성장하는 개발자</span>
            </div>
          </div>
          <div
            className="profile-experience"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="500"
          >
            <div className="experience-txt">
              <h3>EXPERIENCE</h3>
              <span>📅 2018/07 - 2022/04 </span>
              <span> 웹디자이너/MD/기획</span>
            </div>
            <div className="education-txt">
              <h3>EDUCATION</h3>
              <span>📅 2012/02</span>
              <span>수성대학교 식품영양학 졸업</span>
              <br />
              <span>📅 2022/10 - 2023/04</span>
              <span>
                기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)개발자
                양성
              </span>
            </div>
          </div>
          <div
            className="profile-me"
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-delay="500"
          >
            <h3>THIS IS ME!</h3>
            <span>🧡 긍정적이고 낙천적입니다.</span>
            <span>💛 책임감을 갖고 임합니다.</span>
            <span>💚 스며드는 친화력이 좋습니다.</span>
            <span>💙 어떤 상황에도 적응을 잘합니다.</span>
          </div>
          <div
            className="profile-mbti"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="500"
          >
            <img src={`${path}/images/mbti.png`} alt="profile" />
            <div className="mbti-txt">
              <span>MBTI 는 INFJ✨ </span>
              <span>
                인내심이 많고 화합을 추구하고,통찰력과 직관력이 뛰어납니다
                <br />
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
