import React, { Component } from 'react';

export default class TimeLeft extends Component {

  constructor(props) {
    super(props);
    // this.state = { date: new Date() };
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  render() {
    return (
      <div className="time-section__time-left" id="time-left">
        01:19:00
      </div>
    )
  }

}