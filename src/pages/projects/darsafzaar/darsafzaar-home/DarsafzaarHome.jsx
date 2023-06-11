import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "../../../../components/header-slider/Slider";
import Slider3d from "../../../../components/slider3d/Slider3d";
import MobileNav from "../../../../components/mobile-navbar/MobileNav";
import AudioCard from "../../../../components/audio-card/AudioCard";

import "./DarsafzaarHome.css";

export default function DarsafzaarHome() {
  return (
    <div>
      <div className="darsafzaar-home">
        <MobileNav />
        <div className="page-title">
          <h1>درس‌افزار</h1>
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
                    ما در محتوای متنی بر آنیم مسائلی را مطرح کنیم که درباره
                    آن‌ها روایت‌هایی وجود دارد و می‌توانند بحثی را آغاز کنند.
                    مباحث تاریخ معماری شامل کلمات عناوین و مفاهیمی هستند که
                    تابعی از تحلیل‌های انسانی است. در این‌جا، ما تحلیل‌های در
                    مورد تاریخ هنر و معماری اقوام و ملت‌ها داریم. در این
                    تحلیل‌ها جوانب مختلفی مثل زمان، مکان، جغرافیا و ... مورد
                    بررسی قرار خواهند گرفت. در تحلیل‌های مربوط به برسی آثار هنر
                    و معماری سوالاتی برای ما به‌وجود می‌آید که می‌تواند؛ سوالات
                    یک پژوهش باشد. برای مثال آیا همزمانی ساخت محوری که در
                    Alameda de Hércules دو طرفش درخت‌کاری و با دو ستون نشانه
                    گذاری شده است با ساخت چهار باغ و محور های درخت کاری شده اش
                    تاثیری در آرایش شکل گیری هر یک از این فضاها داشته است؟
                  </p>
                  <button className="button-oulined ms-auto">
                    <NavLink to="/coming-soon"> اطلاعات بیشتر و ورود</NavLink>
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
                خدمات ما در بخش یادبرگ شامل طیفی از موضوعات مربوط به تاریخ
                معماری؛ منظر و شهر سازی است که مبتنی بر محتوای تصویری هستند. یاد
                برگ کارتی است؛ مانند یک بازی که مطالب در دو طرف آن نوشته شده و
                کمک موکند موضوعات و تصاویر سریعتر و بهتر از یادگیری معمولی در
                حافظه بلند مدت جا گیر شوند.
              </p>
            </div>

            <div className="mt-5 mb-5">
              <Slider3d />
            </div>
            <button className="button-oulined mx-auto mt-4">
              <NavLink to="/coming-soon">اطلاعات بیشتر و ورود</NavLink>
            </button>
          </section>
        </div>
        <section id="podcast">
          <div className="container">
            <h2 className="mt-5 mb-4 text-center">پادکست</h2>
            <p>
              
            </p>
            <div className="mt-5">
              <AudioCard />
            </div>
            <button className="button-oulined mx-auto mt-4">
              <NavLink to="/coming-soon">اطلاعات بیشتر و ورود</NavLink>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
