import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-scroll";


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const HandleScroll = () => {
    if (window.scrollY >= 60) {
      document.getElementById("Navbar")?.classList.add("darkHeader");
    } else document.getElementById("Navbar")?.classList.remove("darkHeader");
  };

  window.addEventListener("scroll", HandleScroll);

  return (
    <Navbar
      id="Navbar"
      className="navbar navbar-expand-lg navbar-light theme-nav fixed-top"
    >
      <div id="navbar-main" className="container">
        <NavbarBrand
          className="navbar-brand"
          href={`/`}
        >
          <img src={`/assets/images/logo.png`} width="45" height="45" alt="logo" />
        </NavbarBrand>
        <NavbarToggler className="navbar-toggler" onClick={toggle} />
        <Collapse
          id="navbarSupportedContent"
          className="default-nav"
          isOpen={isOpen}
          navbar
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
                active="true"
              >
                home
              </Link>
            </NavItem>
            <NavItem>
            <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                about
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
