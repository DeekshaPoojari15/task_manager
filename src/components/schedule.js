import React, { Component } from 'react';

class Scheduler extends Component {
  state = {
    date: "",
    time:""
  };

  handleInput1 = event => {
    this.setState({ date: event.target.value });
  };

  handleInput2 = event => {
    this.setState({ title: event.target.value });
  };

  logValue = () => {
    console.log(this.state.title);
    console.lof(this.state.summary);
  };

  render() {
    return (
      <div>
        <input type ="date" onChange={this.handleInput1} placeholder="Enter Date" />
        <input type="time" onChange={this.handleInput2} placeholder="Enter Time" />
        <button onClick={this.logValue}>Schedule</button>
      </div>
    );
  }
}

export default Scheduler;