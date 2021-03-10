import React, { Component } from 'react';
import { deleteFavorites, getFavorites } from '../Utils/Api_Utils.js';
import Spinner from '../Components/Spinner.js';
import '../App.css';
import './Favorite.css';
export default class favorites extends Component {
  state = {
    favorites: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({
      loading: true,
    })

    const favorites = await getFavorites(this.props.token);
  
    setTimeout(() => {
      this.setState({
        loading: false,
        favorites: favorites,
      });
    }, 1500);

  };

  handleDelete = async (id) => {
    await deleteFavorites(this.props.token, id);
    const favorites = await getFavorites(this.props.token);
    this.setState({
      favorites
    })
  }

  render() {

    return (
      <div>
        <h3 className='title' >Your Favorite Hot Dog Locations</h3>
        { this.state.loading && <Spinner />}
        <div>
          {this.state.favorites.map((fave) => (
            <div key={`${fave.name}-${fave.id}`}>
              <h3>{fave.name}</h3>
              <img src={fave.image_url} alt={fave.name} />
              <p>{fave.display_address}</p>
              <p>{fave.rating}</p>
              <button onClick={() => this.handleDelete(fave.id)}>Delete from Favorites</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
