import React from 'react';
import Reflux from 'reflux';

import PomodoroActions from './../actions/PomodoroActions.js';

let PomodoroSetStore = Reflux.createStore({
  listenables: [PomodoroActions],

  data: {
    periods: [
      {id: 1, type: 'pomodoro', length: 6000, active: false, complete: false, timeLeft: 1500000},
      {id: 2, type: 'pomodoro', length: 60000, active: false, complete: false, timeLeft: 60000},
      {id: 3, type: 'short-break', length: 10000, active: false, complete: false, timeLeft: 10000},
      {id: 4, type: 'pomodoro', length: 60000, active: false, complete: false, timeLeft: 60000},
      {id: 5, type: 'pomodoro', length: 60000, active: false, complete: false, timeLeft: 60000},
      {id: 6, type: 'long-break', length: 20000, active: false, complete: false, timeLeft: 20000}
    ],
    queuedPeriod: 0,
  },

  currentTimer: null,

  onStartCountdown() {
    var self = this;
    var data = this.data;
    var currentPeriodID = data.queuedPeriod;

    // if timer is already started return
    if(data.periods[currentPeriodID].active) {
      return;
    }

    this.currentTimer = setInterval(function(){
      if(data.periods[currentPeriodID].timeLeft <= 0) {

        self.triggerNextPeriod();
      }
      data.periods[currentPeriodID].timeLeft = data.periods[currentPeriodID].timeLeft - 1000;
      data.periods[currentPeriodID].active = true;
      self.trigger({data});
    }, 1000);
  },

  triggerNextPeriod() {

    this.clearTimer();
    let data = this.data;
    let currentPeriodID = data.queuedPeriod;
    data.periods[currentPeriodID].complete = true;
    data.queuedPeriod = currentPeriodID + 1;
    self.trigger({data});
    this.onStartCountdown();

  },

  clearTimer() {
    self = this;
    clearInterval(self.currentTimer);
  },

  onPauseCountdown() {
    var self = this;
    var data = this.data;
    var currentPeriodID = data.queuedPeriod;

    this.clearTimer();
    data.periods[currentPeriodID].active = false;
    self.trigger({data});
  },

  getInitialState() {
    var data = this.data;
    return {data}
  }
});


export default PomodoroSetStore;
