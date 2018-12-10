import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home__wrapper">
        <div className="vertical-center">
          <h1>Welcome to freexit</h1>
          <h2>Online analog of dixit</h2>    
          <div className="loginform">
            <span>It's login and register form. If you are first at this site, just create your own username and password.</span>
            <div className="loginform__content">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" className="loginform__user" />
              <label htmlFor="pass">Password</label>
              <input type="password" name="pass" className="loginform__pass" />
              <button className="loginform__submit">Enter</button>                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
