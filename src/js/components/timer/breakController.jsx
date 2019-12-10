import React, { Component } from 'react';

class BreakController extends Component {
  render() {
    return (
      <div className="timer-controller">
        <button className="timer-controller__button" onClick={this.props.handleDecrement}>-</button>
        <span>{this.props.breakTime}</span>
        <button className="timer-controller__button" onClick={this.props.handleIncrement}>+</button>
      </div>
    )
  }
}

export default BreakController;
