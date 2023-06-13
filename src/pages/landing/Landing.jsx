import React from "react";
import "./Landing.css";
import Header from "../../components/landing-components/header/Header";
import About from "../../components/landing-components/about/About";
import Projects from "../../components/landing-components/projects/Projects";
import Services from "../../components/landing-components/services/Services"
import Contact from "../../components/landing-components/contact/Contact"


export default function Landing() {
  return (
    
      <div className="landing-page">
        <Header />
        <About />
        <Projects/>
        <Services/>
        <Contact/>
      </div>
    
  );
}
