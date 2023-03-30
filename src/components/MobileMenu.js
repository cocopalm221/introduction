import React from "react";

const MobileMenu = ({ setPage, open, setOpen }) => {
  return (
    <div className={open ? "mobile active" : "mobile"}>
      <ul className="mobilemenu">
        <li
          onClick={() => {
            setPage(0);
            setOpen(false);
          }}
        >
          <span>WELCOME</span>
        </li>
        <li
          onClick={() => {
            setPage(1);
            setOpen(false);
          }}
        >
          <span>ABOUT ME</span>
        </li>
        <li
          onClick={() => {
            setPage(2);
            setOpen(false);
          }}
        >
          <span>SKILLS</span>
        </li>
        <li
          onClick={() => {
            setPage(3);
            setOpen(false);
          }}
        >
          <span>PORTFOLIO</span>
        </li>
        {/* <li
          onClick={() => {
            setPage(4);
            setOpen(false);
          }}
        >
          <span>Life</span>
        </li>
        <li
          onClick={() => {
            setPage(5);
            setOpen(false);
          }}
        >
          <span>Vison</span>
        </li> */}
      </ul>
    </div>
  );
};

export default MobileMenu;
