import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <p className="title">About The Developers</p>
        <div className="bio-list">
          <div className="bio-item">
            <p className="name">Tyler Farris</p>
            <div className="box">
              <img class="front-img" src="./tyler-hotdog.png" alt="front" />
              <img class="hover-img" src="./tyler.jpg" alt="back" />
            </div>
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
            <div className="box">
              <img class="front-img" src="./eion-hotdog.png" alt="front" />
              <img class="hover-img" src="./eion.jpg" alt="back" />
            </div>
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
            <div className="box">
              <img class="front-img" src="./edmond-hotdog.jpg" alt="front" />
              <img class="hover-img" src="./edmond.jpg" alt="back" />
            </div>
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
            <div className="box">
              <img class="front-img" src="./minh-hotdog.png" alt="front" />
              <img class="hover-img" src="./minh.jpg" alt="back" />
            </div>

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
      </div>
    );
  }
}
