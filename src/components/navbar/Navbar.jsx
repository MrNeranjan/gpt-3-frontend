import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#home">What is GPT?</a></p>
          <p><a href="#home">Open AI</a></p>
          <p><a href="#home">Case Studies</a></p>
          <p><a href="#home">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p><a href="#home">Sign in</a></p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
