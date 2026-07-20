import React, { useState } from "react";
import { GrClose, GrList } from "react-icons/gr";
import FitlabLogo from "../../assets/fitlab-logo.png";
import "./Navbar.css";
import Reveal from "../Reveal";

export default function Navbar() {
  const [isopen, setState] = useState(false);
  function setDropdown() {
    setState(!isopen);
  }
  const navButton = [
    { id: 1, title: "Article", href: "/" },
    { id: 2, title: "program", href: "/" },
    { id: 3, title: "more", href: "/" },
  ];
  return (
    <nav className="nav-box">
      <div className={`${isopen ? "off" : ""} dropdown`}>
        <button onClick={setDropdown} className="buttonstyle-reset">
          <GrList size={30} />
        </button>
      </div>
      <div
        className={`nav-buttons ${isopen ? "nav-buttons--open" : "nav-buttons--close"}`}
      >
        <h1 className="header-logo">
          <img src={FitlabLogo} />
        </h1>
        {navButton.map((button) => (
          <a className="nav" key={button.id} href={button.href}>
            {button.title}
          </a>
        ))}
        <button className="join-button">join now</button>
        <button className="buttonstyle-reset" onClick={setDropdown}>
          <GrClose
            className={`${isopen ? "nav-buttons--open" : "nav-buttons--close"} close-button`}
            strokeWidth={40}
            size={30}
          />
        </button>
      </div>
    </nav>
  );
}
