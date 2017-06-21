import React from 'react';

export default function RedSlider(props) {
  return (
    <div className="slider redSlider">
      <input type="range" min="0" max="255" step="1" value={props.sliderValue} onChange={e => props.onChange(e.target.value)}/>
    </div>
  );
}