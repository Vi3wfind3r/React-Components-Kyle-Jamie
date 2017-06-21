import React from 'react';

export default function ColorBox(props) {

  const styleObj = {
    backgroundColor: `rgb(${props.colors.red}, ${props.colors.green}, ${props.colors.blue})`,
  }
  
  return (
    <div className="colorBox" style={styleObj}>

    </div>
  );
}