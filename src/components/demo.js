import React, { Component } from 'react';

class Demo extends Component {
  state = {
    title: "",
    summary:""
  };

  handleInput1 = event => {
    this.setState({ title: event.target.value });
    this.setState({ summary: event.target.value });
    console.log(this.state.title);
    console.lof(this.state.summary);
  };

  /*handleInput2 = event => {
    this.setState({ summary: event.target.value });
  };
*/
  logValue = () => {
    console.log(this.state.title);
    console.lof(this.state.summary);
  };

  addTask(){
        let data={title:this.state.title,summary:this.state.summary,date:"",time:""};
        fetch("http://localhost:8010/tasks",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) });
    }

  render() {
    return (
      <div>
        <input value={this.state.title} placeholder="Enter Title" />
        <input value={this.state.summary} placeholder="Enter summary" />
        <button onClick={this.handleInput1}>Create</button>
      </div>
    );
  }
}

export default Demo;