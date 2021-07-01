import React from 'react';
import './Text.css'

function Text(props) {
  return (
    <div className="text-template">
      <div className="text">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <button className="{props.color}" href="#">Learn More</button>
      </div>
    </div>
  )
}

export default Text;