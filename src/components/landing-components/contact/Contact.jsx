import React from "react";
import "./contact.css";
import { HiOutlineHome } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="container coontact">
          <h2>تماس با ما</h2>
          <div>
            <div className="row">
              <div className="col-lg-7 message-box">
                <form action="">
                  <input
                    className="input-box"
                    type="text"
                    name="name"
                    placeholder="نام و نام خانوادگی شما"
                    required
                  />
                  <input
                    className="input-box"
                    type="email"
                    name="email"
                    placeholder="ایمیل شما"
                    required
                  />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="پیامتان را اینجا بنویسید"
                    className="input-box"
                    required
                  ></textarea>
                  <button type="submit" className="msg-btn">
                    ارسال پیام
                  </button>
                </form>
              </div>
              <div className="col-lg-5 contact-options">
                <div className="contact-optionBox">
                  <div className="contact-address">
                    تهران، ولنجک، میدان شهید شهریاری، بلوار دانشجو، دانشگاه شهید بهشتی، دانشکدهٔ معماری و شهرسازی، مرکز نوآوری
                  </div>
                  <div className="contact-icon">
                    <a
                      href="https://goo.gl/maps/zNyxAxjTnk2LsvAh6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <HiOutlineHome />
                    </a>
                  </div>
                </div>
                <div className="contact-optionBox">
                  <div className="contact-detail ">(+۹۸) ۰۲۱-۲۹۹۰۲۸۷۰</div>
                  <div className="contact-icon">
                    <a href="tel:+982129902870">
                      <BsTelephone />{" "}
                    </a>
                  </div>
                </div>
                <div className="contact-optionBox">
                  <div className="contact-detail">info@matnavis.com</div>
                  <div className="contact-icon">
                    <a href="mailto:info@matnavis.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
