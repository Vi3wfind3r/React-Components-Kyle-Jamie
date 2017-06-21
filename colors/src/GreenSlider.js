import React from 'react';

export default function GreenSlider(props) {
  return (
    <div className="blueSlider">
      <input type="range" min="0" max="255" step="1" value="0" onChange={e => props.onChange(e.target.value)}/>
    </div>
  );
}