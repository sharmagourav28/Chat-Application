import React from "react";
import SidebarCom from "./SidebarCom";
import ChatCom from "./ChatCom";

const HomeCom = () => {
  return (
    <div className="home">
      <div className="container">
        <SidebarCom />
        <ChatCom />
      </div>
    </div>
  );
};
export default HomeCom;
