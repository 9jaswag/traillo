import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';
import TrailloContext from '../components/TrailloContext';
import NotificationToast from '../components/NotificationToast'
import AccountActivation from '../components/AccountActivation'

export default (
  <Switch>
    <TrailloContext>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/activate/:token" exact component={AccountActivation} />
    </TrailloContext>
  </Switch>
);
