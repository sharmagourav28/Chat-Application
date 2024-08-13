import React from "react";
import addimg from "../assets/addImg.png";
import { Link } from "react-router-dom";

const RegisterCom = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addimg} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Signup</button>
        </form>
        <p>
          You do have account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterCom;
