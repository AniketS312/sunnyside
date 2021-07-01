import React from 'react';
import Image from '../templates/Image'
import Text from '../templates/Text'
import './SectionTwo.css';

import Background from '../images/desktop/image-transform.jpg'

function SectionTwo() {
  console.log(Background)
  return  (
    <section className="section section-two">
      <Text 
        heading="Transform Your Brand"
        text="We are a full Service creative agency specalizing in helping brands grow fast. Engage your clients thorugh copelling visuals that do most of the marketing for you."
        color='yellow'
      />
      <Image image={Background}/>
    </section>
  )
}

// Section 2 components will import from templates as they share designs with other Section
export default SectionTwo;