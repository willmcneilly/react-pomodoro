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
