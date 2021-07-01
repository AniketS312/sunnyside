import React from 'react';
import Image from '../templates/Image'
import './SectionFour.css'
import SectionFourImageOne from '../images/desktop/image-graphic-design.jpg'
import SectionFourImageTwo from '../images/desktop/image-photography.jpg'


function SectionFour() {
  return (
    <section className="section section-four">
      <Image 
        image={SectionFourImageOne}
        title="Graphic Design"
        content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
      ></Image>
      <Image 
        image={SectionFourImageTwo}
        title="Graphic Design"
        content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
      ></Image>
    </section>
  )
}

export default SectionFour;