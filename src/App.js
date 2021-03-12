import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute.js';

import './App.css';

import {
  getUserFromLocalStorage,
  putUserInLocalStorage,
  putIdInLocalStorage,
} from './Utils/local-storage-utils.ts';

import Header from './Components/Header';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import SearchPage from './SearchPage/SearchPage';
import About from './About/About';
import DetailsPage from './DetailsPage/details.js';

export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  };

  handleID = (id) => {
    putIdInLocalStorage(id);
  };

  handleUserChange = (user) => {
    putUserInLocalStorage(user);
    const user1 = getUserFromLocalStorage();

    this.setState({
      user: user1 
    })
  };

  handleLogOut = () => {
    this.handleUserChange({
      email: '',
      id: '',
      token: '',
      name: '',
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <Router>
          <Header name={user.name} user={user} handleLogOut={this.handleLogOut} />
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
                <Favorites 
                handleID={this.handleID}
                user={user} 
                {...routerProps} />
              )}
            />
            <Route
              path="/search"
              exact
              token={ user && user.token }
              render={(routerProps) => (
                <SearchPage
                  handleID={this.handleID}
                  user={user}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/details"
              exact
              render={(routerProps) => (
                <DetailsPage
                  
                  {...routerProps}
                />
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
