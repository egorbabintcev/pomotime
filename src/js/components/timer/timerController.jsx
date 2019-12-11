import React, { Component } from 'react';

class TimerController extends Component {
  render() {
    return (
      <div className="timer-controller">
        <button className="timer-controller__button" onClick={this.props.decTime}>-</button>
        <span className="timer-controller__time">{this.props.time}</span>
        <button className="timer-controller__button" onClick={this.props.incTime}>+</button>
      </div>
    )    
  }
}

export default TimerController;
