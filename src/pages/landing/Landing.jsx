import React from "react";
import "./Landing.css";
import Header from "../../components/landing-components/header/Header";
import About from "../../components/landing-components/about/About";
import Projects from "../../components/landing-components/projects/Projects";


export default function Landing() {
  return (
    
      <div className="landing-page">
        <Header />
        <About />
        <Projects/>
      </div>
    
  );
}
