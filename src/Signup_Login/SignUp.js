import React, { Component } from 'react';
import { signUpUser } from '../Utils/Api_Utils.js';
import { withRouter } from 'react-router-dom';
class SignUp extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmail = (e) => this.setState({ email: e.target.value });

  handlePassword = (e) => this.setState({ password: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = await signUpUser(this.state.email, this.state.password);

    this.props.handleUserChange(user);
    this.props.history.push('/search');
  };

  render() {
    console.log(this.props.history);
    // if (this.state.user === true) {
    //   return <Redirect to="/search" />;
    // }
    return (
      <div>
        <h>New User? Sign up here!</h>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input value={this.state.email} onChange={this.handleEmail} />
          </label>
          <label>
            Password:
            <input value={this.state.password} onChange={this.handlePassword} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
