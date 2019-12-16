import React, { Component } from 'react';

class TimerController extends Component {
  render() {
    return (
      <div className="timer-controller">
        <h2 className="timer-controller__title">{this.props.title}</h2>
        <div className="timer-controller__counter">
          <button className="timer-controller__button" onClick={this.props.decTime}>-</button>
          <span className="timer-controller__time">{this.props.time}</span>
          <button className="timer-controller__button" onClick={this.props.incTime}>+</button>
        </div>
      </div>
    )    
  }
}

export default TimerController;
