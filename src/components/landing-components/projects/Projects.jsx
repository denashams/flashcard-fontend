import React from "react";
import { NavLink } from "react-router-dom";

import "./projects.css";
// import network from "../../../assets/network.png";
// import garden from "../../../assets/garden.jpg";
import projects from "../../../assets/projects.jpg";
// import landscape from "../../../assets/landscape.jpg";
// import pirnia from "../../../assets/pirnia.jpg";
// import page from "../../../assets/page.jpg";
// import note from "../../../assets/note.jpg";
import { BiNetworkChart } from "react-icons/bi";
import { TbBinaryTree } from "react-icons/tb";
import { IoIosGitNetwork } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="row">
          <div className="col-4 project-image ">
            <img src={projects} alt="" />
            <div className="project-title"><h2>پروژه‌های ما</h2></div>
          </div>
          <div className="col-8 pt-5 ps-5">
            <div className="row row-container">
              <div className="col-4 ">
                <div className="single-project  ">
                  <span className="project-icon">
                    <BiNetworkChart />
                  </span>
                  <h6>هستان‌شناسی تاریخ معماری ایران</h6>
                  <button className="go-to-project">
                    {" "}
                    <NavLink to="coming-soon">ورود</NavLink>
                  </button>{" "}
                </div>
              </div>
              <div className="col-4">
                <div className="single-project  ">
                  <span className="project-icon">
                    <TbBinaryTree />
                  </span>
                  <h6>هستان‌شناسی باغ ایرانی</h6>
                  <button className="go-to-project">
                    {" "}
                    <NavLink to="coming-soon">ورود</NavLink>
                  </button>{" "}
                </div>
              </div>
              <div className="col-4">
                <div className="single-project border-0">
                  <span className="project-icon">
                    <IoIosGitNetwork />
                  </span>
                  <h6>هستان‌شناسی تاریخ معماری منظر</h6>
                  <button className="go-to-project">
                    {" "}
                    <NavLink to="coming-soon">ورود</NavLink>
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="row row-container border-0">
              <div className="col-4 ">
                <div className="single-project  ">
                  <span className="project-icon">
                    <FaChalkboardTeacher />
                  </span>
                  <h6>پیرنیا</h6>
                  <button className="go-to-project">
                    {" "}
                    <NavLink to="coming-soon">ورود</NavLink>
                  </button>{" "}
                </div>
              </div>
              <div className="col-4">
                <div className="single-project  ">
                  <span className="project-icon">
                    <BsReverseListColumnsReverse />
                  </span>
                  <h6>سینتوپیکون</h6>
                  <button className="go-to-project">
                    {" "}
                    <NavLink to="coming-soon">ورود</NavLink>
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project border-0">
                  <span className="project-icon">
                    <SlNotebook />
                  </span>
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
