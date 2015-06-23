import React from 'react';

let PomodoroCompleteList = React.createClass({

  propTypes: {
    pomodoros: React.PropTypes.array,
  },

  render() {
    var pomodoros = this.props.pomodoros.map(function(pomo){
      return(
        <li key={pomo.id}>{pomo.complete ? "Complete" : "Incomplete"}</li>
        )
    });

    return(
      <ul className="status-list">
        {pomodoros}
      </ul>
    );
  }
});

export default PomodoroCompleteList;
