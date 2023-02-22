import React, { useEffect, useRef } from "react";
import Anime from "../assets/Anime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Gotop = () => {
  // 스크롤 위치 값 파악하기
  const bt = useRef(null);
  const scrollFn = () => {
    // 스크롤 값 파악하여서 if 문 사용하기
    const scY = window.document.documentElement.scrollTop;
    // console.log(scY);
    if (scY > 500) {
      bt.current.classList.add("active");
    } else {
      bt.current.classList.remove("active");
    }
  };
  useEffect(() => {
    scrollFn();
    window.addEventListener("scroll", scrollFn);
    return () => {
      window.addEventListener("scroll", scrollFn);
    };
  }, []);

  return (
    <div
      className="gotop"
      ref={bt}
      onClick={() => {
        new Anime(window, {
          prop: "scroll",
          value: 0,
          duration: 500,
        });
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default Gotop;
