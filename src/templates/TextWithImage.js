import React from 'react';

import Image from './Image'
import './TextWithImage.css'

import SectionFourImageOne from '../images/desktop/image-stand-out.jpg'


function TextWithImage(props) {
  return (
    <div>
           <Image image={SectionFourImageOne}>
             
            </Image>

    </div>
  )
}