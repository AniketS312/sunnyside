import React from "react";

import "./SectionSeven.css";
import Logo from "../images/logo.svg";
import Icons from "./_Icons";

function SectionSeven(props) {
  return (
    <section className="section section-seven">
      <div>
        <img alt="logo" src={Logo} />
        <FooterMenu />
        <Icons />
      </div>
    </section>
  );
}

function FooterMenu() {
  return (
    <div className="footer-menu">
      <ul className="menu-list">
        <li>
          <a href="about" className="menu-item">
            About
          </a>
        </li>
        <li>
          <a href="services" className="menu-item">
            Services
          </a>
        </li>
        <li>
          <a href="projects" className="menu-item">
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SectionSeven;
