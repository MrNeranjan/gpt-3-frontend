import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#home">What is GPT?</a>
    </p>
    <p>
      <a href="#home">Open AI</a>
    </p>
    <p>
      <a href="#home">Case Studies</a>
    </p>
    <p>
      <a href="#home">Library</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
          <a href="#home">Sign in</a>
        </p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3_navbar_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3_navbar_menu_container">
            <div className="gpt3_navbar_menu_container-links">
              <Menu />
            </div>
            <div className="gpt3_navbar_menu_container-links-sign">
              <p>
                <a href="#home">Sign in</a>
              </p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
