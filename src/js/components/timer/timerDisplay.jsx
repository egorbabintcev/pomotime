import React, { Component } from 'react';

class TimerDisplay extends Component {
  render() {
    const formattedTime = `${this.props.minLeft} : ${this.props.secLeft}`;
    let formattedCycle;
    const cycle = this.props.cycle;
    if (cycle === 'work') {
      formattedCycle = "Time to work!";
    } else if (cycle === 'shortbreak') {
      formattedCycle = "Take a little break)";
    } else {
      formattedCycle = "Time for good chill!";
    }

    return (
      <div className="timer-display">
        <span className="timer-display__countdown">{formattedTime}</span>
        <span className="timer-display__cycle">{formattedCycle}</span>
      </div>
    )
  }
}

export default TimerDisplay;
