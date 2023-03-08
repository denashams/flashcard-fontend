import React from "react";
import Slider from "../../components/header-slider/Slider";
import facade from "../../assets/facade.jpg";
import Slider3d from "../../components/slider3d/Slider3d";
import MobileNav from "../../components/mobile-navbar/MobileNav";


import "./Home.css";
import AudioCard from "../../components/audio-card/AudioCard";

export default function Home() {
  return (
    <div className="home">
      <div className="header-slider">
        <Slider />
      </div>
        <div>
      <MobileNav/>
      </div>

      <section id="contentcard">
      <h2 className="mt-5">محتوای متنی</h2>
        <div className="container item-container p-0 mt-5">
          <div className="row">
            <div className="col-md item">
              <img src={facade} alt="architecture" />
            </div>
            <div className="col-md item">
              <p>
                معماری (مهرازی، والادگری یا رازیگری)، شیوه طراحی و روش ساخت و
                ساز ساختمان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر
                رشته‌های علمی طراحی در پیوند با آن، مانند طراحی شهری، معماری
                منظر، طراحی داخلی و … در کنار هم، طراحی محیط را به‌وجود
                می‌آورند. گستردگی و گوناگونی بوجودآمده در آثار معماری معاصر و
                ناسازگاری که گاهی، میان آنها دیده می‌شود؛ نشان از گم‌شدگی تعریف
                روشن معماری، در صد سال گذشته دارد
              </p>
              <button className="button-bold mt-4">ورود</button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section id="imagecard">
        <h2 className="mt-5">فلش کارت</h2>
          <div className=" mt-4 container">
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
          <button className="button-bold mt-4">ورود</button>
        </section>
      </div>
      <section id="podcast">
      <h2 className="mt-5">پادکست</h2>
        <div className="container mt-4">
          <p className="podcast-description">
            مان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر رشته‌های علمی طراحی
            در پیوند با آن، مانند طراحی شهری، معماری منظر، طراحی داخلی و … در
            کنار هم، طراحی محیط را به‌وجود می‌آورند. گستردگی و گوناگونی
            بوجودآمده در آثار معماری معاصر و ناسازگاری که گاهی، میان آنها دیده
            می‌شود؛
          </p>
          <AudioCard />
          <button className="button-bold mt-4">ورود</button>
        </div>
      </section>
    </div>
  );
}
