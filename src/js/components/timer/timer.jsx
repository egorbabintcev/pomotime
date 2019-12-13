import React, { Component } from 'react';

import TimerDisplay from './timerDisplay.jsx';
import TimerDuration from './timerDuration.jsx';
import TimerControls from './timerControls.jsx';

class Timer extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      worktime: 25,
      breaktime: 5,      
      timerId: 0,
      minLeft: '25',
      secLeft: '00',
      cycle: 'work'
    };
    this.isStarted = false;
    this.isRunning = false;

    this.decrementTime = this.decrementTime.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.startTimer = this.startTimer.bind(this);    
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer(duration) {    
    let time;
    if (this.isStarted) {      
      time = this.state.minLeft * 60 + +this.state.secLeft;      
    } else {
      time = duration * 60 - 1;
      this.isStarted = true;
    }

    if (time <= 0) return;

    this.isRunning = true;   
    let timer = setInterval(() => {      
      let min = Math.floor(time / 60);
      let sec = time % 60;
      this.setCurrentTime(min, sec);
      if (--time <= 0) {
        clearInterval(this.timerId);
        this.isStarted = false;
        if (this.state.cycle === 'work') {
          this.setState({ cycle: 'break' });
          this.startTimer(this.state.breaktime);
        } else {
          this.setState({ cycle: 'work' });
          this.startTimer(this.state.worktime);
        }
      }      
    }, 1000)
    this.timerId = timer;
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.timerId);
  }

  resetTimer() {
    this.isRunning = false;
    clearInterval(this.timerId);
    this.setState({ cycle: 'work' });
    this.setCurrentTime(this.state.worktime, 0);
  }

  setCurrentTime(min, sec) {   
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec; 
    this.setState({
      minLeft: min,
      secLeft: sec
    });
  }

  decrementTime(type) {
    const newTime = +this.state[type] - 1;
    if (newTime < 0 || this.isRunning) return;  
    if (type === 'worktime') {
      this.setState({ minLeft: newTime });
    }
    this.setState(state => {      
      return { 
        [type]: newTime        
      };
    })
  }

  incrementTime(type) {    
    const newTime = +this.state[type] + 1;    
    if(this.isRunning) return;
    if (type === 'worktime') {
      this.setState({ minLeft: newTime });
    }    
    this.setState(state => {      
      return { 
        [type]: newTime     
      };
    })
  }

  render() {
    return (
      <div className="timer">
        <TimerDuration           
          incTime={this.incrementTime}
          decTime={this.decrementTime}
          worktime={this.state.worktime}
          breaktime={this.state.breaktime} />
        <TimerDisplay 
          minsLeft={this.state.minLeft}
          secsLeft={this.state.secLeft}
          cycle={this.state.cycle} />        
        <TimerControls
          worktime={this.state.worktime}
          breaktime={this.state.breaktime}
          cycle={this.state.cycle}
          start={this.startTimer}
          stop={this.stopTimer}
          reset={this.resetTimer} />
      </div>
    )
  }
}

export default Timer;
