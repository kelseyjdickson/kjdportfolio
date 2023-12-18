import React from "react";
import { NavLink } from "react-router-dom";

import flower from "../icons/flower.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <img className="flower-power" alt="flower-icon" src={flower} />

      <NavLink to="/" className="header-name">
        <h1>Kelsey Dickson</h1>
      </NavLink>
      <NavLink to="/about">
        <h3 className="header-name">About</h3>
      </NavLink>
      <NavLink to="/projects">
        <h3 className="header-name">Projects</h3>
      </NavLink>
      <img className="pink-flower" src={flower} alt="pink-flower" />
    </div>
  );
};

export default Nav;
