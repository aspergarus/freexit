import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div class="wrapper">
          <div class="vertical-center">
              <h1>Welcome to freexit</h1>
              <h2>Online analog of dixit</h2>
              <div class="loginform">
                  <span>It's login and register form. If you are first at this site, just create your own username and password.</span>
                  <div class="loginform__content">
                      <label for="username">Username</label>
                      <input type="text" name="username" class="loginform__user" />

                      <label for="pass">Password</label>
                      <input type="password" name="pass" class="loginform__pass" />

                      <button class="loginform__submit">Enter</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Home;
