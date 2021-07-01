import React from 'react';

import './Image.css'

class Image extends React.Component {
  render() {
    const style = {
      backgroundImage: "url("+this.props.image+")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }
  
    return <div className="image-template" style={style}>
        <div className="text">
          <h3 className="primary">{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
    </div>
    
  }
}

 export default Image;