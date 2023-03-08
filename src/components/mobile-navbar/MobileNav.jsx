import React from "react";
import "./MobileNav.css";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { BsFileImage } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";

import { useState } from "react";

export default function MobileNav() {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav className="mobilenav-container">
      <a
        href="#contentcard"
        title="Content Card"
        onClick={() => setActiveNav("#contentcard")}
        className={activeNav === "#contentcard" ? "active" : ""}
      >
        <BsLayoutTextWindowReverse />
      </a>
      <a
        href="#imagecard"
        title="Image Card"
        onClick={() => setActiveNav("#imagecard")}
        className={activeNav === "#imagecard" ? "active" : ""}
      >
        <BsFileImage />
      </a>
      <a
        href="#podcast"
        title="podcast"
        onClick={() => setActiveNav("#podcast")}
        className={activeNav === "#podcast" ? "active" : ""}
      >
        <BsFillMicFill />
      </a>
      
      
    </nav>
  );
}
