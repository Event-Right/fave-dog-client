import React, { Component } from 'react';
import SignIn from '../Signup_Login/SignIn.js';
import SignUp from '../Signup_Login/SignUp.js';

export default class Home extends Component {
  render() {
    return (
      <div className="credentials">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
