import React from "react";
import person2 from "../assets/person2.jpeg";
const NavbarCom = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={person2} alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default NavbarCom;
