import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="credentials">
        <input className="input">Username:</input>
        <input className="input">Password:</input>
        <button type="submit">Log In</button>
        <button type="submit">Create New Account</button>
      </div>
    );
  }
}
