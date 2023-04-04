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
        {/* 팀 프로젝트 */}
        <div className="portfolio-box">
          <div className="portfolio-left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZWeI0s7nnpU"
              title="지출가계부"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-right">
            <h3>나의 텅장 (Team Project)</h3>
            <span className="portfolio-date">2023.02.09 - 2023.03.02</span>
            <span>
              &bull; 목표 소비 금액을 설정할 수 있는 챌린지 형태의 가계부
              <br />
              &bull; 목표금액 입력, 지출 내역 입력, 카테고리별 통계, 커뮤니티
              기능 구현
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
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-right">
            <h3>저기요 (Team Project)</h3>
            <span className="portfolio-date">2023.01.09 - 2023.02.05</span>
            <span>
              &bull; 요기요 사이트를 벤치마킹한 음식주문서비스
              <br />
              &bull; 카테고리별 매장 분류, 검색, 장바구니, 금액계산,
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
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
          <div className="portfolio-right">
            <h3>미니교보 (Team Project)</h3>
            <span>2022.12.05 - 2022.12.23</span>
            <span>
              &bull; 미니프로젝트 교보문고
              <br />
              &bull; 도서 목록, 도서 상세보기 기능 구현
            </span>
            <div className="portfolio-skill">
              <img src={`${path}/images/icon-react.png`} />
              <img src={`${path}/images/icon-html.png`} />
              <img src={`${path}/images/icon-css.png`} />
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
        {/* 개인 작업 */}
        <div className="portfolio-box">
          <div className="portfolio-left">
            <a href="#">
              <img src={`${path}/images/sample.jpg`} />
            </a>
          </div>
          <div className="portfolio-right">
            <h3>원더플레이스 클론코딩</h3>
            <span className="portfolio-date">2023.03.20 - 2023.00.00</span>
            {/* <span>
              미니프로젝트 교보문고
              <br />
              도서 목록, 도서 상세보기 기능 구현
            </span> */}
            <div className="portfolio-skill">
              <img src={`${path}/images/icon-html.png`} />
              <img src={`${path}/images/icon-css.png`} />
              <img src={`${path}/images/icon-js.png`} />
            </div>
            <div className="portfolio-show">
              <a
                href="https://github.com/cocopalm221/wonderplace-clone"
                target="_blank"
              >
                <img src={`${path}/images/icon-git.png`} />
              </a>
              <a href="#" target="_blank">
                <img src={`${path}/images/icon-web.png`} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-left">
            <a
              href="https://cocopalm221.github.io/Hyundai-clone/"
              target="_blank"
            >
              <img src={`${path}/images/Hyundai.gif`} />
            </a>
          </div>
          <div className="portfolio-right">
            <h3>현대그룹 클론코딩</h3>
            <span className="portfolio-date">2023.02.27 - 2023.03.16</span>
            {/* <span>
              미니프로젝트 교보문고
              <br />
              도서 목록, 도서 상세보기 기능 구현
            </span> */}
            <div className="portfolio-skill">
              <img src={`${path}/images/icon-html.png`} />
              <img src={`${path}/images/icon-css.png`} />
              <img src={`${path}/images/icon-js.png`} />
            </div>
            <div className="portfolio-show">
              <a
                href="https://github.com/cocopalm221/Hyundai-clone"
                target="_blank"
              >
                <img src={`${path}/images/icon-git.png`} />
              </a>
              <a
                href="https://cocopalm221.github.io/Hyundai-clone/"
                target="_blank"
              >
                <img src={`${path}/images/icon-web.png`} />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-left">
            <a href="https://cocopalm221.github.io/hansalim/" target="_blank">
              <img src={`${path}/images/hansalim.gif`} />
            </a>
          </div>
          <div className="portfolio-right">
            <h3>한살림장보기 클론코딩</h3>
            <span>2022.11.06 - 2022.11.22</span>
            {/* <span>
              미니프로젝트 교보문고
              <br />
              도서 목록, 도서 상세보기 기능 구현
            </span> */}
            <div className="portfolio-skill">
              <img src={`${path}/images/icon-html.png`} />
              <img src={`${path}/images/icon-css.png`} />
              <img src={`${path}/images/icon-js.png`} />
            </div>
            <div className="portfolio-show">
              <a href="https://github.com/cocopalm221/hansalim" target="_blank">
                <img src={`${path}/images/icon-git.png`} />
              </a>
              <a href="https://cocopalm221.github.io/hansalim/" target="_blank">
                <img src={`${path}/images/icon-web.png`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
