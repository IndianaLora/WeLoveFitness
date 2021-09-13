import React from "react";
import "./home.css";
import Nav from "../nav/Nav";
function Home() {
  return (
    <div className="home-container">
      <Nav />
      <div className="btn">
        <button className="sign-in-btn">
          <a href="./account">Sign Up!</a>
        </button>
      </div>
    </div>
    // <en>Love yourself enough to work harder </en>
  );
}

export default Home;
