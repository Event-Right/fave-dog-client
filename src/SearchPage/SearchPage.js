
import React, { Component } from 'react'
import { getLocations, addFavorite, getFavorites, searchLocations } from '../Utils/Api_Utils.js'
import Spinner from '../Components/Spinner.js';
import '../App.css';
import style from './SearchPage.module.css'
export default class Search_Page extends Component {
    state = {
        locations: [],
        favorites: [],
        search: '',
        sort_by: 'distance',
        loading: false
    }

    
  componentDidMount = async () => {
        this.setState({
            loading: true,
        })
        const locations = await getLocations();
        const favorites = await getFavorites(this.props.user.token);
        setTimeout(() => {
            this.setState({
                loading: false,
                locations: locations,
                favorites: favorites
            })
        }, 100);
  }
    
     fetchFavorites = async () => {
        const favorites = await getFavorites(this.props.user.token)
        console.log(this.state)
        this.setState({ favorites });
     }
    
    handleSearchChange = e => this.setState({ search: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        await this.makeSearch()
    }

    makeSearch = async () => {
        const locations = await searchLocations(this.state.search, this.state.sort_by);
       
        this.setState({
            locations: locations,
            
        });
    }

    handleSortBy = async (e) => {


        await this.setState({
            sort_by: e.target.value
        })
    }
    handleDetailsClick = async (faveDog) =>{
        this.props.handleID(faveDog.id);
        this.props.history.push('/details')

    }
    handleFavoritesClick = async (faveDog) => {
        
        await addFavorite({
            name: faveDog.name, 
            categories: faveDog.categories, 
            review_count: faveDog.review_count, 
            price: faveDog.price, 
            transactions: faveDog.transactions, 
            url: faveDog.url, 
            image_url: faveDog.image_url, 
            is_closed: faveDog.is_closed, 
            rating: faveDog.rating,
            distance: faveDog.distance, 
            display_phone: faveDog.display_phone,  
            city: faveDog.location.city,
            zip_code: faveDog.location.zip_code,
            state: faveDog.location.state,
            display_address: faveDog.location.display_address.join(', '),
            business_id: faveDog.id,
        }, this.props.user.token);
        
        await this.fetchFavorites();

    }

    isAFavorite = (location) => {
        if (!this.props.user.token) return true;
        
       const isIsAFavorite = this.state.favorites.find(favorite => favorite.name === location.name);
       console.log(location, this.state.favorites);
        return Boolean(isIsAFavorite);
    }

    render() {
        console.log(this.props);
        return (
            <div className={style.container}>
                <div className={style.searchFormContainer}>
                    <form className={style.searchForm}onSubmit={this.handleSubmit}>
                        <input placeholder='Enter a Location... and smash the dog' className={style.searchBar} value={this.state.search} onChange={this.handleSearchChange} />
                        <button></button>
                    </form>
                    <select className={style.dropDown} onChange={this.handleSortBy}>
                        <option value='' selected>Sort By...</option>
                        <option value='distance'>Distance</option>
                        <option value='rating'>Rating</option>
                        <option value='review_count'>Review Count</option>
                        <option value='best_match'>Best Match</option>
                    </select>
                </div>
                
                { this.state.loading && <Spinner />}
                <div className={style.locations}>
                    {
                        this.state.locations.map( (location, i) =>
                            <div className={style.location} key={`${location.name}-${i}`} >
                                <h2>{location.name}</h2>
                                <img alt={location.name} src={location.image_url} />
                                <p>Rating: {location.rating}</p>
                                <p>Number of Reviews: {location.review_count}</p>
                                <p>
                                    {this.isAFavorite(location)
                                        ? 'You love this dog'
                                        : <button onClick={() => this.handleFavoritesClick(location)} >add to favorites</button>
                                    }
                                </p>
                                <button onClick={() => this.handleDetailsClick(location)}>Doggone Details </button>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

}