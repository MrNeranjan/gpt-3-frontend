import React from "react";
import "./Brand.css";
import { google,slack,atlassian,dropbox,shopify } from "./imports";

function Brand() {
  return (
    <div className="gpt3__brand">
      <div className="gpt3__brand_item">
        <img src ={google} alt="google"/>
      </div>
      <div className="gpt3__brand_item">
        <img src ={slack} alt="slack"/>
      </div>
      <div className="gpt3__brand_item">
        <img src ={atlassian} alt="atlassian"/>
      </div>
      <div className="gpt3__brand_item">
        <img src ={dropbox} alt="dropbox"/>
      </div>
      <div className="gpt3__brand_item">
        <img src ={shopify} alt="shopify"/>
      </div>
    </div>
  );
}

export default Brand;