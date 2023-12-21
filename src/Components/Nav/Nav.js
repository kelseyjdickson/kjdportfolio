import React from "react";
import { Link } from "react-router-dom";

import flower from "../../../src/icons/flower.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <img className="flower-power" alt="flower-icon" src={flower} />
      <Link to="/" className="header-name">
        <h1>Kelsey Dickson</h1>
      </Link>
      <Link to="/about" className="header-name">
        <h3>About</h3>
      </Link>
      <Link to="/projects" className="header-name">
        <h3>Projects</h3>
      </Link>
      <img className="pink-flower" src={flower} alt="pink-flower" />
    </div>
  );
};

export default Nav;
