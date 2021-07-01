import React from 'react';

import Image from '../templates/Image'
import './SectionSix.css';

import GalleryOne from '../images/desktop/image-gallery-sugarcubes.jpg'
import GalleryTwo from '../images/desktop/image-gallery-milkbottles.jpg'
import GalleryThree from '../images/desktop/image-gallery-orange.jpg'
import GalleryFour from '../images/desktop/image-gallery-cone.jpg'

function SectionSix() {
  return (
  <section className="section section-six">
    <Image image={GalleryOne}/>
    <Image image={GalleryTwo}/>
    <Image image={GalleryThree}/>
    <Image image={GalleryFour}/>
 </section>
  )
}



export default SectionSix;