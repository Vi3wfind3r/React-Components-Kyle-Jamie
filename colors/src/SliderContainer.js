import React from 'react';
import RedSlider from './RedSlider';
import GreenSlider from './GreenSlider';
import BlueSlider from './BlueSlider';

export default class SliderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  setSliderColors(color, value) {
    this.props.updateColors({[color]: Number(value)});
  }

  render() {
    return (
      <div className='slider-container'>
        <RedSlider onChange={v => this.setSliderColors('red', v)} sliderValue={this.props.sliderValues.red}/>
        <GreenSlider onChange={v => this.setSliderColors('green', v)} sliderValue={this.props.sliderValues.green}/>
        <BlueSlider onChange={v => this.setSliderColors('blue', v)} sliderValue={this.props.sliderValues.blue}/>
      </div>
    );
  }
}