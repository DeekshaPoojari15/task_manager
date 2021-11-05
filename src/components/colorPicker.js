import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends Component{
	state={
		background:"#ffff",
	};

	handleChangeComplete=(color) =>?{
		this.setState({background:color.hex});
	};

	render(){
		return(
			<SketchPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />
			<div style={{backgroundColor:color}}>
			<h1>Hello World</h1>
			);
	}

}
export default ColorPicker;