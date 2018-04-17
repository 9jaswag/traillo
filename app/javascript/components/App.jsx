import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes/routes'

export default (props, _railsContext) => {
  // const store = configureStore(props);

  return (
    // <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
    // </Provider>
  );
};
