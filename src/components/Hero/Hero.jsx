import heropic from "../../assets/heropic.jpg";
import dropdown from "../../assets/dropdown.svg";
import React, { useState } from "react";
import { GrClose, GrList } from "react-icons/gr";
import FitlabLogo from "../../assets/fitlab-logo.png";
import "./Hero.css";
import Reveal from "../Reveal";
export default function Hero() {
  return (
    <>
      <div className="hero-img">
        <div className="hero-quote">
          <Reveal direction="left" distance="50%">
            <h2 className="hero-title">Train Smarter. Become Stronger.</h2>
            <p>
              fitness is everything if you have motivation,where to get it? you
              came to the right place
            </p>
            <div className="hero-button">
              <button>Get started</button>
              <button className="off">Explore Program</button>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
