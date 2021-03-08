import React, { Component } from 'react'
import { searchEvents, getEvents } from '../Utils/Api_Utils.js'

export default class Search_Page extends Component {
    state = {
        events: [],
        search: ''
    }

    handleSearchChange = e => this.setState({ search: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        await this.makeSearch()
    }

    makeSearch = async () => {
        const events = await searchEvents(this.state.search);
        this.setState({ events });
    }

    componentDidMount = async () => {
        const events = await getEvents();
        this.setState({
            events: events
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search</button>
                </form>
                <div className='events'>
                    {
                        this.state.events.map( event =>
                            <div>
                                <img alt={event.name} src={'https://s3-media2.fl.yelpcdn.com/ephoto/TZ0gQ1nSBVe_X4PYg44s0w/o.jpg'} />
                                <h2>{event.name}</h2>
                                <p>{event.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
