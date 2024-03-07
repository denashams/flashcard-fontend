import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="/" className="footer-logo">
        متن آویس
      </a>
      <ul className="permalinks">
        <li>
          <a href="#contact">ارتباط با ما</a>
          <a href="#services">خدمات</a>
          <a href="#projects">پروژه‌ها</a>
          <a href="#about">درباره ما</a>
          <a href="/">خانه</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          target="blank"
          href="https://www.instagram.com/matn.avis?igsh=MTlsZzYxODY2N2FzaQ=="
        >
          <AiFillInstagram />
        </a>
        <a target="blank" href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
        <a target="blank" href="https://linkedin.com">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="footer-copyright">
        <small>همه حقوق متعلق به شرکت مان تحقیق و نظر آویس است &copy;</small>
      </div>
      <div>
        enamad
        
      </div>
    </footer>
  );
}
