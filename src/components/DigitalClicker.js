import React from 'react';

export default class DigitalClicker extends React.Component{


  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
