import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavigationBar.css";

//bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


export default function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar navbar-light bg-light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} width="40" height="40" alt="Matn Avis logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="یادبرگ‌ها" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="content-card" className="d-flex justify-content-end">متن‌برگ</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="image-card" className="d-flex justify-content-end">تصویربرگ</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="podcast" className="d-flex justify-content-end">پادکست</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/" className="d-flex justify-content-end">لینک</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="guide" >راهنما</Nav.Link>
            <Nav.Link as={NavLink} to="login">ورود | ثبت نام</Nav.Link>
            <Nav.Link as={NavLink} to="/">خانه</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
