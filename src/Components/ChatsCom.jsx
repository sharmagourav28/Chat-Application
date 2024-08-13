import React from "react";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
const ChatsCom = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={person1} alt="" />
        <div className="userChatInfo">
          <span>Jayant Neema</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person1} alt="" />
        <div className="userChatInfo">
          <span>Harsh Dad</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person2} alt="" />
        <div className="userChatInfo">
          <span>Leena Ghatiya</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person2} alt="" />
        <div className="userChatInfo">
          <span>Mandvee vatsa</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};
export default ChatsCom;
