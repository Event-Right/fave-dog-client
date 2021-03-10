import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute.js';

import './App.css';

import {
  getUserFromLocalStorage,
  putUserInLocalStorage,
} from './local-storage-utils.js';

import Header from './Components/Header';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import SearchPage from './SearchPage/SearchPage';
import About from './About/About';

export default class App extends Component {
  state = {
    user: getUserFromLocalStorage(),
  };

  handleUserChange = (user) => {
    this.setState({ user });

    putUserInLocalStorage(user);
  };

  handleLogOut = () => {
    this.handleUserChange();
  };

  render() {
    console.log(this.state);
    const { user } = this.state;
    return (
      <div className='container'>
        <Router>
          <Header user={user} handleLogOut={this.handleLogOut} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => (
                <Home
                  handleUserChange={this.handleUserChange}
                  {...routerProps}
                />
              )}
            />
            <PrivateRoute
              path="/favorites"
              exact
              token={user && user.token}
              render={(routerProps) => (
                <Favorites user={user} {...routerProps} />
              )}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => (
                <SearchPage user={user} {...routerProps} />
              )}
            />
            <Route
              path="/about"
              exact
              render={(routerProps) => <About {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
