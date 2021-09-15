import React from "react";
import "./home.css";
import Nav from "../nav/Nav";
import Loading from "../loading/Loading";
import SignIn from "./singin/SignIn";
function Home() {
  return (
    <section>
      <div className="home-container">
        <Nav />
        <Loading />
        <SignIn />
      </div>
    </section>
    // <en>Love yourself enough to work harder </en>
  );
}

export default Home;
