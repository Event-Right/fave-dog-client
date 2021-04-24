import React, { Component } from 'react';
import SignInOrUp from '../Signup_Login/SignInOrUp.js';
import style from './Home.module.css';
export default class Home extends Component {
  render() {
    return (
      <div className={style.homeContainer}>
        {/* the only big difference between these two components seems to be the function called on submit. probably makes sense to just drop that in as a prop and adjust the UI based on the function name */}
        <SignInOrUp handleUserChange={this.props.handleUserChange} signInOrUp={signInUser} />
        <SignInOrUp handleUserChange={this.props.handleUserChange} signInOrUp={signUpUser} />
      </div>
    );
  }
}
