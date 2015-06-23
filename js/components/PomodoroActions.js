import React from 'react';

let PomodoroActions = React.createClass({

  startTriggered(e) {
    console.log('startTriggerd')
  },

  resetTriggered(e) {
    console.log('resetTriggerd')
  },

  render() {
    return(
      <div>
        <button onClick={this.startTriggered}>Start</button>
        <button onClick={this.resetTriggered}>Reset</button>
      </div>
    );
  }
});

export default PomodoroActions;
