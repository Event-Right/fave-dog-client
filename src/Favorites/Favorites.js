import React, { Component } from 'react';

export default class favorites extends Component {
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
