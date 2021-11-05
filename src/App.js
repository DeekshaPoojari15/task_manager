import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import Demo from './components/demo';
import './components/style.css';
import './App.css';
    
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskList:[],
      scheduleList:[]         
    }
  }
    
  componentDidMount(){ 
    fetch('http://localhost:8010/tasks')
    .then((response)=>{return response.json()})
    .then( (response) => {              
      this.setState({
        taskList :response.filter((obj)=>obj.date!==""),
        scheduleList:response.filter((obj)=>obj.date==="")
      });
    })
  }
    
  render() {
    console.log(this.state.taskList)
    console.log(this.state.scheduleList)
    return (
      <div className="App">
        <Header></Header>
        <Form></Form>
        {this.state.taskList.map((item,index) => {
        return(
          <div>
            <div className="col-sm-4">
              <article className="card">
                <p><strong>{item.title}</strong></p>
                <p>{item.summary}</p>
                <p>Date:{item.date}</p>
                <p>Time:{item.time}</p>
                <button >Done</button>
              </article>
            </div>
          </div>
        );
        })}
      </div>
    );
  }
}
      
export default App;