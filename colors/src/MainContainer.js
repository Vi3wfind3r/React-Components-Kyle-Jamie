import React from 'react';
import SliderContainer from './SliderContainer';

export default class MainContainer extends React.Component {
  constructor() {
    super();
    this.state={
      red: 0,
      green: 0,
      blue: 0
    }
  }

  

  render() {
    return (
      <div>
        <h1>This is working!</h1>
      </div>
      );
  }

}




