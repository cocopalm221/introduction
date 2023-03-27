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
        <div className="portfolio-box">
          <div className="portfolio-left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZWeI0s7nnpU"
              title="지출가계부"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-right">
            <h4>나의 텅장</h4>
            <span>2023.02.09 - 2023.03.02</span>
            <span>
              목표 소비 금액을 설정할 수 있는 챌린지 형태의 가계부
              <br />
              목표금액 입력, 지출 내역 입력, 카테고리별 통계, 커뮤니티 기능 구현
            </span>
            <div className="portfolio-skill">
              <img src={`${path}/images/icon-react.png`} />
              <img src={`${path}/images/icon-redux.png`} />
              <img src={`${path}/images/icon-tailwind.png`} />
              <img src={`${path}/images/icon-stylecomponent.png`} />
            </div>
            <div className="portfolio-show">
              <a
                href="https://github.com/cocopalm221/moneybook"
                target="_blank"
              >
                <img src={`${path}/images/icon-git.png`} />
              </a>
              <a href="https://youtu.be/ZWeI0s7nnpU" target="_blank">
                <img src={`${path}/images/icon-youtube.png`} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/l4c_RrM14EM"
              title="저기요"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-right">
            <h4>저기요</h4>
            <span>2023.01.09 - 2023.02.05</span>
            <span>
              요기요 사이트를 벤치마킹한 음식주문서비스
              <br />
              카테고리별 매장 분류, 검색, 장바구니, 금액계산,
              회원가입,로그인,찾기 기능 구현
            </span>
            <div className="portfolio-skill">
              <img src={`${path}/images/icon-react.png`} />
              <img src={`${path}/images/icon-redux.png`} />
              <img src={`${path}/images/icon-tailwind.png`} />
              <img src={`${path}/images/icon-stylecomponent.png`} />
            </div>
            <div className="portfolio-show">
              <a
                href="https://github.com/cocopalm221/project_yogiyo"
                target="_blank"
              >
                <img src={`${path}/images/icon-git.png`} />
              </a>
              <a href="https://youtu.be/l4c_RrM14EM" target="_blank">
                <img src={`${path}/images/icon-youtube.png`} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ER9GzLE9atM"
              title="미니교보"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-right">
            <h4>미니교보</h4>
            <span>2022.12.05 - 2022.12.23</span>
            <span>
              미니프로젝트 교보문고
              <br />
              도서 목록, 도서 상세보기 기능 구현
            </span>
            <div className="portfolio-skill">
              <img src={`${path}/images/icon-react.png`} />
            </div>
            <div className="portfolio-show">
              <a href="https://github.com/cocopalm221/kyobo" target="_blank">
                <img src={`${path}/images/icon-git.png`} />
              </a>
              <a href="https://youtu.be/ER9GzLE9atM" target="_blank">
                <img src={`${path}/images/icon-youtube.png`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
