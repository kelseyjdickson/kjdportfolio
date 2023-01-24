import React from "react";
import flower from "../icons/flower.png";
import pink from "../icons/flower-pink.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <img className="flower-power" alt="flower-icon" src={flower} />
      <h1 className="header-name">Kelsey Dickson</h1>
      <img className="pink-flower" src={flower} alt="pink-flower" />
    </div>
  );
};

export default Nav;
