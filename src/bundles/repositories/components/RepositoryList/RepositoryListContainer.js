import React, {Component} from 'react';
import RepositoryList from './RepositoryList';
import { getData } from './GetData';

const url = "https://api.github.com/users/RustemRiz/repos"

export default class RepositoryListContainer extends Component{
	constructor(props,context){
		super(props,context);
		this.state = {data:[]};
		console.log('constructor: ' + this);
		// this.setData(this.props.login);		
	}
	componentDidMount() {
	    this.setData(this.props.login);
	  }
	setData(login){
		var self = this;
		getData(login, function(data){
			console.log('callback argument : ' + data);
			if(data){
				self.setState({data:data});
			}
			else{
				alert("User not found");
			}

		});	
		return;
	}

	render(){
		console.log('render RepositoryListContainer');
		return(
			<div className='repository_list_container'>
			<h1>RustemRiz</h1>
			<RepositoryList repositories={this.state.data}/>
			</div>
			);
	}
}
