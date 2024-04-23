import React from "react";
import possibility from '../../assets/possibility.png';
import "./Possibilities.css";

function Possibilities() {
    return (
        <div className="gpt3_possibilities_container section_margin" >
            <div className="gpt3_possibilities_container-img">
                <img src={possibility} alt="possibility"/>
            </div>
            <div className="gpt3_possibilities_container-right">
                <p>Request Early Access to Get Started</p>
                <h1 className="gradient__text">Explore Boundless Opportunities with GPT-3</h1>
                <h2>The possibilities with GPT-3 extend far beyond what you can imagine. From enhancing creative processes to revolutionizing decision-making, GPT-3 opens up a world of potential for innovation and efficiency. Embrace the power of AI and transform how you interact with technology, enabling a future where AI assists in crafting solutions that were once thought unachievable.</h2>
                <h3>Request Early Access to Get Started</h3>
            </div>
      
        </div>
    );  
}

export default Possibilities;