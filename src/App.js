import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Home';


class App extends Component {



  render() {
    return (
      <div className="App">
      	<div className="col-lg-3 col-md-3">
			<li>
 				<a href="https://i.imgur.com/fe0T4nw.png">
 					<img src='https://i.imgur.com/fe0T4nw.png' alt="" onClick="https://arizonaatwork.com" />
 				</a>
			</li>
		</div>
        <Home Capital={'bshnjs'} Equity={'hjdkd'} />
         <Home Capital={'ddjd'} Equity={'hjdkd'} />
         <Home Capital={'ddjd'} Equity={'hjdkd'} />
         <Home Capital={'ddjd'} Equity={'hjdkd'} />
         <hr />
         <h1>This is a Paragraph</h1>
      </div>
    );
  }
}

export default App;
