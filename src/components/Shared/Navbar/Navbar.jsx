import React, { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import FitlabLogo from "../../../assets/fitlab-logo.png";
import "./Navbar.css";
import Reveal from "../../Reveal";
import { NavLink } from "react-router";
import { useLocation } from "react-router";

export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  function setDropdown() {
    setIsOpen(!isopen);
  }

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navButton = [
    { id: 1, title: "Home", link: "" },
    { id: 2, title: "Programs", link: "program" },
    { id: 3, title: "Trainers", link: "trainers" },
    { id: 4, title: "Pricing", link: "pricing" },
    { id: 4, title: "Contact", link: "contact" },
  ];
  return (
    <nav className="nav-box">
      <div className={`${isopen ? "off" : ""} dropdown`}>
        <button onClick={setDropdown} className="buttonstyle-reset">
          <Menu size={30} />
        </button>
      </div>
      <div
        className={`nav-buttons ${isopen ? "nav-buttons--open" : "nav-buttons--close"}`}
      >
        <span className="header-logo">
          <img src={FitlabLogo} />
        </span>
        {navButton.map((button) => (
          <NavLink className="nav" key={button.id} to={button.link}>
            {button.title}
          </NavLink>
        ))}
        <button className="join-button">join now</button>
        <button className="buttonstyle-reset" onClick={setDropdown}>
          <X
            className={`${isopen ? "nav-buttons--open" : "nav-buttons--close"} close-button`}
            strokeWidth={40}
            size={30}
          />
        </button>
      </div>
    </nav>
  );
}
