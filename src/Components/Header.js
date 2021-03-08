import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <div className={style.headerContainerDiv}>
        <div className={style.linkContainerDiv}>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/search">
            <p>Search</p>
          </NavLink>
          <NavLink to="/favorites">
            <p>Favorites</p>
          </NavLink>
          <button onClick={this.props.handleLogOut}>Sign Out</button>
          {/* {
                    this.props.user && this.props.user.token &&
                    <>
                        
                    </>
                } */}
        </div>
      </div>
    );
  }
}
