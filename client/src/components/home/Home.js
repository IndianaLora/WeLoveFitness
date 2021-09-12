import React from "react";
import "./home.css";
import Nav from "../nav/Nav";
function Home() {
  return (
    <div className="home-container">
      <Nav />

      <button className="btn">
        <a href="./account" className="sign-in-btn">
          Sign Up!
        </a>
      </button>
    </div>
    // <en>Love yourself enough to work harder </en>
  );
}

export default Home;
