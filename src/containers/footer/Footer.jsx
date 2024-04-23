import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className= "gpt3_footer-container section_padding">
      <div className="gpt3_footer-container-header">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>   
      </div>
      <div className="gpt3_footer-container-footer">
        <div className="gpt3_footer-container-footer-logo">
          <img src={logo} alt="logo"/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3_footer-container-footer-logolinks">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Soacial Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-container-footer-logolinks">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>

        </div>
        <div className="gpt3_footer-container-footer-logolinks">
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3_footer-container-footer-footer">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;