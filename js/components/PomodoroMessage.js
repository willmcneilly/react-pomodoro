import React from 'react';

let PomodoroMessage = React.createClass({

  render() {
    return(<div>{this.props.period.type}</div>);
  }
});

export default PomodoroMessage
