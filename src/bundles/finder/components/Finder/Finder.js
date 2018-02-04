import React, {Component} from 'react';
import {RepositoryListContainer} from '../../../repositories/components/RepositoryList';
import { getData } from './GetData';

export default class Finder extends Component{
	constructor(props){
		super(props);
		this.state = {login:'', data: []};
	}
	

	setData(login){
		var self = this;
		getData(login, function(data){
			console.log('callback argument : ' + data);
			if(data){
				self.setState({login, data:data});
			}
			else{
				alert("User not found");
			}

		});	
		return;
	}



	render(){
		console.log('render Finder');
		return (
			<div>
				<button onClick={() => {
					this.setData(this.props.login);
					console.log(this.state.login);
					console.log(this.props.login);
				}}>
					Find
				</button>
				<RepositoryListContainer login={this.state.login} data={this.state.data}/>
			</div>
			);
	}
}

