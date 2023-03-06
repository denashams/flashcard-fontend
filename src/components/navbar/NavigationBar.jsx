import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./NavigationBar.css"


export default function NavigationBar() {
  return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="justify-content-start">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Matn Avis logo"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link><NavLink to="guide">راهنما</NavLink></Nav.Link>
            <Nav.Link><NavLink to="signin">ورود</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/">خانه</NavLink></Nav.Link>
            

          </Nav>
        </Container>
      </Navbar>
  );
}
