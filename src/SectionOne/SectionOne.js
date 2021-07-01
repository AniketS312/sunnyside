import React from  'react';
import Menu from './_Menu';

import {ReactComponent as ArrowDown} from '../images/icon-arrow-down.svg';
import './SectionOne.css'

function CenterText() {
  return (
    <div className="center-text">
     <h1 className='primary uppercase'>We Are Creatives</h1>
     <ArrowDown />
    </div>
  )
}

function SectionOne() {
  return (
    <div className="section section-one">
      <Menu />
      <CenterText />
    </div>

  )
}



export default SectionOne;