/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CharactersPage } from '../../pages/CharactersPage';
import { DetailedCharacterPage } from '../../pages/DetailedCharacterPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharactersPage} />
        <Route exact path="/character/:name" component={DetailedCharacterPage} />
      </Switch>
    </Router>
  );
}
