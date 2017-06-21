import React from 'react';

export default function ColorBox(props) {

  const styleObj = {
    backgroundColor: `rgb(${props.colors.red}, ${props.colors.green}, ${props.colors.blue})`,
    height: '200px',
    width: '200px'
  }
  
  return (
    <div className="colorBox" style={styleObj}>

    </div>
  );
}