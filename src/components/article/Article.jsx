import React from "react";
import "./Article.css";

function Article({ image, date, title }) {
  return (
    <div className="gpt3_article_container">
      <div className="gpt3_article_img">
        <img src={image} alt="imag" />
      </div>
      <div className="gpt3_article_text">
        <div>
          <h3>{date}</h3>
          <h2>{title}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
