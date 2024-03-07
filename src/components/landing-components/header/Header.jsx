import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logoWhite from "../../../assets/logo-white.png";
// import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="  header-container">
        <h1>مان تحقیق و نظر آویس</h1>
        <h5>همراه شما در پژوهش</h5>

        <button className="brochure-btn">
          <span>
            <NavLink to="coming-soon">دانلود بروشور</NavLink>
          </span>
        </button>
        {/* <HeaderSocials /> */}
        <div className="main-image">
          <img src={logoWhite} alt="matn avis logo"  />
        </div>
      </div>
    </header>
  );
};

export default Header;
