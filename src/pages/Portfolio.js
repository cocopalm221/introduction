import React from "react";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="portfolio scroll">
      <div className="inner">
        <h2 data-aos="fade-up">Portfolio</h2>
        <div className="contents">
          {/* 팀 플젝 */}
          <div className="portfolio-box">
            <h3>Team Project</h3>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="https://cocopalm221.github.io/hansalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="team-project" />
                </a>
                (이미지 클릭 시 프로젝트 페이지로 이동합니다)
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li>프로젝트 명 : </li>
                  <li>프로젝트 기간 :</li>
                  <li>프로젝트 주제 :</li>
                  <li>프로젝트 기여도 :</li>
                  <li>프로젝트 도구 :</li>
                  <li>프로젝트 사용언어 :</li>
                  <li>프로젝트 피그마 :</li>
                  <li>
                    프로젝트 Git :{" "}
                    <a
                      href="https://cocopalm221.github.io/hansalim"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      작업물 보기
                    </a>
                  </li>
                  <li>프로젝트 notion :</li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="team-project" />
                </a>
                (이미지 클릭 시 프로젝트 페이지로 이동합니다)
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li>프로젝트 명 : </li>
                  <li>프로젝트 기간 :</li>
                  <li>프로젝트 주제 :</li>
                  <li>프로젝트 기여도 :</li>
                  <li>프로젝트 도구 :</li>
                  <li>프로젝트 사용언어 :</li>
                  <li>프로젝트 피그마 :</li>
                  <li>프로젝트 Git :</li>
                  <li>프로젝트 notion :</li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="team-project" />
                </a>
                (이미지 클릭 시 프로젝트 페이지로 이동합니다)
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li>프로젝트 명 : </li>
                  <li>프로젝트 기간 :</li>
                  <li>프로젝트 주제 :</li>
                  <li>프로젝트 기여도 :</li>
                  <li>프로젝트 도구 :</li>
                  <li>프로젝트 사용언어 :</li>
                  <li>프로젝트 피그마 :</li>
                  <li>프로젝트 Git :</li>
                  <li>프로젝트 notion :</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 개인 스터디 플젝 */}
          <div className="portfolio-box">
            <h3>Study Project</h3>
            {/* Swiper 배치 */}
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              pagination={true}
              modules={[Pagination, Navigation]}
              navigation={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="portfolio-slide"
            >
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;