import React from 'react';

class select extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: ""
		};
		this.onFieldChange = this.onFieldChange.bind(this);
	}
	onFieldChange(event) {
		this.setState({
			[event.target.name] : event.target.value
		});
	}

  render() {
  return <div className="select">

    <header className="App-header">
        <form>
			<input type="text" name="firstName" value={this.state.firstName} placeholder="First name" style={{marginTop: 20}} onChange={this.onFieldChange} />
			<input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.onFieldChange} />
		</form>
	</header>

      	<input type="text" value="react" style={{marginTop: 10}}/><br/>
   		<textarea value="react"/><br/>
       	<select value="Sunday">
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        </select>
        
 	</div>

	}
}

export default select