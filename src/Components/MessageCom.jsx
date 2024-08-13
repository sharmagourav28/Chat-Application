import React from "react";
import person1 from "../assets/person1.jpeg";
const MessageCom = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={person1} alt="person1" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={person1} alt="person1" />
      </div>
    </div>
  );
};
export default MessageCom;
