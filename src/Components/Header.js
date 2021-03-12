import React, { Component } from 'react';
import { NavLink, Link, } from 'react-router-dom';
import style from './Header.module.css';

export default class Header extends Component {
  render() {
    
    return (
      <div className={style.headerContainerDiv}>
        <div className={style.linkContainerDiv}>
          {
            this.props.user && this.props.user.token &&
            <>
              <Link className={style.link} to= "/"><button onClick={this.props.handleLogOut}>Sign Out</button></Link>
              </>
          }
          
          <NavLink className={style.link} to="/">
            <p>Home</p>
          </NavLink>
          <NavLink className={style.link} to="/about">
            <p>About</p>
          </NavLink>
          <p>Lets Find a Dog  {this.props.user.name}</p>
          {
            this.props.user && this.props.user.token &&
            <>
              <NavLink className={style.link} to="/search">
                <p>Search</p>
              </NavLink>
              <NavLink className={style.link} to="/favorites">
                <p>Favorites</p>
              </NavLink>
              
            </>
          }
          
        </div>
      </div>
    );
  }
}
