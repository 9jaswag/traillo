import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';
import TrailloContext from '../components/TrailloContext';
import NotificationToast from '../components/NotificationToast';
import AccountActivation from '../components/AccountActivation';
import PasswordResetRequest from '../components/PasswordResetRequest';
import PasswordReset from '../components/PasswordReset';

export default (
  <Switch>
    <TrailloContext>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/activate/:token" exact component={AccountActivation} />
      <Route path="/password-reset" exact component={PasswordResetRequest} />
      <Route path="/reset/:token" exact component={PasswordReset} />
    </TrailloContext>
  </Switch>
);
