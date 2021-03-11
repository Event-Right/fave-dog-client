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
    });

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
      favorites,
    });
  };

  handleDetailsClick = async (faveDog) => {
    this.props.handleID(faveDog.business_id);
    this.props.history.push('/details');
  };


  



  render() {
    return (
      <div>
        <h3 className="title">Your Favorite Hot Dog Locations</h3>
        {this.state.loading && <Spinner />}
        <div className="list">
          {this.state.favorites.map((fave) => (
            <div className="listItem">
              <img className="itemImg" src={fave.image_url} alt={fave.name} />
              <div className="label1">
                <h3>Name</h3>
                <h3>{fave.name}</h3>
              </div>
              <div className="label2" key={`${fave.business_id}`}>
                <h3>Address</h3>
                <p>{fave.display_address}</p>
              </div>
              <div className="label3">
                <h3>Rating</h3>
                <p>{fave.rating}</p>
              </div>
              <div className="theButtons">
                <button
                  className="deleteButton"
                  onClick={() => this.handleDelete(fave.id)}
                >
                  <span>Delete </span>
                </button>
                <button
                  className="deleteButton"
                  onClick={() => this.handleDetailsClick(fave)}
                >
                  Doggone Details{' '}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
