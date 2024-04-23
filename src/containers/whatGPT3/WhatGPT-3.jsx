import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatGPT-3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 (Generative Pre-trained Transformer 3) is an advanced artificial intelligence model developed by OpenAI. It is one of the largest and most powerful language processing AI models available, designed to understand and generate human-like text based on the input it receives. GPT-3 utilizes deep learning techniques and is trained on a diverse range of internet text to perform tasks such as translation, summarization, answering questions, and creating content across various formats and styles. Its ability to generate coherent and contextually relevant text makes it a valuable tool for applications in content generation, customer support, education, and more, enabling more interactive and responsive user experiences on websites and digital platforms." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots are automated messaging applications powered by AI technologies such as GPT-3 to simulate conversational interactions with users. They are deployed on websites to provide instant customer support, answer queries, and enhance user engagement by delivering personalized communication experiences." />
      <Feature title="Knowledgebase" text="A knowledge base is a centralized repository designed to store, manage, and share information, allowing users to easily access and retrieve important data and resources. It serves as a crucial tool for customer support and employee training, providing detailed articles, FAQs, and documentation to help users solve problems and gain insights independently." />
      <Feature title="Education" text="Education, in the context of AI like GPT-3, refers to the use of advanced technologies to enhance learning experiences through personalized content, interactive tutorials, and instant feedback mechanisms. This approach leverages AI to tailor educational materials to the needs of individual learners, improving engagement and effectiveness in both classroom and remote learning environments." />
    </div>
  </div>
);

export default WhatGPT3;