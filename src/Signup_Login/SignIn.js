import React, { Component } from 'react';
import { loginUser } from '../Api_Utils.js';
import style from './SignIn.module.css';
export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmail = (e) => this.setState({ email: e.target.value });

  handlePassword = (e) => this.setState({ password: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = await loginUser(this.state.email, this.state.password);

    this.props.handleUserChange(user);
    this.props.history.push('./todos');
  };

  render() {
    return (
      <div className={style.signin}>
        <h>Log In:</h>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input value={this.state.email} onChange={this.handleEmail} />
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
