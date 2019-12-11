import React, { Component } from 'react';

class TimerControls extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    if (this.props.cycle === 'work') {
      this.props.start(this.props.worktime);
    } else {
      this.props.start(this.props.breaktime);
    }
  }

  render() {
    return (
      <div className="timer-controls">
        <button className="timer-controls__button" onClick={this.handleStart}>
          <i className="fas fa-play timer-controls__button-icon"></i>
        </button>
        <button className="timer-controls__button" onClick={this.props.stop}>
          <i className="fas fa-pause timer-controls__button-icon"></i>
        </button>
      </div>
    )
  }
}

export default TimerControls;
