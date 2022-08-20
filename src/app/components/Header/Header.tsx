import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { menus } from "../../../utils/constants/menuRoutes.constants";

import "./header.scss";

function Header() {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className=" header" sticky="top">
      <Container className="container">
        <Navbar.Brand className="header-brand">Top-Stories</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="ms-auto" justify>
            {menus.map((route) => (
              <Nav.Item key={"nav-" + route.path} className="flex-grow-1">
                <Nav.Link
                  className={clsx({
                    ["active"]: location.pathname == route.path,
                  })}
                  as={Link}
                  to={route.path}
                >
                  {route.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
