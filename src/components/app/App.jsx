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
        <Route path="/" component={AllCharacters}/>
        <Route path="/details/id" component={CharacterDetail}/>
      </Switch>
   </Router>
  );
}
