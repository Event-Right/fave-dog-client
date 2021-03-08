import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './Components/PrivateRoute';

import './App.css';

// import { getUserFromLocalStorage, putUserInLocalStorage } from './local-storage-utils.js';

import Header from './Components/Header';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import SearchPage from './SearchPage/SearchPage';

export default class App extends Component {
  state = {
    user: [],
    // getUserFromLocalStorage()
  };

  // handleUserChange = (user) => {
  //   this.setState({ user });

  //   putUserInLocalStorage(user);
  // }

  // handleLogOut = () => {
  //   this.handleUserChange();

  // }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          <Header
            user={user}
            // handleLogOut={this.handleLogOut}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
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
          </Switch>
        </Router>
      </div>
    );
  }
}
