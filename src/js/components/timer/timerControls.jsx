import React, { Component } from 'react';

class TimerControls extends Component {
  render() {
    return (
      <div className="timer-controls">
        <button className="timer-controls__button" onClick={this.props.start}>
          <i className="fas fa-play timer-controls__button-icon"></i>
        </button>
        <button className="timer-controls__button" onClick={this.props.stop}>
          <i className="fas fa-pause timer-controls__button-icon"></i>
        </button>
        <button className="timer-controls__button" onClick={this.props.reset}>
          <i className="fas fa-stop timer-controls__button-icon"></i>
        </button>
      </div>
    )
  }
}

export default TimerControls;
