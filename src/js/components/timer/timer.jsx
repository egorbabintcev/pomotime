import React, { Component } from 'react';

import TimerDisplay from './timerDisplay.jsx';
import TimerDuration from './timerDuration.jsx';
import TimerControls from './timerControls.jsx';

function alarmSound(link = "https://cs9-10v4.vkuseraudio.net/p20/51f3701fcbd4b4.mp3?extra=EEMsn4ks8VieFPoqK-tfmkVZ98-kQxZZf0OzWTQ_vyZ9SH1UrSLHL5ibpYBQCDKbaOjIvGqt9DkhAZAxzQpsB_17ct3tfqrfBElRoQFWZ6s_lvW_0skJIkp1iGHePgVchnhMviJVZqB1GJl_sYPGXQ") {
  const audio = new Audio(link);
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 5000);
}

class Timer extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      worktime: 25,
      shortbreaktime: 5,
      longbreaktime: 30,
      minLeft: '25',
      secLeft: '00',
      cycle: 'work',
      sessionCount: 0,
    };
    this.isRunning = false;

    this.decrementTime = this.decrementTime.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.startTimer = this.startTimer.bind(this);    
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {            
    let time = parseInt(this.state.minLeft) * 60 + parseInt(this.state.secLeft);        
    this.isRunning = true;   

    function tick() {
      let min = Math.floor(time / 60);
      let sec = time % 60;      
      if (--time <= 0) {        
        clearInterval(this.timerId);        
        if (this.state.cycle === 'work') {               
          if (this.state.sessionCount === 4) {
            this.setCurrentTime(this.state.longbreaktime, 0);            
            this.setState({              
              cycle: 'longbreak',
              sessionCount: 0
            });
            return;
          }
          this.setCurrentTime(this.state.shortbreaktime, 0);                  
          this.setState({            
            cycle: 'shortbreak'            
          });
        } else {                    
          this.setCurrentTime(this.state.worktime, 0);          
          this.setState(state => {
            return {
              cycle: 'work',
              sessionCount: state.sessionCount + 1
            }
          })
        }
        alarmSound();
        this.startTimer();
      }      
      this.setCurrentTime(min, sec);      
    }

    tick.call(this);
    let timer = setInterval(tick.bind(this), 1000);
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
    const newTime = this.state[type] - 1;
    if (newTime < 1 || this.isRunning) return;      
    this.setState(state => {      
      return { 
        [type]: newTime        
      };
    })    
    if (type === 'worktime') {
      this.setCurrentTime(newTime, 0);
    }
  }

  incrementTime(type) {    
    const newTime = this.state[type] + 1;    
    if(this.isRunning) return;       
    this.setState(state => {      
      return { 
        [type]: newTime     
      };
    })
    if (type === 'worktime') {
      this.setCurrentTime(newTime, 0);
    }
  }

  render() {
    return (
      <div className="timer">
        <TimerDuration           
          incTime={this.incrementTime}
          decTime={this.decrementTime}
          worktime={this.state.worktime}
          shortbreaktime={this.state.shortbreaktime}
          longbreaktime={this.state.longbreaktime} />
        <TimerDisplay 
          minLeft={this.state.minLeft}
          secLeft={this.state.secLeft}
          cycle={this.state.cycle} />        
        <TimerControls                    
          start={this.startTimer}
          stop={this.stopTimer}
          reset={this.resetTimer} />
      </div>
    )
  }
}

export default Timer;
