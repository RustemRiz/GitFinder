import React, {Component} from 'react';
import {RepositoryListContainer} from '../../../repositories/components/RepositoryList';

export default class Finder extends Component{
	constructor(){
		super();
		this.state = {login:'RustemRiz'};
		this.self = this;
	}
	btnFindClick(e){
		console.log('btn Clicked');
		this.setState({login:'imanakhov'});
		console.log(this);
		render();


	}
	render(){
		return (
				<div className="row finder" >
					<button onClick={()=> {this.setState({login:'imanakhov'});console.log(this)}}>Find</button>
					<div className="col-4">
						<input type='text' placeholder='Login'/>
						<button onClick={this.btnFindClick}>Find</button>
					</div>
					<div className="col-6">
						<RepositoryListContainer login={this.state.login}/>
					</div>
				</div>
			);
	}
}


