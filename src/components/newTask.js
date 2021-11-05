import React, { Component } from 'react';
import './style.css';

class NewTask extends Component{

    state = {
        tit: "",
        summary:"",
        date:"",
        time:""
      };

    
    handleInput = event => {
    this.setState({ tit: event.target.value });
    };

    addNew(){
        console.log(this.state.tit);
    }

    addTask(){
        let data={title:"new",summary:"new summ",date:"",time:""};
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

    render(){
        return(
        <div className="newTask">
            <div>
            <button type="button" className="btn btn-primary pull-right mybutton" data-toggle="modal" data-target="#myModal">New Task</button>
            </div>
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">CREATE NEW TASK</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label >Title</label>
                                <input onChange={this.handleInput1} placeholder="Enter Title" />
                                </div>
                            <div className="form-group">
                                <label >Summary</label>
                                <textarea rows="3" className="form-control" id="summary" placeholder="Enter summary" name="summary" onChange={this.handleInput2}></textarea>
                            </div>
                            <input type="submit" onClick={this.addNew} value="CREATE"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default NewTask;

