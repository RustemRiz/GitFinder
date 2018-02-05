import React, {Component} from 'react';
import {RepositoryListContainer} from '../../../repositories/components/RepositoryList';

export default class Finder extends Component{

	render(){
		console.log('render Finder');
	
		return (
			<div>				
				{
					this.props.data.length > 0 &&
					 <RepositoryListContainer login={this.props.login} data={this.props.data}/>
				}
			</div>
			);
	}
}

