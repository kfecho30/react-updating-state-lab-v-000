import React from 'react';

export default class DigitalClicker extends React.Component{


  render(){
    return(
      <button>{this.state.timesClicked}</button>
    )
  }
}
