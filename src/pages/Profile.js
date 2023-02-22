import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사)약력,학력,업무,교육,성격,mbti 등 */}
        <h2 data-aos="fade-up">Profile</h2>
        <div
          className="contents"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="profile-box">
            <img src={`${path}/images/profile_1.png`} alt="profile" />
          </div>
          <div className="profile-box">
            <img src={`${path}/images/profile_2.png`} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
