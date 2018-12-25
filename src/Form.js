import React from 'react';


class Form extends React.Component {
	state = { userName: '' }
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Event: Form Submit', this.userNameInput.value);
		
	};
	render() {
		return(
			<div style={styles.parent}>	
			  <form onSubmit={this.handleSubmit}>
			  <input style={styles.formStyle} type="text" 
			   value={this.state.userName}
			   onChange={(event) => this.setState({ userName: event.target.value })}
			   placeholder="Github Username" required />
			   <button style={styles.formStyle} type="submit">Add card</button>
			 </form>
			</div>
		);
	}

}

const styles = {
	parent:{
		marginTop: 40,
	},
	formStyle:{
		height: 20,
	}

}
export default Form