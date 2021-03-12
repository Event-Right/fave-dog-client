import React, { Component } from 'react';
import { NavLink, Link, } from 'react-router-dom';
import style from './Header.module.css';
const { headerContainerDiv, linkContainerDiv, link} = style
export default class Header extends Component {
  render() {
    const { token, name } = this.props.user
    const {handleLogOut, user} = this.props
    return (
      <div className={headerContainerDiv}>
        <div className={linkContainerDiv}>
          
          {user && token &&
            <>
              <Link className={link} to= "/"><button onClick={handleLogOut}>Sign Out</button></Link>
            </> }
          
          <NavLink className={link} to="/">
            <p>Home</p>
          </NavLink>
          <NavLink className={link} to="/about">
            <p>About</p>
          </NavLink>
          <p>Lets Find a Dog  {name}</p>
          
          {user && token &&
            <>
              <NavLink className={link} to="/search">
                <p>Search</p>
              </NavLink>
              <NavLink className={link} to="/favorites">
                <p>Favorites</p>
              </NavLink>
            </>}
        </div>
      </div>
    );
  }
}
