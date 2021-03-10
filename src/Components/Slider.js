import React, { Component } from 'react';
import './Slider.css';

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div class="slide-container">
          <input
            type="range"
            min="1"
            max="5"
            class="slider"
            id="myRange"
          ></input>
          <p>
            Value: <span id="value"></span>
          </p>
        </div>
      </div>
    );
  }
}
