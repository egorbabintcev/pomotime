import React, { Component } from 'react';

import WorkController from './workController.jsx';
import BreakController from './breakController.jsx';

class TimerControls extends Component {
  render() {
    return (
      <div className="timer-controls">
        <WorkController 
          handleIncrement={this.props.incrementTime.bind(this, 'workTime')} 
          handleDecrement={this.props.decrementTime.bind(this, 'workTime')}
          workTime={this.props.workTime} />
        <BreakController 
          handleIncrement={this.props.incrementTime.bind(this, 'breakTime')}
          handleDecrement={this.props.decrementTime.bind(this, 'breakTime')}
          breakTime={this.props.breakTime} />
      </div>      
    )
  }
}

export default TimerControls;
