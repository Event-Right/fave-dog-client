import React, { Component } from 'react'
import {  getDogHouse, } from '/Utils/Api_Utils.js';

export default class CastDetailsPage extends Component {
    
    componentDidMount= async() => {
            const doghouse = await getDogHouse(this.props.doghouse_id);
            this.setState({
                doghouse: doghouse,
            })
          render() {
              return (
                  <div>
                      <h1>Doghouse Details</h1>
                      {
                        this.state.doghouse.map( details =>
                            <div key={`${details.name}`} >
                                <h2>{details.name}</h2>
                                <img alt={details.name} src={details.image_url} />
                                <p>Price: {details.price}</p>
                                <p>Rating: {details.rating}</p>
                                <p># of reviews: {details.review_count}</p>
                                <p>Location: {details.location.display_address}</p>
                                <p>Offers: {details.transactions}</p>
                                <p>More Info: {details.url}</p>
                                
                            </div>
                        )
                    }
                  </div>
              )
          }
    }