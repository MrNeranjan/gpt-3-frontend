import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="gpt3_header section_padding" id="Home">
      <div className="gpt3_header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <div className="gpt3_header-content__para">
          <p>
            GPT-3 is a cutting-edge language processing AI that can generate
            human-like text. It can write essays, answer questions, and even
            generate code. It’s the most powerful language model ever created.
          </p>
        </div>
        <div className="gpt3_header-content-input">
          <input placeholder="Enter your email ..." />
          <button>Get Started</button>
        </div>
        <div className="gpt3_header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested to access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3_header-content-ai">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
