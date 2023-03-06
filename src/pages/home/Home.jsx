import React from "react";
import Slider from "../../components/header-slider/Slider";
import facade from "../../assets/facade.jpg";
import StackedCards from "../../components/stacked-cards/StackedCards";
import { MdKeyboardVoice } from "react-icons/md";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="header-slider">
        <Slider />
      </div>
      <h2 className="mt-5">محتوای متنی</h2>
      <section>
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
      <h2 className="mt-5">فلش کارت</h2>
      <section>
        <div className="container item-container mt-5 p-5">
          <div className="row">
            <div className="col-md item">
              <p>
                مان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر رشته‌های علمی
                طراحی در پیوند با آن، مانند طراحی شهری، معماری منظر، طراحی داخلی
                و … در کنار هم، طراحی محیط را به‌وجود می‌آورند. گستردگی و
                گوناگونی بوجودآمده در آثار معماری معاصر و ناسازگاری که گاهی،
                میان آنها دیده می‌شود؛
              </p>
              <button className="button-bold mt-4">ورود</button>
            </div>
            <div className="col-md ">
              <StackedCards />
            </div>
          </div>
        </div>
      </section>
      <h2 className="mt-5">پادکست</h2>
      <section>
        <div className="container item-container mt-5 p-5">
          <div className="row">
            <div className="col-md">
              <MdKeyboardVoice className="mic-icon" />
            </div>
            <div className="col-md item ">
              <p>
                مان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر رشته‌های علمی
                طراحی در پیوند با آن، مانند طراحی شهری، معماری منظر، طراحی داخلی
                و … در کنار هم، طراحی محیط را به‌وجود می‌آورند. گستردگی و
                گوناگونی بوجودآمده در آثار معماری معاصر و ناسازگاری که گاهی،
                میان آنها دیده می‌شود؛
              </p>
              <button className="button-bold mt-4">ورود</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
