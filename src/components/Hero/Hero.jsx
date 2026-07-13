import heropic from "../../assets/heropic.jpg";
import dropdown from "../../assets/dropdown.svg";
import { useState } from "react";
import { GrClose,GrList } from "react-icons/gr";
import FitlabLogo from "../../assets/fitlab-logo.png";
import "./Hero.css";
export default function Hero() {
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
    <>
      <div className="hero-img">
        <nav className="nav-box">
          <div className={`${isopen ? "off" : ""} dropdown`}>
            <button onClick={setDropdown} className="buttonstyle-reset">
              <GrList size={30}/>
            </button>
          </div>
          <div className={`nav-buttons ${isopen ? "open" : "close"}`}>
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
              <GrClose className={isopen?'open':'close'} strokeWidth={40} size={30}/>
            </button>
          </div>
        </nav>
        <div className="hero-quote">
          <h2 className="hero-title">Train Smarter. Become Stronger.</h2>
          <p>
            fitness is everything if you have motivation,where to get it? you
            came to the right place
          </p>
          <div className="hero-button">
            <button>Get started</button>
            <button className="off">Explore Program</button>
          </div>
        </div>
      </div>
    </>
  );
}
