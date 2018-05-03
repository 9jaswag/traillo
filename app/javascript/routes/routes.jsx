import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/external/Home';
import Signup from '../components/external/Signup';
import Login from '../components/external/Login';
import TrailloContext from '../components/TrailloContext';
import NotificationToast from '../components/common/NotificationToast';
import AccountActivation from '../components/external/AccountActivation';
import PasswordResetRequest from '../components/external/PasswordResetRequest';
import PasswordReset from '../components/external/PasswordReset';
import Dashboard from '../components/dashboard/Dashboard';
import Authorize from '../helpers/Authorize';
import ProjectPage from '../components/board/ProjectPage';
import NotFound from '../components/common/NotFound';

export default (
  <Switch>
    <TrailloContext>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/activate/:token" exact component={AccountActivation} />
      <Route path="/password-reset" exact component={PasswordResetRequest} />
      <Route path="/reset/:token" exact component={PasswordReset} />
      <Route path="/dashboard" exact component={Authorize(Dashboard)} />
      <Route path="/board/:uid/:name" exact component={Authorize(ProjectPage)} />
      <Route render={() => <NotFound />} />
    </TrailloContext>
  </Switch>
);
