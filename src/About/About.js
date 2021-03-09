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
            <img
              className="photo"
              src="./tyler.jpg"
              width="200px"
              height="200px"
              alt="tyler"
            />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Tyler.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tyler-p-farris/">
                <img
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                  width="30"
                  height="30"
                />
              </a>
              <a href="https://github.com/Tylerpfarris">
                <img
                  border="0"
                  alt="github"
                  src="github.png"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
          <div className="bio-item">
            <p className="name">Eion Nelson</p>
            <img
              className="photo"
              src="./eion.jpg"
              width="200px"
              height="200px"
              alt="eion"
            />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Eion.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/eionnelson/">
                <img
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                  width="30"
                  height="30"
                />
              </a>
              <a href="https://github.com/ecnelson1">
                <img
                  border="0"
                  alt="github"
                  src="github.png"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
          <div className="bio-item">
            <p className="name">Edmond Zhan</p>
            <img
              className="photo"
              src="./edmond.jpg"
              width="200px"
              height="200px"
              alt="edmond"
            />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Edmond.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/edmondzhan/">
                <img
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                  width="30"
                  height="30"
                />
              </a>
              <a href="https://github.com/zhaned">
                <img
                  border="0"
                  alt="github"
                  src="github.png"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
          <div className="bio-item">
            <p className="name">Minh Ngo</p>
            <img
              className="photo"
              src="./minh.jpg"
              width="200px"
              height="200px"
              alt="minh"
            />
            <h4>Software Engineer</h4>
            <p className="bio">Hello my name is Minh.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/minhnngo/">
                <img
                  border="0"
                  alt="linkedIn"
                  src="linkedin-logo.png"
                  width="30"
                  height="30"
                />
              </a>
              <a href="https://github.com/ngominh0224">
                <img
                  border="0"
                  alt="github"
                  src="github.png"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
