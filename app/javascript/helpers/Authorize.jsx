import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { inject, observer } from 'mobx-react';
import setAuthToken from '../helpers/setAuthToken';
// import { logout } from '../actions/signinAction';

export default (ComposedComponent) => {

  @inject('store')
  @observer class Authenticate extends Component {

    isExpired(token) {
      const expiryDate = jwt.decode(token).exp;
      return expiryDate < Date.now() / 1000;
    }

    componentWillMount() {
      const { UserStore } = this.props.store;
      const token = localStorage.getItem('jwt');

      if (localStorage.jwt && !this.isExpired(token)) {
        setAuthToken(localStorage.jwt);
        UserStore.auth.isLoggedIn = true;
        UserStore.auth.user = jwt.decode(localStorage.jwt);
      }

      if (!UserStore.auth.isLoggedIn) {
        localStorage.removeItem('jwt', token)
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  // Authenticate.propTypes = {
  //   isAuthenticated: PropTypes.bool.isRequired,
  // };

  return Authenticate;
  // return connect(mapStateToProps, { logout })(withRouter(Authenticate));
};
