import React from 'react';

let PomodoroMessage = React.createClass({

  propTypes: {
    periodType: React.PropTypes.string,
  },

  render() {
    let text = "";

    if(this.props.periodType === 'pomodoro') {
      text = "Pomodoro";
    } else if (this.props.periodType === 'short-break') {
      text = "Take a short break";
    } else if (this.props.periodType === 'long-break') {
      text = "Take a nice long break";
    }

    return(<div>{text}</div>);
  }
});

export default PomodoroMessage
