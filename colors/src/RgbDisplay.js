import React from 'react';


export default function RgbDisplay(props) {
  return (
    <div>
      <p>{`rgb(${props.colors.red}, ${props.colors.green}, ${props.colors.blue})`}</p>
    </div>
  );
}
