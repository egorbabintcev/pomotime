import React, { Component } from 'react';

import TimerDisplay from './timerDisplay.jsx';
import TimerControls from './timerControls.jsx';
import { throwStatement } from 'babel-types';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: "25 : 00",
      workTime: 25,
      breakTime: 5,
      cycle: 'Session'
    };

    this.incrementTime = this.incrementTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
  }

  decrementTime(type) {
    this.setState({
      [type]: this.state[type] -1
    })
  }

  incrementTime(type) {    
    this.setState({
      [type]: this.state[type] + 1
    })
  }

  render() {
    return (
      <div className="timer">
        <TimerDisplay cycle={this.state.cycle} currentTime={this.state.currentTime} />
        <TimerControls 
          incrementTime={this.incrementTime} 
          decrementTime={this.decrementTime}
          workTime={this.state.workTime}
          breakTime={this.state.breakTime} />
      </div>
    )
  }
}

export default Timer;
