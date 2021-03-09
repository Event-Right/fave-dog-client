import React, { Component } from 'react';
import { searchEvents, getEvents, addFavorite } from '../Utils/Api_Utils.js';

export default class Search_Page extends Component {
  state = {
    events: [],
    search: '',
  };

  componentDidMount = async () => {
    const events = await getEvents();
    this.setState({
      events: events.events,
    });
  };

  handleSearchChange = (e) => this.setState({ search: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.makeSearch();
  };

  makeSearch = async () => {
    const events = await searchEvents(this.state.search);
    this.setState({ events });
  };

  handleFavorite = async (event) => {
    await addFavorite(
      {
        name: event.name,
        description: event.description,
      },
      this.props.user.token
    );
  };

  render() {
    console.log(this.state.events);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.search} onChange={this.handleSearchChange} />
          <button>Search</button>
        </form>
        <div className="events">
          {this.state.events.map((event) => (
            <div>
              <img alt={event.name} src={event.image_url} />
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>{event.location.zip_code}</p>
              <button onClick={() => this.handleFavorite(event)}>
                Add to Favorite!
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
