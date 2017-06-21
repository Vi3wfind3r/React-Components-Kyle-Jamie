import React from 'react';

export default function RedSlider(props) {
  return (
    <input type="range" min="0" max="255" step="1" onChange={e => props.onChange(e.target.value)}/>
  );
}