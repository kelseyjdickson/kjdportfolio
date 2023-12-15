import React from "react";
import flower from "../icons/flower.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <img className="flower-power" alt="flower-icon" src={flower} />
      <h1 className="header-name">Kelsey Dickson</h1>
      <h3 className="header-name">About</h3>
      <h3 className="header-name">Projects</h3>
      <img className="pink-flower" src={flower} alt="pink-flower" />
    </div>
  );
};

export default Nav;
