import React from "react";
import "./about.css";
import vosouq from "../../../assets/vosouq.jpg";
import razavi from "../../../assets/razavi.jpg";
import shamsizadeh from "../../../assets/shamsizadeh.jpg";
import sinaiyan from "../../../assets/sinaiyan.jpg";
import mirmohamadi from "../../../assets/mirmohamadi.jpg";
import baqeri from "../../../assets/baqeri.jpg";

// import { BsAwardFill } from "react-icons/bs";
// import { HiUserGroup } from "react-icons/hi";
// import { SiBookstack } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="container">
          <div className="row ">
            <div className="col ">
              <div className="team-images">
                <div class="flip-3d">
                  <figure>
                    <img src={razavi} alt="Niloofar Razavi" />
                    <figcaption>نیلوفر رضوی</figcaption>
                  </figure>
                </div>

                <div class="flip-3d">
                  <figure>
                    <img src={vosouq} alt="Elahe Vosouq" />
                    <figcaption>الهه وثوق</figcaption>
                  </figure>
                </div>

                <div class="flip-3d">
                  <figure>
                    <img src={shamsizadeh} alt="Dena Shamsizadeh" />
                    <figcaption>دنا شمسی‌زاده</figcaption>
                  </figure>
                </div>
              </div>
              <div className="team-images">
                <div class="flip-3d">
                  <figure>
                    <img src={sinaiyan} alt="Paria Sinaiyan" />
                    <figcaption>پریا سینائیان</figcaption>
                  </figure>
                </div>
                <div class="flip-3d">
                  <figure>
                    <img src={mirmohamadi} alt="Nina Mirmohammadi" />
                    <figcaption>نینا میرمحمدی</figcaption>
                  </figure>
                </div>
              </div>
              <div className="team-images">
                <div class="flip-3d">
                  <figure>
                    <img src={baqeri} alt="Mahsa Baqeri" />
                    <figcaption>مهسا باقری</figcaption>
                  </figure>
                </div>
                
              </div>
            </div>
            <div className="col about-description">
              <h2>دربارهٔ ما</h2>
              <p>
                مان تحقیق و نظر آویس (متن آویس)، از سال ۱۴۰۱ با هدف سازماندهی و
                فراهم کردن دسترسی آسان به محتوای پیچیدۀ متنی در حوزه تاریخ و
                تئوری معماری و هنر تأسیس شد. تاریخ و تئوری در این حوزه، اعم از
                معماری، شهرسازی، معماری منظر و حتی درک عمومی هنر مربوط به این
                حوزه‌های تخصصی، عمیقاً متکی به مجموعه‌های دانشی مفصلی هستند که
                بیشتردر قالب کتب مرجع تنظیم شده‌ا ند و با الگوهای چابک جستجوی در
                مقالات که امروز در دسترس هستند همخوانی ندارند. گروه بینانگذاران
                متن آویس، و با همکاری پژوهشگران ثابت و پاره‌وقت، از طریق
                ساماندهی محتوای مفصل و غنی این حوزه‌های اندیشه را با تکیه بر
                تجارب پژوهشی از یک دهه پیش آغاز کرده و هم‌اکنون به مرحله اتصال
                با مخاطبین پژوهشگر رسیده است. تاکنون ساماندهی مباحث مشخصی در این
                حوزه با ایجاد شبکه معنائی (Semantic Network) در قالب هستان‌شناسی
                (Ontology)، و سینتوپیکون (Syntopicon) انجام شده و تقویم توسعه
                مفاهیم از یک سو با توجه به محورهای موضوعی تعیین شده از سوی کمیتۀ
                علمی مجموعه، و از سوی دیگر در پاسخ به نیازهای پژوهشی مخاطبین طرح
                و برنامه‌ریزی می‌شود.
              </p>
              {/* <ul className="about-summarybox">
                <li>
                  <HiUserGroup />
                  <p>کاربر</p>
                  <p>+ ۲۰۰</p>
                </li>
                <li>
                  <BsAwardFill />
                  <p>تجربه</p>
                  <p>+ ۵ سال</p>
                </li>
                <li>
                  <SiBookstack />
                  <p>پروژه</p>
                  <p>+ ۲۰</p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
