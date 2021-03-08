import React, { Component } from 'react';
import { loginUser } from '../Utils/Api_Utils.js';
import style from './SignIn.module.css';
export default class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  handleusername = (e) => this.setState({ username: e.target.value });

  handlePassword = (e) => this.setState({ password: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = await loginUser(this.state.username, this.state.password);

    this.props.handleUserChange(user);
    this.props.history.push('./todos');
  };

  render() {
    return (
      <div className={style.signin}>
        <h>Log In:</h>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input value={this.state.username} onChange={this.handleusername} />
          </label>
          <label>
            Password:
            <input value={this.state.password} onChange={this.handlePassword} />
          </label>
          <button>Login</button>
        </form>
      </div>
    );
  }
}
