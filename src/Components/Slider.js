import React, { Component } from 'react';
import './Slider.css';

export default class Slider extends Component {
  state = {
    rating: 5,
  };

  handleOnChange = (value) => {
    this.setState({
      rating: value,
    });
  };

  render() {
    let { rating } = this.state;
    return (
      <div>
        <div class="slide-container">
          <input
            type="range"
            min="1"
            max="5"
            class="slider"
            id="myRange"
            onChange={this.handleOnChange}
          />
          <p>Value={rating}</p>
        </div>
      </div>
    );
  }
}
