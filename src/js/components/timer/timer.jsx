import React, { Component } from 'react';

import TimerDisplay from './timerDisplay.jsx';
import TimerDuration from './timerDuration.jsx';
import TimerControls from './timerControls.jsx';

class Timer extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      time: 5,
      formattedTime: "05 : 00",
      timerId: 0,
      minLeft: 0,
      secLeft: 0
    };
    this.isStarted = false;
    this.isRunning = false;

    this.decrementTime = this.decrementTime.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.startTimer = this.startTimer.bind(this);    
    this.stopTimer = this.stopTimer.bind(this);   
  }

  startTimer() {
    let time;
    if (this.isStarted) {      
      time = this.state.minLeft * 60 + this.state.secLeft;      
    } else {
      time = this.state.time * 60;
      this.isStarted = true;
    }

    if (time <= 0) return;

    this.isRunning = true;
    function tick() {           
      let min = Math.floor(time / 60);
      let sec = time % 60;      
      this.setState({ 
        minLeft: min,
        secLeft: sec
      });      
      min = min < 10 ? `0${min}` : min;
      sec = sec < 10 ? `0${sec}` : sec;
      const formattedTime =  min + ' : ' + sec;
      --time;
      this.setState({ formattedTime });             
      if (time < 0) clearInterval(this.state.timerId);            
    }    

    let timer = setInterval(tick.bind(this), 1000)
    this.setState({ 
      timerId: timer,      
    });
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.state.timerId);
  }

  setCurrentTime(mins) {
    const time = mins < 10 ? `0${mins} : 00` : mins + ' : 00';
    this.setState({
      formattedTime: time,
      minLeft: mins,
      secLeft: 0
    });
  }

  decrementTime() {
    const newTime = this.state.time - 1;
    if (newTime < 0 || this.isRunning) return;
    this.setCurrentTime(newTime);
    this.setState(state => {      
      return { time: newTime }
    })
  }

  incrementTime() {
    const newTime = this.state.time + 1;
    if(this.isRunning) return;
    this.setCurrentTime(newTime);
    this.setState(state => {      
      return { time: newTime }
    })
  }

  render() {
    return (
      <div className="timer">
        <TimerDuration 
          time={this.state.time}
          incrementTime={this.incrementTime}
          decrementTime={this.decrementTime} />
        <TimerDisplay time={this.state.formattedTime} />        
        <TimerControls
          start={this.startTimer}
          stop={this.stopTimer} />
      </div>
    )
  }
}

export default Timer;
