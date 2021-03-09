import React, { Component } from 'react';
import { logInUser } from '../Utils/Api_Utils.js';
import { withRouter } from 'react-router-dom';
class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmail = (e) => this.setState({ email: e.target.value });

  handlePassword = (e) => this.setState({ password: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = await logInUser(this.state.email, this.state.password);

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
        <h>Log In</h>
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

export default withRouter(SignIn);
