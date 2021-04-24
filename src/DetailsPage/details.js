import React, { Component } from 'react'
import {  getDogHouse, } from '../Utils/Api_Utils.ts';
import {getIdFromLocalStorage } from '../Utils/local-storage-utils.ts';
import styleD from '../DetailsPage/module.css';
export default class DetailsPage extends Component {
    state = {
        // lolol
        doghouse: []
    }
    
    componentDidMount= async() => {
        const businessId = getIdFromLocalStorage();
        const doghouse = await getDogHouse(businessId);
        this.setState({
            doghouse: [doghouse],
        })}
        render(){
            return (
                <div className= {styleD.container}>
                    <h1>Doghouse Details</h1>
                    {
                    this.state.doghouse.map( ({
                        // you can destructure from the argument if you like
                        name, 
                        image_url, 
                        rating, 
                        review_count, 
                        url
                    }) =>
                        <div className= {styleD.location} key={`${name}`} >
                            <h2 className={styleD.busName}>{name}</h2>
                            <img className='detailImage' alt={name} src={image_url} />
                            <div className= {styleD.dp}>
                            <p>Rating: {rating}</p>
                            <p># of reviews: {review_count}</p>
                            {/* nice work figuring out this parsing! */}
                            <p>Location: {location.display_address.join(', ')}</p>
                            <p>Offers: {transactions.join(' / ')}</p>
                            <p className={styleD.busUrl}><a href= {url}> More Doggone Info!</a></p>
                            </div>
                        </div>
                    )
                }
                </div>
            )
        }
}