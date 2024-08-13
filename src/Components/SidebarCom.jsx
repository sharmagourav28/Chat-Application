import React from "react";
import NavbarCom from "./NavbarCom";
import SearchCom from "./SearchCom";
import ChatsCom from "./ChatsCom";

const SidebarCom = () => {
  return (
    <div className="sidebar">
      <NavbarCom />
      <SearchCom />
      <ChatsCom />
    </div>
  );
};
export default SidebarCom;
