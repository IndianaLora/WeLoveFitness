import React from "react";
import "./nav.css";
function Nav() {
  return (
    <div className="container">
      <div className="logo-item">
        <h1>WeLoveFitness</h1>
      </div>
      <div className="nav-container">
        <h5 className="nav-item"><a href="#about">Home</a></h5>
        <h5 className="nav-item"><a href="#about">About</a></h5>
        <h5 className="nav-item"><a href="#about">Contact</a></h5>
      </div>
    </div>
  );
}

export default Nav;
