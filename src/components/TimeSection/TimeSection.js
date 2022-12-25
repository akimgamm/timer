import React, { Component } from 'react';

import MainTime from './MainTime/MainTime';
import CurrentTime from './CurrentTime/CurrentTime';
import TimeLeft from './TimeLeft/TimeLeft';

export default class TimeSection extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="time-section">
        <MainTime />

        <div className="time-section__sub-time" id="sub-time">
          <CurrentTime />
          <TimeLeft />

        </div>
      </div>
    )
  }

}