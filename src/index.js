
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import User from './pages/user';
import Login from './pages/login';

import App from './app';

hydrate(
  <Router>
    <Route path="/" component={App}>
      <Route exact path="/user" component={User}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Route>
  </Router>,
  document.getElementById("root")
);