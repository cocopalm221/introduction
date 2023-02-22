import React from "react";

const Life = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="life scroll">
      <div className="inner">
        <h2>Life</h2>
        <div className="contents">
          {/* 나의 대외활동, 취미, 기업이 바라는 인재상 */}
          <ul className="lifelist">
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Life;
