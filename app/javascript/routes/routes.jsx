import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Signup from '../components/Signup';

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/login" component={ExternalFooter} /> */}
    <Route path="/signup" component={Signup} />
  </Switch>
);
