import React from 'react';
import Reflux from 'reflux';

let PomodoroActions = Reflux.createActions(
  [
    'startCountdown',
    'pauseCountdown'
  ]
)

export default PomodoroActions;
