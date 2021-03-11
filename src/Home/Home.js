import React, { Component } from 'react';
import SignIn from '../Signup_Login/SignIn.js';
import SignUp from '../Signup_Login/SignUp.js';
import style from './Home.module.css';
export default class Home extends Component {
  render() {
    return (
      <div className={style.homeContainer}>
        <SignIn handleUserChange={this.props.handleUserChange} />
        <SignUp handleUserChange={this.props.handleUserChange} />
      </div>
    );
  }
}
