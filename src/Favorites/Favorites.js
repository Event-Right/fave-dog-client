import React, { Component } from 'react';
import { deleteFavorites, getFavorites } from '../Utils/Api_Utils.ts';
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
        <div className='spinner'>
          {this.state.loading && <Spinner />}
        </div>
        <div className="list">
          {this.state.favorites.map((fave) => {
            const { 
              name, 
              id, 
              business_id, 
              display_address, 
              rating,
             } = fave;
            
            return <div className="listItem">
              <img className="itemImg" src={c} alt={name} />
              <div className="label1">
                <h3>Name</h3>
                <h3>{name}</h3>
              </div>
              <div className="label2" key={`${business_id}`}>
                <h3>Address</h3>
                <p>{display_address}</p>
              </div>
              <div className="label3">
                <h3>Rating</h3>
                <p>{rating}</p>
              </div>
              <div className="theButtons">
                <button
                  className="deleteButton"
                  onClick={() => this.handleDelete(id)}
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
          }
          ))}
        </div>
      </div>
    );
  }
}
