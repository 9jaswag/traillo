import React, { createContext } from "react";
import PropTypes from "prop-types";

// Initialize a context
const Context = createContext();

export const { Provider, Consumer } = Context
class TrailloContext extends React.Component {
  state = {
    auth: {
      isAuthenticated: false,
      user: {}
    },
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default TrailloContext
