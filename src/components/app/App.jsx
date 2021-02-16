import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AllCharacters from '../characters/AllCharacters';
import Greeting from '../greeting/Greeting';
import CharacterDetail from '../characters/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Greeting />
      <Switch>
        <Route path="/"
          exact
          render={(routerProps) => <AllCharacters {...routerProps}
          />} />
        <Route
          path="/details/:id"
          exact
          render={(routerProps) => <CharacterDetail {...routerProps}
          />} />
      </Switch>
    </Router>
  )
};
