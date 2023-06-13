import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <h2>خدمات ما</h2>
        <div className="container services">
          <div className=" single-service">
            <h6>ساماندهی دانش موجود هنر و معماری</h6>
            <ul>
              <li>هستان‌شناسی</li>
              <li>بازنمایی تصویری داده</li>
              <li>توسعهٔ پایگاه‌های داده</li>
            </ul>
          </div>
          <div className=" single-service">
            <h6>مشاورهٔ پژوهشی</h6>
            <ul>
              <li>همراهی در یافتن منابع پژوهش</li>
              <li>همراهی در انتشار پژوهش</li>
              <li>انتشار نقد</li>
              <li>ایجاد پیوند میان کاربران با متخصصان</li>
            </ul>
          </div>
          <div className=" single-service">
            <h6>آموزش</h6>
            <ul>
              <li>آموزش نظام‌های ساماندهی دانش</li>
              <li>دوره‌های کوتاه‌مدت و بلندمدت</li>
              <li>عرضهٔ بسته‌های دانشی</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
