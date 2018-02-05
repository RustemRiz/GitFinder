import React, {Component} from 'react';
import Finder from './Finder';
import { getData } from './GetData';



export default class FinderContainer extends Component{
	constructor(){
		super();
		this.state = {login:'', data: []};
		this.onChangeSearchText = this.onChangeSearchText.bind(this);	
		this.searchText='';
	}
	

	onChangeSearchText = e => {
		console.log(e.target.value);
		this.searchText = e.target.value;
	}

	onClickBtn = () => {
		console.log(this.searchText);
		if(this.searchText.length ===0){
			alert('Please, input login for search');
		}
		else{
			this.setData(this.searchText);
		}
	};

	setData(login){
		var self = this;
		getData(login, function(data){
			console.log('callback argument : ' + data);
			if(data.length > 0){
				self.setState({login, data:data});
			}
			else{
				alert("User not found");
			}

		});	
	}

	render(){
		console.log('render Finder');
		let st = this.state;
		return (
				<div className="row finder " >
					<div className='col-lg-4 find '>
							<div className="col ">
								<input type='text' placeholder='Login' defaultValue='' onChange={this.onChangeSearchText}/>
								<button className=' btn-primary' onClick={this.onClickBtn}>Find</button>
							</div>
					</div>
				
					<div className="col-lg-7 tab">
						<Finder login={this.state.login} data={this.state.data}/>
					</div>
				</div>
			);
	}
}