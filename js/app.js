import React from 'react';
import Router from 'react-router';
import Reflux from 'reflux';

import PomodoroMessage from './components/PomodoroMessage.js';
import PomodoroTime from './components/PomodoroTime.js';
import PomodoroActions from './components/PomodoroActions.js';
import PomodoroCompleteList from './components/PomodoroCompleteList.js';

var appSettings = {
  numberPomodorosInSet: 8,
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15
}


pomodoroSetStore = Reflux.createStore({
  getIntialState() {
    return {
      periods: [
        {id: 1, type: 'pomodoro', length: 60000, status: 'inactive'},
        {id: 2, type: 'pomodoro', length: 60000, status: 'inactive'},
        {id: 3, type: 'short-break', length: 10000, status: 'inactive'},
        {id: 4, type: 'pomodoro', length: 60000, status: 'inactive'},
        {id: 5, type: 'pomodoro', length: 60000, status: 'inactive'},
        {id: 6, type: 'long-break', length: 20000, status: 'inactive'}
      ],
      queuedPeriodID: null,
      currentTime: null,
    }
  }
})

let AppContainer = React.createClass({
  render() {
    return (
      <div className="app-container">
        <PomodoroMessage />
        <PomodoroTime />
        <PomodoroActions />
        <PomodoroCompleteList />
      </div>
    );
  }
});


React.render(<AppContainer />, document.body);
