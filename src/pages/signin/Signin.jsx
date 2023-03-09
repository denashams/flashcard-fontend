import React from "react";
import "./Signin.css";

export default function Signin() {
  return (
    <div className="signin-container">
      <div >
        <ul className="nav">
          <li>
            <a href="/">ثبت نام</a>
          </li>
          <li>
            <a href="/">ورود</a>
          </li>
        </ul>
      </div>

      {/* sinin form */}

      <form className="form-signin" action="" method="post" name="form">
        <label for="username">نام کاربری</label>
        <input
          className="form-styling"
          type="text"
          name="username"
          placeholder="Enter unsername"
        />
        <label for="password">Password</label>
        <input
          className="form-styling"
          type="text"
          name="password"
          placeholder="Enter password"
        />
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">
          <span className="ui"></span>Keep me signed in
        </label>
        <div>
          <button>
            <a href="/">Sign in</a>
          </button>
        </div>
      </form>

      {/* signup form */}
      <form className="form-signup" action="" method="post" name="form">
        <label for="fullname">Full name</label>
        <input
          className="form-styling"
          type="text"
          name="fullname"
          placeholder=""
        />
        <label for="email">Email</label>
        <input
          className="form-styling"
          type="text"
          name="email"
          placeholder=""
        />
        <label for="password">Password</label>
        <input
          clasNames="form-styling"
          type="text"
          name="password"
          placeholder=""
        />
        <label for="confirmpassword">Confirm password</label>
        <input
          clasNames="form-styling"
          type="text"
          name="confirmpassword"
          placeholder=""
        />
        <a href="/" ng-click="checked = !checked" clasNames="btn-signup">
          Sign Up
        </a>
      </form>

      <div class="forgot">
        <a href="/">Forgot your password?</a>
      </div>
    </div>
  );
}
