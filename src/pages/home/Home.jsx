import React from "react";
import Slider from "../../components/header-slider/Slider";
import Slider3d from "../../components/slider3d/Slider3d";
import MobileNav from "../../components/mobile-navbar/MobileNav";
import { NavLink } from "react-router-dom";

import "./Home.css";
import AudioCard from "../../components/audio-card/AudioCard";

export default function Home() {
  return (
    <div className="home">
      <MobileNav />
      <div className="page-title">
        <h1>خدمات آموزشی</h1>
      </div>
      <div>
        <Slider />
      </div>

      <section id="contentcard" className="contentcard">
        <div className="container  mt-5">
          <h2>محتوای متنی</h2>
          <div className="content-container">
            <div className="row">
              <div className="col-lg item squares-container">
                <div>
                  <div className="square blue-square"></div>
                  <div className="square"></div>
                  <div className="square"></div>
                </div>
                <div>
                  <div className="square "></div>
                  <div className="square blue-square"></div>
                  <div className="square"></div>
                </div>
                <div>
                  <div className="square"></div>
                  <div className="square"></div>
                  <div className="square blue-square"></div>
                </div>
              </div>
              <div className="col-lg item pe-4">
                <p>
                  معماری (مهرازی، والادگری یا رازیگری)، شیوه طراحی و روش ساخت و
                  ساز ساختمان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر
                  رشته‌های علمی طراحی در پیوند با آن، مانند طراحی شهری، معماری
                  منظر، طراحی داخلی و … در کنار هم، طراحی محیط را به‌وجود
                  می‌آورند. گستردگی و گوناگونی بوجودآمده در آثار معماری معاصر و
                  ناسازگاری که گاهی، میان آنها دیده می‌شود؛ نشان از گم‌شدگی
                  تعریف روشن معماری، در صد سال گذشته دارد
                </p>
                <button className="button-oulined ms-auto">
                  <NavLink to="content-card"> اطلاعات بیشتر و ورود</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section id="imagecard">
          <div className=" mt-5 container">
            <h2 className="mb-4 text-center">یادبرگ</h2>
            <p className="mb-5 text-center">
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
          <button className="button-oulined mx-auto mt-4">
            <NavLink to="image-card">اطلاعات بیشتر و ورود</NavLink>
          </button>
        </section>
      </div>
      <section id="podcast">
        <div className="container">
          <h2 className="mt-5 mb-4 text-center">پادکست</h2>
          <p>
            مان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر رشته‌های علمی طراحی
            در پیوند با آن، مانند طراحی شهری، معماری منظر، طراحی داخلی و … در
            کنار هم، طراحی محیط را به‌وجود می‌آورند. گستردگی و گوناگونی
            بوجودآمده در آثار معماری معاصر و ناسازگاری که گاهی، میان آنها دیده
            می‌شود؛
          </p>
          <div className="mt-5">
            <AudioCard />
          </div>
          <button className="button-oulined mx-auto mt-4">
            <NavLink to="podcast">اطلاعات بیشتر و ورود</NavLink>
          </button>
        </div>
      </section>
    </div>
  );
}
