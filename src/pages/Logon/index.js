import React from "react";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";

function Logon() {
  return (
    <div className="logon-container">
      <section className="form"></section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default Logon;
