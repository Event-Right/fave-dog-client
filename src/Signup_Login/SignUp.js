import React, { Component } from 'react';
import { signUpUser } from '../Utils/Api_Utils.ts';
import { withRouter } from 'react-router-dom';
import style from './Auth.module.css';
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  };

  handleEmail = (e) => this.setState({ email: e.target.value });

  handlePassword = (e) => this.setState({ password: e.target.value });

  handleName = (e) => this.setState({ name: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = await signUpUser(this.state.email, this.state.password, this.state.name);

    this.props.handleUserChange(user);
    this.props.history.push('/search');
  };

  render() {
    // if (this.state.user === true) {
    //   return <Redirect to="/search" />;
    // }
    return (
      <div className={style.containerDiv}>
        <form className={style.form} onSubmit={this.handleSubmit}>
        <h3>New User? Sign up here!</h3>
          <label>
            Name:
            <input value={this.state.name} onChange={this.handleName} />
          </label>
          <label>
            Email:
            <input value={this.state.email} onChange={this.handleEmail} />
          </label>
          <label>
            Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.handlePassword}
              
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
