import React from "react";
import person1 from "../assets/person1.jpeg";

const SearchCom = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={person1} alt="" />
        <div className="userChatInfo">
          <span>Manas Dhaketa</span>
          <p>Thank You</p>
        </div>
      </div>
    </div>
  );
};
export default SearchCom;
