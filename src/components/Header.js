import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setPage, setOpen, open }) => {
  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <span className="header-logo" onClick={() => setPage(0)}>
            h.young Profile
          </span>
          <ul className="gnb">
            <li onClick={() => setPage(0)}>
              <span>WELCOME</span>
            </li>
            <li onClick={() => setPage(1)}>
              <span>ABOUT ME</span>
            </li>
            <li onClick={() => setPage(2)}>
              <span>SKILLS</span>
            </li>
            <li onClick={() => setPage(3)}>
              <span>PORTFOLIO</span>
            </li>
            {/* <li onClick={() => setPage(4)}>
              <span>Life</span>
            </li>
            <li onClick={() => setPage(5)}>
              <span>Vison</span>
            </li> */}
          </ul>
          <span
            className="mobile-bt"
            onClick={() => {
              console.log(open);
              open ? setOpen(false) : setOpen(true);
            }}
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
