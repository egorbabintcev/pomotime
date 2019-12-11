import React, { Component } from 'react';

import TimerController from './timerController.jsx';

class TimerDuration extends Component {
  render() {
    return (
      <div className="timer-duration">
        <TimerController 
          time={this.props.worktime} 
          incTime={this.props.incTime.bind(this, 'worktime')}
          decTime={this.props.decTime.bind(this, 'worktime')} />  
        <TimerController
          time={this.props.breaktime} 
          incTime={this.props.incTime.bind(this, 'breaktime')}
          decTime={this.props.decTime.bind(this, 'breaktime')} />
      </div>      
    )
  }
}

export default TimerDuration;
