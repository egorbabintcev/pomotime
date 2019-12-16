import React, { Component } from 'react';

class TimerDisplay extends Component {
  render() {    
    const formattedTime = `${this.props.minLeft} : ${this.props.secLeft}`;
    return (
      <div className="timer-display">
        <span className="timer-display__countdown">{formattedTime}</span>   
        <span className="timer-display__cycle">{this.props.cycle}</span>     
      </div>
    )
  }
}

export default TimerDisplay;
