import React, {Component} from 'react';
import RepositoryList from './RepositoryList';

const url = "https://api.github.com/users/RustemRiz/repos"

export default class RepositoryListContainer extends Component{
	

	render(){
		console.log('render RepositoryListContainer');
		return(
			<div className='repository_list_container'>
				{this.props.data.length>0 &&	<h1 className='login_title text-center'>{this.props.login}</h1>		}
				{this.props.data.length>0 &&	<RepositoryList repositories={this.props.data}/>	}
			</div>
			);
	}
}
