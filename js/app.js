import React from 'react';
import Router from 'react-router';
import Reflux from 'reflux';

import PomodoroMessage from './components/PomodoroMessage.js';
import PomodoroTime from './components/PomodoroTime.js';
import PomodoroButtons from './components/PomodoroActions.js';
import PomodoroCompleteList from './components/PomodoroCompleteList.js';
import PomodoroSetStore from './stores/PomodoroSetStore.js';
import PomodoroActions from './actions/PomodoroActions.js';

let appSettings = {
  numberPomodorosInSet: 8,
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15
}

let AppContainer = React.createClass({

  mixins: [Reflux.connect(PomodoroSetStore)],

  getPomodoroPeriods() {
    return this.state.data.periods.filter(period => period.type === 'pomodoro')
  },

  startTriggered() {
    console.log('startTriggered');
    PomodoroActions.startCountdown();
  },

  resetTriggered() {
    console.log('resetTriggered');
  },

  pauseTriggered() {
    console.log('pauseTriggered');
    PomodoroActions.pauseCountdown();
  },

  render() {
    var currentPeriod = this.state.data.periods[this.state.data.queuedPeriod];
    return (
      <div className="app-container">
        <PomodoroMessage periodType={currentPeriod.type} />
        <PomodoroTime timeLeft={currentPeriod.timeLeft}/>
        <PomodoroButtons startTriggered={this.startTriggered} resetTriggered={this.resetTriggered} pauseTriggered={this.pauseTriggered}/>
        <PomodoroCompleteList pomodoros={this.getPomodoroPeriods()}/>
      </div>
    );
  }
});


React.render(<AppContainer />, document.body);
