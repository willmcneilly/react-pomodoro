import styles from './PomodoroActionsStyles.css';
import React, { Component } from 'react';

export default class PomodoroActionsStyles extends Component {
  
  propTypes: {
    startTriggered: React.PropTypes.func.isRequired,
    resetTriggered: React.PropTypes.func.isRequired,
    pauseTriggered: React.PropTypes.func.isRequired
  }

  startTriggered(e) {
    this.props.startTriggered(e);
  }

  resetTriggered(e) {
    this.props.resetTriggered(e);
  }

  pauseTriggered(e) {
    this.props.pauseTriggered(e);
  }

  render() {
    return(
      <div className={ styles.root }>
        <button onClick={ e => this.startTriggered(e) }>Start</button>
        <button onClick={ e => this.pauseTriggered(e) }>Pause</button>
        <button onClick={ e => this.resetTriggered(e) }>Reset</button>
      </div>
    );
  }
};
