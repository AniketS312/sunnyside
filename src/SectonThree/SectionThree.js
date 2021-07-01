import React from 'react';
import Image from '../templates/Image'
import Text from '../templates/Text'
import './SectionThree.css';

import SectionTwoImage from '../images/desktop/image-stand-out.jpg'

function SectionThree() {
  return  (
    <section className="section section-three">
      <Image image={SectionTwoImage}/>
      <Text 
        heading="Transform Your Brand"
        text="We are a full Service creative agency specalizing in helping brands grow fast. Engage your clients thorugh copelling visuals that do most of the marketing for you."
        color='yellow'
      />
    </section>
  )
}

export default SectionThree;