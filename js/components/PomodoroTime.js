import React from 'react';
import Moment from '../../node_modules/moment/moment';

let PomodoroTime = React.createClass({

  propTypes: {
    // Time left in milliseconds
    timeLeft: React.PropTypes.number,
  },

  formatAsTime() {
    let timeInSeconds = (this.props.timeLeft / 1000) % 60;
    timeInSeconds = timeInSeconds < 10 ? "0"+ timeInSeconds : timeInSeconds+"";

    let timeInMinutes = Math.floor((this.props.timeLeft / 1000) / 60);

    if(timeInMinutes === 0) {
      timeInMinutes = "00";
    } else if (timeInMinutes < 10) {
      timeInMinutes = "0" + timeInMinutes;
    } else {
      timeInMinutes = timeInMinutes + "";
    }
    return timeInMinutes + " : " + timeInSeconds;
  },

  render() {
    return(<div>{this.formatAsTime()}</div>);
  }
});

export default PomodoroTime;
