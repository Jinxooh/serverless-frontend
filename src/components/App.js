import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages';

const App = () => (
  <Switch>
    <Route exact path="/" compononet={Home} />
  </Switch>
);

export default App;
