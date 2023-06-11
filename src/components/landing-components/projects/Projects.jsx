import React from "react";
import { NavLink } from "react-router-dom";

import "./projects.css";
import network from "../../../assets/network.png";
import garden from "../../../assets/garden.jpg";
import projects from "../../../assets/projects.jpg"
// import landscape from "../../../assets/landscape.jpg";
// import pirnia from "../../../assets/pirnia.jpg";
// import page from "../../../assets/page.jpg";
// import note from "../../../assets/note.jpg";
const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="row">
          <div className="col-4 project-image ">
            <img src={projects} alt="" />
          </div>
          <div className="col-8 pt-5 ps-5">
            <div className="row row-container">
              <div className="col-4 ">
                <div className="single-project  ">
                  <span>logo</span>
                  <h6>هستان‌شناسی تاریخ معماری ایران</h6>
                  <button className="go-to-project">ورود</button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project  ">
                  <span>logo</span>
                  <h6>هستان‌شناسی باغ ایرانی</h6>
                  <button className="go-to-project">ورود</button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project border-0">
                  <span>logo</span>
                  <h6>هستان‌شناسی تاریخ معماری منظر</h6>
                  <button className="go-to-project">ورود</button>
                </div>
              </div>
            </div>
            <div className="row row-container border-0">
              <div className="col-4 ">
                <div className="single-project  ">
                  <span>logo</span>
                  <h6>پیرنیا</h6>
                  <button className="go-to-project"> ورود</button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project  ">
                  <span>logo</span>
                  <h6>سینتوپیکون</h6>
                  <button className="go-to-project">ورود</button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project border-0">
                  <span>logo</span>
                  <h6>درس‌افزار</h6>
                  <button className="go-to-project">
                  <NavLink to="/darsafzaar-home">ورود</NavLink>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};
export default Projects;
