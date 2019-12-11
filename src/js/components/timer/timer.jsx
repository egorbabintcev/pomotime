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
      formattedTime: "25 : 00",
      timerId: 0,
      minLeft: 0,
      secLeft: 0,
      cycle: 'work'
    };
    this.isStarted = false;
    this.isRunning = false;

    this.decrementTime = this.decrementTime.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.startTimer = this.startTimer.bind(this);    
    this.stopTimer = this.stopTimer.bind(this);   
  }

  startTimer(duration) {    
    let time;
    if (this.isStarted) {      
      time = this.state.minLeft * 60 + this.state.secLeft;      
    } else {
      time = duration * 60;
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
      time--;
      this.setState({ formattedTime });             
      if (time < 0) {
        clearInterval(this.state.timerId);        
        this.isStarted = false;
        const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
        audio.play();
        if (this.state.cycle === 'work') {          
          this.setState({ cycle: 'break' });   
          this.startTimer(this.state.breaktime)
        } else {
          this.setState({ cycle: 'work' });
          this.startTimer(this.state.worktime);
        }
      };         
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
    console.log(mins)
    const time = mins < 10 ? `0${mins} : 00` : mins + ' : 00';    
    this.setState({
      formattedTime: time,
      minLeft: mins,
      secLeft: 0
    });
  }

  decrementTime(type) {    
    const newTime = +this.state[type] - 1;
    if (newTime < 0 || this.isRunning) return;
    this.setCurrentTime(newTime);
    this.setState(state => {      
      return { [type]: newTime }
    })
  }

  incrementTime(type) {    
    const newTime = +this.state[type] + 1;    
    if(this.isRunning) return;
    this.setCurrentTime(newTime);
    this.setState(state => {      
      return { [type]: newTime }
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
          time={this.state.formattedTime}
          cycle={this.state.cycle} />        
        <TimerControls
          worktime={this.state.worktime}
          breaktime={this.state.breaktime}
          cycle={this.state.cycle}
          start={this.startTimer}
          stop={this.stopTimer} />
      </div>
    )
  }
}

export default Timer;
