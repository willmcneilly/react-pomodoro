import React from 'react';

let PomodoroActions = React.createClass({

  propTypes: {
    startTriggered: React.PropTypes.func.isRequired,
    resetTriggered: React.PropTypes.func.isRequired
  },

  startTriggered(e) {
    this.props.startTriggered(e);
  },

  resetTriggered(e) {
    this.props.resetTriggered(e);
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
