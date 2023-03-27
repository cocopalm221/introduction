import React from "react";
import Anime from "../assets/Anime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Visual = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="visual scroll">
      <div className="inner">
        <h1>
          안녕하세요.
          <br />
          프론트엔드 개발자 이혜영입니다.
        </h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          blanditiis dignissimos, sed ab error fuga minima molestiae, veritatis
          sit id vitae. Libero totam eveniet pariatur iusto numquam quos quo
          natus?
        </p> */}
        <div className="btnext">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
};

export default Visual;
