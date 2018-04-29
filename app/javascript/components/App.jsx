import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "mobx-react";
import routes from '../routes/routes';
import TrailloStore from '../stores/TrailloStore';

export default (props, _railsContext) => {

  return (
    <Provider TrailloStore={TrailloStore}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
  );
};
