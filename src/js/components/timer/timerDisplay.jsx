import React, { Component } from 'react';

class TimerDisplay extends Component {
  render() {
    return (
      <div className="timer-display">
        <span className="timer-display__countdown">{this.props.time}</span>        
      </div>
    )
  }
}

export default TimerDisplay;
