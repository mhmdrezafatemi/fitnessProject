import heropic from "./assets/heropic.jpg";
import dropdown from "./assets/dropdown.svg";
import { useState } from "react";
export default function Hero() {
  return (
    <div className="hero-img">
      <Navigation />
    </div>
  );
}

function Navigation() {
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
      <div className="nav-box">
        <div className="dropdown">
          <button onClick={setDropdown} className="buttonstyle-reset">
            <img className="dropdown-img" src={dropdown} />
            <ul></ul>
          </button>
        </div>
        <div className="nav-buttons">
          <h1 className="header-logo">FITLAB</h1>
          {navButton.map((button) => (
            <a className="nav" key={button.id} href={button.href}>
              {button.title}
            </a>
          ))}
          <button className="join-button">join now</button>
        </div>
      </div>
      <div className="hero-quote">
        <h2 className="hero-title">Train Smarter. Become Stronger.</h2>
        <p>
          fitness is everything if you have motivation,where to get it? you came
          to the right place
        </p>
        <div className="hero-button">
          <button>Get started</button>
          <button>Explore Program</button>
        </div>
      </div>
    </>
  );
}
