import React from 'react';
import RedSlider from './RedSlider';
import GreenSlider from './GreenSlider';
import BlueSlider from './BlueSlider';

export default class SliderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  updateRed() {
    
  }

  render() {
    return (
      <div>
        <RedSlider onChange={() => this.props.onChange()}/>
        <GreenSlider />
        <BlueSlider />
      </div>
    );
  }

}