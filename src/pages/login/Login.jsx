import React, { useState } from "react";

import "./Login.css";

export default function Login() {
  const [addClass, setAddClass] = useState("");

  return (
    <div className="Login">
    <div className={`logincontainer ${addClass}`} id="loginContainer">
      <div className="form-container signup-container">
        <form>
          <h2>ساختن حساب کاربری</h2>
          <input type="text" placeholder="نام" />
          <input type="email" placeholder="ایمیل" />
          <input type="password" placeholder="گذرواژه" />
          <input type="button" value="ثبت نام" className="signup-btn" />
        </form>
      </div>
      <div className="form-container signin-container">
        <form>
          <h2>ورود به حساب کاربری</h2>
          <input type="text" id="username" placeholder="نام کاربری" />
          <input type="password" placeholder="گذرواژه" />
          <input type="button" value="ورود" className="signin-btn"/>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              id="signIn"
              onClick={() => setAddClass("")}
            >
              وارد شوید
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              id="signUp"
              onClick={() => setAddClass("right-panel-active")}
            >
              عضو شوید
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
