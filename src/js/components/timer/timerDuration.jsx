import React, { Component } from 'react';

import TimerController from './timerController.jsx';

class TimerDuration extends Component {
  render() {
    return (
      <div className="timer-duration">
        <TimerController 
          title="Work"
          time={this.props.worktime} 
          incTime={this.props.incTime.bind(this, 'worktime')}
          decTime={this.props.decTime.bind(this, 'worktime')} />  
        <TimerController
          title="Short break"
          time={this.props.shortbreaktime} 
          incTime={this.props.incTime.bind(this, 'shortbreaktime')}
          decTime={this.props.decTime.bind(this, 'shortbreaktime')} />
        <TimerController
          title="Long break"
          time={this.props.longbreaktime} 
          incTime={this.props.incTime.bind(this, 'longbreaktime')}
          decTime={this.props.decTime.bind(this, 'longbreaktime')} />
      </div>      
    )
  }
}

export default TimerDuration;
