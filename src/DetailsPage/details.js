import React, { Component } from 'react'
import {  getDogHouse, } from '../Utils/Api_Utils.ts';
import {getIdFromLocalStorage } from '../Utils/local-storage-utils.ts';
import styleD from '../DetailsPage/details.module.css';
export default class DetailsPage extends Component {
    state = {
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
                    this.state.doghouse.map( details =>
                        <div className= {styleD.location} key={`${details.name}`} >
                            <h2 className={styleD.busName}>{details.name}</h2>
                            <img className='detailImage' alt={details.name} src={details.image_url} />
                            <div className= {styleD.dp}>
                            <p>Rating: {details.rating}</p>
                            <p># of reviews: {details.review_count}</p>
                            <p>Location: {details.location.display_address.join(', ')}</p>
                            <p>Offers: {details.transactions.join(' / ')}</p>
                            <p className={styleD.busUrl}><a href= {details.url}> More Doggone Info!</a></p>
                            </div>
                        </div>
                    )
                }
                </div>
            )
        }
}