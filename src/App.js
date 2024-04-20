import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibilities,
  Feature,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand /> 
      <WhatGPT3 />
      <Feature />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
