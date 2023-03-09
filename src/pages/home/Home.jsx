import React from "react";
import Slider from "../../components/header-slider/Slider";
import facade from "../../assets/facade.jpg";
import Slider3d from "../../components/slider3d/Slider3d";
import MobileNav from "../../components/mobile-navbar/MobileNav";
import { NavLink } from "react-router-dom";


import "./Home.css";
import AudioCard from "../../components/audio-card/AudioCard";

export default function Home() {
  return (
    <div className="home">
      <div>
        <MobileNav />
      </div>
      <div className="header-slider">
        <Slider />
      </div>

      <section id="contentcard">
        <div className="container mt-5">
          <h2>محتوای متنی</h2>

          <div className="item-container mt-5 p-0">
            <div className="row">
              <div className="col-lg item">
                <img src={facade} alt="architecture" className="img-fluid" />
              </div>
              <div className="col-lg item">
                <p>
                  معماری (مهرازی، والادگری یا رازیگری)، شیوه طراحی و روش ساخت و
                  ساز ساختمان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر
                  رشته‌های علمی طراحی در پیوند با آن، مانند طراحی شهری، معماری
                  منظر، طراحی داخلی و … در کنار هم، طراحی محیط را به‌وجود
                  می‌آورند. گستردگی و گوناگونی بوجودآمده در آثار معماری معاصر و
                  ناسازگاری که گاهی، میان آنها دیده می‌شود؛ نشان از گم‌شدگی
                  تعریف روشن معماری، در صد سال گذشته دارد
                </p>
                <button className="button-bold">
                  <NavLink to="content-card"> ورود</NavLink>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section id="imagecard">
          <div className=" mt-5 container">
            <h2 className="mb-4">فلش کارت</h2>
            <p className="flashcard-description mb-5">
              مان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر رشته‌های علمی
              طراحی در پیوند با آن، مانند طراحی شهری، معماری منظر، طراحی داخلی و
              … در کنار هم، طراحی محیط را به‌وجود می‌آورند. گستردگی و گوناگونی
              بوجودآمده در آثار معماری معاصر و ناسازگاری که گاهی، میان آنها دیده
              گستردگی و گوناگونی بوجودآمده در آثار معماری معاصر و ناسازگاری که
              گاهی، میان آنها دیده می‌شود؛
            </p>
          </div>

          <div className="mt-5 mb-5">
            <Slider3d />
          </div>
          <button className="button-bold mt-4">
            <NavLink to="image-card">ورود</NavLink>
          </button>
        </section>
      </div>
      <section id="podcast">
        <div className="container">
        <h2 className="mt-5 mb-4">پادکست</h2>
          <p className="podcast-description">
            مان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر رشته‌های علمی طراحی
            در پیوند با آن، مانند طراحی شهری، معماری منظر، طراحی داخلی و … در
            کنار هم، طراحی محیط را به‌وجود می‌آورند. گستردگی و گوناگونی
            بوجودآمده در آثار معماری معاصر و ناسازگاری که گاهی، میان آنها دیده
            می‌شود؛
          </p>
          <div className="mt-5">
          <AudioCard />
          </div>
          <button className="button-bold mt-4">
            <NavLink to="podcast">ورود</NavLink>
          </button>
        </div>
      </section>
    </div>
  );
}
