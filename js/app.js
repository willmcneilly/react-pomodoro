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


var pomodoroSetStore = Reflux.createStore({
  getInitialState() {
    return {
      periods: [
        {id: 1, type: 'pomodoro', length: 60000, status: 'inactive', timeLeft: null},
        {id: 2, type: 'pomodoro', length: 60000, status: 'inactive', timeLeft: null},
        {id: 3, type: 'short-break', length: 10000, status: 'inactive', timeLeft: null},
        {id: 4, type: 'pomodoro', length: 60000, status: 'inactive', timeLeft: null},
        {id: 5, type: 'pomodoro', length: 60000, status: 'inactive', timeLeft: null},
        {id: 6, type: 'long-break', length: 20000, status: 'inactive', timeLeft: null}
      ],
      queuedPeriod: 1,
      currentTime: null,
    }
  }
})

let AppContainer = React.createClass({

  mixins: [Reflux.connect(pomodoroSetStore)],

  render() {
    var currentPeriod = this.state.periods[this.state.queuedPeriod];

    return (
      <div className="app-container">
        <PomodoroMessage period={currentPeriod} />
        <PomodoroTime period={currentPeriod} currentTime={this.state.currentTime}/>
        <PomodoroActions />
        <PomodoroCompleteList periods={this.state.periods}/>
      </div>
    );
  }
});


React.render(<AppContainer />, document.body);
