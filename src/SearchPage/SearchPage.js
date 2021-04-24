import React, { Component } from 'react'
import { getLocations, addFavorite, getFavorites, searchLocations } from '../Utils/Api_Utils.ts'
import Spinner from '../Components/Spinner.js';
import '../App.css';
import style from './SearchPage.module.css'
const { container, searchFormContainer, searchForm, searchBar, select, spinner, ratingAndCountP, buttonDiv, buttonP, locationDiv, locationsContainer} = style 


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
            locations,
            favorites
        })
        // why wait an additional 1.5 seconds after the fetch is done?
    }, 1500);
  }
    
     fetchFavorites = async () => {
        const favorites = await getFavorites(this.props.user.token)
      
        this.setState({ favorites });
     }
    
    handleSearchChange = e => this.setState({ search: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        await this.makeSearch()
    }

    makeSearch = async () => {
        const locations = await searchLocations(this.state.search, this.state.sort_by);
       
        this.setState({ locations });
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
            ...faveDog,
            ...faveDog.location,
            display_address: faveDog.location.display_address.join(', '),
            business_id: faveDog.id,
        }, this.props.user.token);
        
        await this.fetchFavorites();
    }

    isAFavorite = (location) => {
        // are they always favorites if the user is not logged in?
        if (!this.props.user.token) return true;
        
        const isIsAFavorite = this.state.favorites.find(favorite => favorite.name === location.name);
      
        return Boolean(isIsAFavorite);
    }

    render() {
        const { search, loading, locations } = this.state
        
        return (
            <div className={container}>
                <div className={searchFormContainer}>
                    <form className={searchForm}onSubmit={this.handleSubmit}>
                        <input placeholder='Enter a Location... and smash the dog' className={searchBar} value={search} onChange={this.handleSearchChange} />
                        <button></button>
                    </form>
                    <select className={select} onChange={this.handleSortBy}>
                        <option value='' selected>Sort By...</option>
                        <option value='distance'>Distance</option>
                        <option value='rating'>Rating</option>
                        <option value='review_count'>Review Count</option>
                        <option value='best_match'>Best Match</option>
                    </select>     
                </div>  
                <div className={spinner}>
                    { loading && <Spinner />}
                </div>
                <div className={locationsContainer}>
                    {
                        locations.map((location, i) =>
                            <div className={locationDiv} key={`${location.name}-${i}`} >
                                <h2>{location.name}</h2>
                                <img alt={location.name} src={location.image_url} />
                                <p className={ratingAndCountP}>
                                    <p><label>Rating: </label>{location.rating}</p>
                                    <p><label>Reviews: </label>{location.review_count}</p> 
                                </p>
                                <div className={buttonDiv}>
                                    <span className={buttonP}><button onClick={() => this.handleDetailsClick(location)}>Doggone Details </button></span>
                                    <span className={buttonP}>{this.isAFavorite(location)
                                        ? 'You love this dog'
                                        : <button onClick={() => this.handleFavoritesClick(location)} >add to favorites</button>
                                    }</span> 
                                </div> 
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

}