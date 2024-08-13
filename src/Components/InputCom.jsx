import React from "react";
import insert from "../assets/insert.png";
import imge from "../assets/imge.png";

const InputCom = () => {
  return (
    <div className="inputcom">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={insert} alt="insert" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={imge} alt="imges" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default InputCom;
