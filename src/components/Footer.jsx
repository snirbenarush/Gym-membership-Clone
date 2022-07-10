import React from "react";
import "../CSS/footer.css";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/Logo2.png";
import { Link } from "react-scroll";
import { HiArrowCircleUp } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="scroller">
        <Link to="home" smooth={true}>
          <p> Back To Top</p>
          <HiArrowCircleUp />
        </Link>
      </div>
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="blur blur-h1"></div>
      <div className="blur blur-h2"></div>
    </div>
  );
};

export default Footer;
