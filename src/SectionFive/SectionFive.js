import React from 'react';

import './SectionFive.css'

import PersonOne from '../images/image-thomas.jpg'
import PersonTwo from '../images/image-jennie.jpg'
import PersonThree from '../images/image-emily.jpg'


function SectionFive() {
  return (
    <section className="section section-five">
      <div className="title">
        <h4>Client Testmonials</h4>
      </div>
      <div className="testimonials">
      <Testimonials
        image={PersonOne}
        client="Thomas"
        comment="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        name="Emily R."
        title="Marketing Director"
      />
      <Testimonials
        image={PersonTwo}
        client="Thomas"
        comment="We put out trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        name="Emily R."
        title="Marketing Director"
      />
      <Testimonials
        image={PersonThree}
        client="Thomas"
        comment="We put out trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        name="Emily R."
        title="Marketing Director"
      />
      </div>
    </section>
  )
}

function Testimonials(props) {
  return (
    <div className="testimonial">
      <img src={props.image} alt={props.client}/>
      <p className="comment">{props.comment}</p>
      <div className="client">
        <h5 className="primary">{props.name}</h5>
        <h6>{props.title}</h6>
      </div>
    </div>
  )
}

export default SectionFive;