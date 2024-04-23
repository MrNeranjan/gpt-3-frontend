import React ,{useEffect }from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibilities,
  FeatureM,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
function App() {

  useEffect(() => {
    document.title = "GPT-3";
  }, []);

  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand /> 
      <WhatGPT3 />
      <FeatureM />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
