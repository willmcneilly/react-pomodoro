import React from 'react';
import Reflux from 'reflux';

import PomodoroActions from './../actions/PomodoroActions.js';

let PomodoroSetStore = Reflux.createStore({
  listenables: [PomodoroActions],

  data: {
    periods: [
      {id: 1, type: 'pomodoro', length: 60000, active: false, complete: false, timeLeft: 60000},
      {id: 2, type: 'pomodoro', length: 60000, active: false, complete: false, timeLeft: 60000},
      {id: 3, type: 'short-break', length: 10000, active: false, complete: false, timeLeft: 10000},
      {id: 4, type: 'pomodoro', length: 60000, active: false, complete: false, timeLeft: 60000},
      {id: 5, type: 'pomodoro', length: 60000, active: false, complete: false, timeLeft: 60000},
      {id: 6, type: 'long-break', length: 20000, active: false, complete: false, timeLeft: 20000}
    ],
    queuedPeriod: 1,
    currentTime: null,
  },


  onStartCountdown() {
    debugger;
  },

  getInitialState() {
    return this.data
  }
});

export default PomodoroSetStore;
