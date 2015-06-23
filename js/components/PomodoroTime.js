import React from 'react';

let PomodoroTime = React.createClass({

  propTypes: {
    // Time left in milliseconds
    timeLeft: React.PropTypes.number,
  },

  render() {
    return(<div>{this.props.timeLeft}</div>);
  }
});

export default PomodoroTime;
