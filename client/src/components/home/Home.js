import React from "react";
import "./home.css";
import Nav from "../nav/Nav";
function Home() {
  return (
    <div className="home-container">
      <Nav/>
      <table cellSpacing="20">
        <thead>
          <tr>
            <th>WeLoveFitness</th>
          </tr>
        </thead>
        <tbody>
          <td>
            <en>Love yourself enough to work harder </en>
          </td>
        </tbody>
        <button>
          <a href="./account">Sign Up!</a>
        </button>
      </table>
    </div>
  );
}

export default Home;
