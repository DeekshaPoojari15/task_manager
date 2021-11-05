import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { title:'',summary:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { title, summary} = this.state;
	event.preventDefault();
	let data={title:title,summary:summary,date:"",time:""};
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

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
		<div>
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
						<form onSubmit={this.handleSubmit}>
							<div className="text-left">
							<label htmlFor='title'>Title</label><br/>
							<textarea row={1} cols={75} required={true} name='title' placeholder='Title' value = {this.state.title} onChange={this.handleChange} ></textarea>
							</div>
							<div class="text-left">
							<label htmlFor='summary'>Summary</label><br/>
							<textarea required={true} rows={5} cols={75} name='summary' placeholder='Summary' value={this.state.summary} onChange={this.handleChange}></textarea>
							</div>
							<div>
							<input type="submit" className="btn btn-primary mybutton" value="Create New" />
							</div>
						</form>
					</div>
					<div className="modal-footer">
        				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      				</div>
    			</div>
  			</div>
		</div>
		<br/><br/><br/><br/>
		</div>
	)
}
}

export default Form
