import React, { Component } from 'react';

class WorkController extends Component {
  render() {
    return (
      <div className="timer-controller">
        <button className="timer-controller__button" onClick={this.props.handleDecrement}>-</button>
        <span>{this.props.workTime}</span>
        <button className="timer-controller__button" onClick={this.props.handleIncrement}>+</button>
      </div>
    )
  }
}

export default WorkController;
