import { React, useState } from "react";
import { NavLink } from "react-router-dom";

import "./projects.css";
// import network from "../../../assets/network.png";
import garden from "../../../assets/garden.jpg";
import projects from "../../../assets/projects.jpg";
import landscape from "../../../assets/landscape.jpg";
import pirnia from "../../../assets/pirnia.jpg";
import architecture from "../../../assets/architecture.jpg";

import page from "../../../assets/page.jpg";
import note from "../../../assets/note.jpg";
import { BiNetworkChart } from "react-icons/bi";
import { TbBinaryTree } from "react-icons/tb";
import { IoIosGitNetwork } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";

const data = [
  {
    id: "1",
    key: "1",
    title: "پروژه‌های ما",
    text: "با پروژه‌های ما بیشتر آشنا شوید",
    img: projects,
  },
  {
    id: "2",
    key: "2",
    title: "هستان‌شناسی تاریخ معماری ایران",
    text: "در این پروژه شبکه‌ای از مفاهیم مورد استفاده در هنگام گفتگو در باب بناهای تاریخی ایران و پیوندهای میان این مفاهیم ترسیم شده است. مبنای انتخاب مفاهیم و پیوندهای میان آن، گفتار و نوشتار چهار دانشور شاخص تاریخ معماری ایران، محمدکریم پیرنیا، باقر آیت‌الهه‌زاده شیرازی، ایرج افشار، محمدتقی مصطفوی است ",
    img: architecture,
  },
  {
    id: "3",
    key: "3",
    title: "هستان‌شناسی باغ ایرانی",
    text: "در این پروژه شبکه‌ای از پیوندهای میان عناصر و اجزای معماری باغ‌های ایران بر مبنای پژوهش دونالد ویلبر (باغ‌های ایران و کوشک‌های آن) عرضه شده است. مفاهیم استخراج‌شده از این پژوهش به کمک مرجع مفهومی سی‌داک بازنمایی شده و به صورت مدلی چندلایه با قابلیت جستجوهای مفهومی در اختیار کاربران قرار می‌گیرد.  ",
    img: garden,
  },
  {
    id: "4",
    key: "4",
    title: "هستان‌شناسی تاریخ معماری منظر",
    text: "در این پروژه شبکه‌ای از پیوندهای میان مفاهیم به کار رفته هنگام توصیف معماری منظر در مراجع اصلی این حوزه عرضه شده است. مفاهیم استخراج‌شده از مراجع به کمک مرجع مفهومی سی‌داک بازنمایی شده و به صورت مدلی چندلایه با قابلیت جستجوهای مفهومی در اختیار کاربران قرار می‌گیرد.  ",
    img: landscape,
  },
  {
    id: "5",
    key: "5",
    title: "پایگاه پیرنیا",
    text: "در این پروژه، مجموعه‌ای از از نوشته‌ها، درسگفتارها، واژگان و اصطلاحات محمدکریم پیرنیا و هم‌چنین نقد و بررسی‌های انجام‌شده دربارهٔ آرای او گردآوری شده است. ",
    img: pirnia,
  },
  {
    id: "6",
    key: "6",
    title: "سینتوپیکون",
    text: "توضیح سینتوپیکون",
    img: page,
  },
  {
    id: "7",
    key: "7",
    title: "درس‌افزار",
    text: "توضیح درس‌افزار",
    img: note,
  },
];

const Projects = () => {
  const [info, setInfo] = useState("1");

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="row">
          <div className="col-4   ">
            {data.map(({ title, text, key, img }) => {
              return (
                <>
                  {info === key ? (
                    <div className="project-summary">
                      <div className="project-image">
                      <img src={img} key={key} alt="" loading="lazy" />
                      </div>
                      <div className="summary-box ">
                        <h2>{title}</h2>
                        <p>{text}</p>
                      </div>
                    </div>
                  ) : null}
                  =
                </>
              );
            })}
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
                    <NavLink to="coming-soon">ورود به پروژه</NavLink>
                  </button>
                  <button
                    className="summary-btn"
                    onClick={() => {
                      setInfo(data[1].key);
                    }}
                  >
                    مختصری درباهٔ پروژه
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project  ">
                  <span className="project-icon">
                    <TbBinaryTree />
                  </span>
                  <h6>هستان‌شناسی باغ ایرانی</h6>
                  <button className="go-to-project">
                    <NavLink to="coming-soon">ورود به صفحهٔ پروژه</NavLink>
                  </button>
                  <button
                    className="summary-btn"
                    onClick={() => {
                      setInfo(data[2].key);
                    }}
                  >
                    مختصری درباهٔ پروژه
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project border-0">
                  <span className="project-icon">
                    <IoIosGitNetwork />
                  </span>
                  <h6>هستان‌شناسی تاریخ معماری منظر</h6>
                  <button className="go-to-project">
                    <NavLink to="coming-soon">ورود به صفحهٔ پروژه</NavLink>
                  </button>
                  <button
                    className="summary-btn"
                    onClick={() => {
                      setInfo(data[3].key);
                    }}
                  >
                    مختصری درباهٔ پروژه
                  </button>
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
                    <NavLink to="coming-soon">ورود به صفحهٔ پروژه</NavLink>
                  </button>
                  <button
                    className="summary-btn"
                    onClick={() => {
                      setInfo(data[4].key);
                    }}
                  >
                    مختصری درباهٔ پروژه
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="single-project  ">
                  <span className="project-icon">
                    <BsReverseListColumnsReverse />
                  </span>
                  <h6>سینتوپیکون</h6>
                  <button className="go-to-project">
                    
                    <NavLink to="coming-soon">ورود به صفحهٔ پروژه</NavLink>
                  </button>
                  <button
                    className="summary-btn"
                    onClick={() => {
                      setInfo(data[5].key);
                    }}
                  >
                    مختصری درباهٔ پروژه
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
                    <NavLink to="/darsafzaar-home">ورود به صفحهٔ پروژه</NavLink>
                  </button>
                  <button
                    className="summary-btn"
                    onClick={() => {
                      setInfo(data[6].key);
                    }}
                  >
                    مختصری درباهٔ پروژه
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
