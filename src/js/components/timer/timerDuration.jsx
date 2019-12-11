import React, { Component } from 'react';

class TimerDuration extends Component {
  render() {
    return (
      <div className="timer-duration">
        <button className="timer-duration__button" onClick={this.props.decrementTime}>-</button>
        <span className="timer-duration__time">{this.props.time}</span>
        <button className="timer-duration__button" onClick={this.props.incrementTime}>+</button>
      </div>      
    )
  }
}

export default TimerDuration;
