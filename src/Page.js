import React from 'react';

class Page extends React.Component {

        constructor(props){
		super(props);
		this.state={
			qty : 0
		}
	}

	setQauntity() {
		this.setState({qty : this.state.qty +1})
	}

    render(){
	    return (
	      <div>
	      <p>Android - $199</p>
	      <button onClick={this.setQauntity.bind(this)}>buy</button>
	      <button onClick={this.setQauntity.bind(this)}>show</button>
	      <h3>Qty: {this.state.qty} item(s)</h3>
	      <hr/>
	      </div>
	    );
  }
}

export default Page