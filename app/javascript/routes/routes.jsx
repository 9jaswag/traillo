import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login'

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Switch>
);
