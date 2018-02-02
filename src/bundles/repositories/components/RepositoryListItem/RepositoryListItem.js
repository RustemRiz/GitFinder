import React, {Component} from 'react';

export default class RepositoryListItem extends Component{
	render(){
		const {repository} = this.props;
		return (
			<tr>

				<td>{repository.id}</td>
				<td>{repository.name}</td>
				<td>{repository.description}</td>
			</tr>
			);
	}
}