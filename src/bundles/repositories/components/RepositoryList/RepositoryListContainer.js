import React, {Component} from 'react';
import RepositoryList from './RepositoryList';
import { getData, getD } from './GetData';

 const url = "https://api.github.com/users/RustemRiz/repos"

export default class RepositoryListContainer extends Component{
	constructor(props,context){
		super(props,context);
		this.state = {data:[]};
		var self = this;
		getData(2,function(data){
			console.log('callback argument : ' + data);
			self.setState({data:data});
		});
		
		
	}

	render(){
		console.log('render');
		return(
			<div>
				<RepositoryList repositories={this.state.data}/>
			</div>
			);
	}
}