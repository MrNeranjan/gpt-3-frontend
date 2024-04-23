import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import { blog01,blog02,blog03,blog04,blog05 } from "./blogs";

function Blog() {
  return (
    <div className="gpt3_blogs_container section_margin">
      <div className="gpt3_blogs_container-header gradient__text">
        <h1>A lot is happening,We are blogging about it.</h1>
      </div>
      <div className="gpt3_blogs_container-blogs">
        <div className="gpt3_blogs_left_article">
            <Article  date ={"Sep 26, 2021"} title ={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} image ={blog01}/>
        </div>
        <div className="gpt3_blogs_right_article">
            <Article date ={"Apr 23, 2024"} title ={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} image ={blog02}/>
            <Article  date ={"Apr 23, 2024"} title ={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} image ={blog03}/>
            <Article  date ={"Apr 23, 2024"} title ={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} image ={blog04}/>
            <Article  date ={"Apr 23, 2024"} title ={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} image ={blog05}/>
        </div>
      </div>
      
    </div>
  );
}

export default Blog;