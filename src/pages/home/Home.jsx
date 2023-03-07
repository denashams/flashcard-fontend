import React from "react";
import Slider from "../../components/header-slider/Slider";
import facade from "../../assets/facade.jpg";
import { MdKeyboardVoice } from "react-icons/md";
import Slider3d from "../../components/slider3d/Slider3d";

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
      <div >
        <h2 className="mt-5">فلش کارت</h2>
        <section>
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
      <h2 className="mt-5">پادکست</h2>
      <section>
        <div className="container mt-4">
          
              <p className="podcast-description">
                مان‌ها و دیگر سازه‌های کالبدی است. معماری و دیگر رشته‌های علمی
                طراحی در پیوند با آن، مانند طراحی شهری، معماری منظر، طراحی داخلی
                و … در کنار هم، طراحی محیط را به‌وجود می‌آورند. گستردگی و
                گوناگونی بوجودآمده در آثار معماری معاصر و ناسازگاری که گاهی،
                میان آنها دیده می‌شود؛
              </p>
            <div>
              <MdKeyboardVoice className="mic-icon" />
            </div>
            
              <button className="button-bold mt-4">ورود</button>
            
          
        </div>
      </section>
    </div>
  );
}
