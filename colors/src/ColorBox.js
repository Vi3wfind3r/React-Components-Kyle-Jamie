import React from 'react';

export default function ColorBox(props) {

  function setColor(props) {
    // return 'rgb(255,0,255)';
  }
  
  return (
    <div className="colorBox" style={setColor()}></div>
  );
}