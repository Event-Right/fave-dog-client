import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <p className="title">About The Developers</p>
        <div className="interview">
          <p className="questions">1) Is a hot dog a sandwich?</p>
          <p className="questions">2) Does ketchup belong on a hot dog?</p>
          <p className="questions">3) What is your go-to hot dog order?</p>
        </div>
        <div className="bio-list">
          <div className="bio-item">
            <p className="name">Tyler Farris</p>
            <div className="box">
              <img class="front-img" src="./tyler-hotdog.png" alt="front" />
              <img class="hover-img" src="./tyler.jpg" alt="back" />
            </div>
            <h4>Software Engineer</h4>
            <div className="bio">
              <p className="answer">
                1) NO- if you remove the bun— a hot dog is still a hotdog.
              </p>
              <p className="answer">2) Only if you're out of mustard. </p>
              <p className="answer">
                3) Burnt to a crisp with lots of mustard and relish.
              </p>
            </div>
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
            <div className="bio">
              <p className="answer">
                1) Nope, it's still a hot dog even without the bun, sandwich
                can’t say the same w/o bread.
              </p>
              <p className="answer">2) Yeah, condiment equality!</p>
              <p className="answer">3) Chili cheese dog with lots of onions!</p>
            </div>
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
            <div className="bio">
              <p className="answer">
                1) No, that's like saying cereal is a soup.
              </p>
              <p className="answer">
                2) Yes, anything can be put on a hot dog.
              </p>
              <p className="answer">3) Just a regular.</p>
            </div>
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
            <div className="bio">
              <p className="answer">1) NO!</p>
              <p className="answer">2) For a classic dog, MUSTARD ONLY. </p>
              <p className="answer">3) Bacon wrapped with lots of toppings!</p>
            </div>
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
