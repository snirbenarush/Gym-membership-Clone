import React from "react";
import "../CSS/Header.css";
import Logo from "../assets/Logo2.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <p className="logo">WELCOME</p>
      {/* <img src={Logo} className="logo" /> */}

      <ul className="header-menu">
        <li>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="reasons" smooth={true}>
            Why Us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="reviews" smooth={true}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
