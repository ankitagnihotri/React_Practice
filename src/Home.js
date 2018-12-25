import React, {Component} from 'react';

class Home extends Component {

 onChangeText=(text)=>{
    this.setState({
    	searchText: text.target.value
    })
  }

  handleClick=(click)=>{
    this.setState({
        searchText: click.target.value
      });
	}


_renderSearchBox=()=>{
	return(
		<div>
			<input type="text" name="name" onChange={this.onChangeText} />
			<button onClick={this.handleClick}>Search</button>
		</div>
	)
}

	render() {
		return (
			<div>
				{this._renderSearchBox()}
				<p>{this.props.Capital}</p>
				<p>{this.props.Equity}</p>
				<p>{this.props.children}</p>
			
			</div>
		);
	}
}

export default Home;