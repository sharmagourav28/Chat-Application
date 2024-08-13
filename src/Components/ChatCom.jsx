import React from "react";
import camera from "../assets/zoom.png";
import adduser from "../assets/add-user.png";
import more from "../assets/more.png";
import MessagesCom from "./MessagesCom";
import InputCom from "./InputCom";
const ChatCom = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={camera} alt="camera" />
          <img src={adduser} alt="adduser" />
          <img src={more} alt="more" />
        </div>
      </div>
      <MessagesCom />
      <InputCom />
    </div>
  );
};
export default ChatCom;
