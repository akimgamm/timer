import React, { Component } from 'react';



export default class CurrentTime extends Component {

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
      <div className="time-section__current-time" id="current-time">
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }

}