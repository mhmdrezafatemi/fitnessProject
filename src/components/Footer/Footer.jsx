import { numbers, quicklinks, resources, socials } from "./FooterData";
import "./Footer.css";
import FitlabLogo from "../../assets/fitlab-logo.png";
import { Copy, Copyright } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-col1">
          <img className="footer-logo" src={FitlabLogo} />
          {numbers.map((number) => (
            <div className="footer-numbers">
              <p>
                {number.title}:{number.item}
              </p>
            </div>
          ))}
          <div className="footer-social">
            {socials.map((social) => (
              <a className="footer-icon">
                <p>{social.icon}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <ul>
            {quicklinks.map((quicklink) => (
              <li>{quicklink.title}</li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            {resources.map((resource) => (
              <li>{resource.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <strong className="copyright">
        {" "}
        © 2026 FitLife. All rights reserved./Developed by{" "}
        <a className="mylink" href="https://github.com/mhmdrezafatemi">
          Fatemi
          <FaGithub />
        </a>
      </strong>
    </>
  );
}
