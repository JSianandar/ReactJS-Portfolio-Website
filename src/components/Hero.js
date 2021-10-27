import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video2.mp4" autoPlay loop muted />
      <h1>WELCOME TO MY PORTFOLIO WEBSITE</h1>
      <p>Feel free to check everything out!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SEE PORTFOLIO
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          CONTACT ME
          <i className="fas fa-envelope" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
