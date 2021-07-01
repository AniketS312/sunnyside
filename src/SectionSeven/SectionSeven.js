import React from 'react';

import './SectionSeven.css';
import Logo from '../images/logo.svg'

function SectionSeven(props) {
  return (
    <section className="section section-seven">
      <img alt='logo' src={Logo} />
      <footerMenu />
      <footerIcons />
    </section>
  )
}

function footerMenu() {
  return (
    <div className="footer-menu"> 
      <ul className='menu-list'>
        <li><a href="about" className="menu-item">About</a></li>
        <li><a href="services" className="menu-item">Services</a></li>
        <li><a href="projects" className="menu-item">Projects</a></li>
      </ul>
    </div>
  )
  }

  function footerIcons() {
    return (
      <div className="footer-icons"> 
        <ul className='icon-list'>
          <li><a href="about" className="menu-item">About</a></li>
          <li><a href="services" className="menu-item">Services</a></li>
          <li><a href="projects" className="menu-item">Projects</a></li>
        </ul>
      </div>
    )
    }



export default SectionSeven;