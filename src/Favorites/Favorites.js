import React, { Component } from 'react';
import { getFavorites } from '../Utils/Api_Utils.js';
export default class favorites extends Component {
  state = {
    favorites: [],
  };

  componentDidMount = async () => {
    const favorites = await getFavorites(this.props.token);
    this.setState({
      favorites: favorites,
    });
  };

  render() {
    return (
      <div>
        <h3>Your Favorite Events</h3>
        <div>
          {this.state.favorites.map((fave) => (
            <div key={`${fave.name}-${fave.id}`}>
              <h3>{fave.name}</h3>
              <img src={fave.image_url} alt={fave.name} />
              <p>{fave.time_start}</p>
              <p>{fave.time_end}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
