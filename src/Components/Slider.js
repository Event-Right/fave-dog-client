import React, { Component } from 'react';
import './Slider.css';

export default class Slider extends Component {
  state = {
    rating: 1,
  };

  handleOnChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <div>
        <div class="slide-container">
          <input
            type="range"
            min={1}
            max={5}
            class="slider"
            value={this.state.value}
            id="myRange"
            onChange={this.handleOnChange}
          />
          <p>Value={this.state.value}</p>
        </div>
      </div>
    );
  }
}
