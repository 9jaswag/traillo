import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "mobx-react";
import routes from '../routes/routes';
import UserStore from '../stores/UserStore';

export default (props, _railsContext) => {

  return (
    <Provider userStore={UserStore}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
  );
};
