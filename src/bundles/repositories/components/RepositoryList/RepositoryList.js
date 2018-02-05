import React, { Component} from 'react';
import {RepositoryListItemContainer} from '../RepositoryListItem';

export default class RepositoryList extends Component{
	render(){
		const { repositories } = this.props;
		console.log(repositories);
		return(
			<div>
				<table className='table table-striped '>
					<thead className='thead-dark'>
						<tr>
							<th >Id</th>
							<th>Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
				 		{repositories.map(e => <RepositoryListItemContainer key={e.id} repository={e}/>)}
					</tbody>
				</table>
				
			</div>
			);
	}
}

