import React, { Component } from 'react';
import axios from 'axios';

class GetDataApi extends Component {
	constructor() {
		super();
		this.state= {
			users: [],
			store: []
		}
	}

	componentDidMount(){
 		axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
  		.then(json => json.data.results.map(result => (
    	{
      		name: `${result.name.first} ${result.name.last}`,
      		//id: result.registered
  		})))

 		.then(newData => this.setState({users: newData, store: newData}))
  		.catch(error => alert(error))
		}


	render() {
		console.log(this.state.users[0])
		let person = this.state.users[0];

		return(
			
			<div></div>
			
		)
	}
}

export default GetDataApi;