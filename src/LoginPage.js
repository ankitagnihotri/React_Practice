import React, {Component} from 'react';
import Card from '@material-ui/core/Card';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    };

      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.dismissError = this.dismissError.bind(this);
  }

  dismissError = () => {
    this.setState({ error: '' });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

      if (!this.state.username) {
        return this.setState({ error: 'Username is required' });
      }

       if (!this.state.password) {
        return this.setState({ error: 'Password is required' });
      }

       return this.setState({ error: '' });
  }

  handleUserChange = (evt) => {
    this.setState({
      username: evt.target.value,
    });
    };

    handlePassChange = (evt) => {
      this.setState({
        password: evt.target.value,
      });
  }

  
  render() {
    return(
      <div className="Login">
      <Card>
        <form onSubmit={this.handleSubmit}>
        {
          this.state.error && 
          <h3 data-text="error" onClick={this.dismissError}>
          <button on onClick={this.dismissError}>✖</button>
          {this.state.error}
          </h3>
        }

          <label>User Name</label>
                  <input type="text" data-text="username" value={this.state.username} onChange={this.handleUserChange} />

              <label>Password</label>
              <input type="password" data-text="password" value={this.state.password} onChange={this.handlePassChange} />

              <input type="submit" value="Log In" data-text="submit" />
        </form>
        </Card>
      </div>
    );
  }
}

export default LoginPage