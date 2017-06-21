import React from 'react';
import SliderContainer from './SliderContainer';
import ColorBox from './ColorBox';
import RgbDisplay from'./RgbDisplay';

export default class MainContainer extends React.Component {
  constructor() {
    super();
    this.state={
      red: 0,
      green: 0,
      blue: 0
    };
  }
  
  render() {
    return (
      <div className='container'>
        <RgbDisplay colors={this.state}/>
        <SliderContainer updateColors={(value) => this.setState(value)} sliderValues={this.state}/>
        <ColorBox colors={this.state}/>
      </div>
      );
  }
}




