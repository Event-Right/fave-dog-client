import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute.js';

import './App.css';

import {
  getUserFromLocalStorage,
  putUserInLocalStorage,
  putIdInLocalStorage,
} from './local-storage-utils.js';

import Header from './Components/Header';
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import SearchPage from './SearchPage/SearchPage';
import About from './About/About';
import DetailsPage from './DetailsPage/details.js'

export default class App extends Component {
  state = {
    user: getUserFromLocalStorage(),
    businessId: '',
  };
  handleID = (id) =>{
    this.setState({businessId: id});
    putIdInLocalStorage();
  }

  handleUserChange = (user) => {
    putUserInLocalStorage(user);
    const user1 = getUserFromLocalStorage();
    this.setState({user: user1})
  };
  
  handleLogOut = () => {
    this.handleUserChange('');
    
  };

  render() {
    console.log(this.props);
    const { user } = this.state;
    return (
      <div>
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
              token={ user && user.token }
              render={(routerProps) => (
                <SearchPage handleID={this.handleID} user={user} {...routerProps} />
              )}
            />
            <Route
              path="/details"
              exact
              render={(routerProps) => <DetailsPage businessId={this.state.businessId} {...routerProps} />}
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
