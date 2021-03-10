import React, { Component } from 'react';
import './About.css';
import Slider from '../Components/Slider.js';

export default class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <p className="title">About The Developers</p>
        <div className="bio-list">
          <div className="bio-item">
            <p className="name">Tyler Farris</p>
            <img className="photo" src="./tyler.jpg" alt="tyler" />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Tyler.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tyler-p-farris/">
                <img
                  className="links"
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                />
              </a>
              <a href="https://github.com/Tylerpfarris">
                <img
                  className="links"
                  border="0"
                  alt="github"
                  src="github.png"
                />
              </a>
            </div>
          </div>
          <div className="bio-item">
            <p className="name">Eion Nelson</p>
            <img className="photo" src="./eion.jpg" alt="eion" />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Eion.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/eionnelson/">
                <img
                  className="links"
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                />
              </a>
              <a href="https://github.com/ecnelson1">
                <img
                  className="links"
                  border="0"
                  alt="github"
                  src="github.png"
                />
              </a>
            </div>
          </div>
          <div className="bio-item">
            <p className="name">Edmond Zhan</p>
            <img className="photo" src="./edmond.jpg" alt="edmond" />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Edmond.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/edmondzhan/">
                <img
                  className="links"
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                />
              </a>
              <a href="https://github.com/zhaned">
                <img
                  className="links"
                  border="0"
                  alt="github"
                  src="github.png"
                />
              </a>
            </div>
          </div>
          <div className="bio-item">
            <p className="name">Minh Ngo</p>
            <img className="photo" src="./minh.jpg" alt="minh" />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Minh.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/minhnngo/">
                <img
                  className="links"
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                />
              </a>
              <a href="https://github.com/ngominh0224">
                <img
                  className="links"
                  border="0"
                  alt="github"
                  src="github.png"
                />
              </a>
            </div>
          </div>
        </div>
        <Slider />
      </div>
    );
  }
}
