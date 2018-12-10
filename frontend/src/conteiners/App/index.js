import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.scss";

import Home from "../Home";
import GamesList from "../GamesList";
import Game from "../Game";

const App = () => (
  <Router>
    <div>
      <nav style={{"position": "fixed", "top": 0, "left": 0}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games_list/">About</Link>
          </li>
          <li>
            <Link to="/game/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/games_list/" component={GamesList} />
      <Route path="/game/" component={Game} />
    </div>
  </Router>
);

export default App;