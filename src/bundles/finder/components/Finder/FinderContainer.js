import React, {Component} from 'react';
import Finder from './Finder';

export default class FinderContainer extends Component{
	constructor(){
		super();
		this.state = {login:'', data: []};
		this.onChangeSearchText = this.onChangeSearchText.bind(this);	
	}
	

	onChangeSearchText(e){
		console.log(e.target.value);
		this.setState({login : e.target.value});
		console.log('changed!');
	}

	render(){
		console.log('render Finder');
		return (
				<div className="row finder" >
					<form>
						<input type='text' placeholder='Login' onChange={this.onChangeSearchText}/>
					</form>
					<div className="col-6">
						<Finder login={this.state.login}/>
					</div>
				</div>
			);
	}
}