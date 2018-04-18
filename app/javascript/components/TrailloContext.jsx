import React, { createContext } from "react"
import PropTypes from "prop-types"

// Initialize a context
const Context = createContext();

export const { Provider, Consumer } = Context
class TrailloContext extends React.Component {
  state = {
    auth: {},
    value: "I'm balling"
  }
  actions = {
    doStuff: () => this.setState({ value: 'I"ve been changed' })
  }
  render() {
    return (
      <Provider value={{
        state: this.state,
        actions: this.actions
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default TrailloContext
