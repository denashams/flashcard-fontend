import React from "react";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <h3>ورود به حساب</h3>
      <div className="form-container">
      <Form>
        <Form.Group className="mb-3 " controlId="formUsername">
          <Form.Label>نام کاربری</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>رمز عبور</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      </div>
      <a href="/" className="d-flex justify-content-center forget-password">رمز عبور را فراموش کرده‌ام</a>
      <button>ورود</button>

      <span className="signup-links">
        <NavLink to="/signup">ساختن حساب کاربری</NavLink>
        <p >حساب کاربری ندارید؟</p>
      </span>
    </div>
  );
}
