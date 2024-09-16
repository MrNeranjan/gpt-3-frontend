import React from "react";
import Feature from '../../components/feature/Feature';
import "./Feature.css";


const featureList = [

  {
    title : "Unlock Immediate Insights ",
    text : "GPT-3 enhances your digital experiences by providing immediate, context-aware insights. From rich, personalized text generation to innovative problem-solving, step into a new era of smart technology today."
  },
  {
    title : "Empower Innovation",
    text : "GPT-3's capabilities enable you to become more proactive and efficient. With its ability to understand and generate human-like text, GPT-3 transforms how we think about interaction and automation in every field."
  },

  {
    title : "Engage with Confidence ",
    text : "With GPT-3, navigating complex information becomes effortless. Whether it’s customer service or content creation, our AI helps you communicate more effectively and make informed decisions faster."
  },

  {
    title : "Lead with Intelligence",
    text : "GPT-3 isn’t just about processing language—it's about enhancing how we connect and learn. Adopt GPT-3 to deliver tailored solutions and drive meaningful engagement in a rapidly evolving digital landscape."
  }

];



function FeatureM() {

  return (
    <div className="gpt3_feature_container section_margin">
      <div className="gpt3_feature_container-text-left">
        <h1 className="gradient__text">The future is now with GPT-3’s advanced natural language processing</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_feature_container-features">
        {featureList.map((feature, index) => (
          <Feature key={index} title={feature.title}   text ={feature.text} index ={feature.title+index}/>
        ))}
      </div>
    </div>
  );
}

export default FeatureM;
