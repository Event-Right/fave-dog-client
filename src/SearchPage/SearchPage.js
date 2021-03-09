import React, { Component } from 'react'
import { searchEvents, getEvents } from '../Utils/Api_Utils.js'

export default class Search_Page extends Component {
    state = {
        locations: [],
        search: ''
    }

    handleSearchChange = e => this.setState({ search: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        await this.makeSearch()
    }

    makeSearch = async () => {
        const locations = await searchEvents(this.state.search);
        this.setState({ locations });
    }

    componentDidMount = async () => {
        const locations = await getEvents();
        this.setState({
            locations: locations
        })
    }

    // handleFavoritesClick = async (dbCocktail) => {
    //     console.log(dbCocktail);
    //     await addFavorite({
    //         name: dbCocktail.strDrink,
    //         glass: dbCocktail.strGlass,
    //         image: dbCocktail.strDrinkThumb,
    //         drink_id: dbCocktail.idDrink,
    //     }, this.props.user.token);
        
    //     await this.mountFavorites();
    // }

    render() {
        console.log(this.state.locations)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search</button>
                </form>
                <div className='events'>
                    {
                        this.state.locations.map( (location, i) =>
                            <div key={`${location.name}-${i}`} >
                                <h2>{location.name}</h2>
                                <img alt={location.name} src={location.image_url} />
                                <p>{location.rating}</p>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
 
// onClick={() => this.handleFavoritesClick(location)}