import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { inject, observer } from 'mobx-react';
// import { logout } from '../actions/signinAction';

export default (ComposedComponent) => {

  @inject('userStore')
  @observer class Authenticate extends Component {

    isExpired(token) {
      const expiryDate = jwt.decode(token).exp;
      return expiryDate < Date.now() / 1000;
    }

    componentWillMount() {
      console.log(this.props)
      const token = localStorage.getItem('jwtToken');
      if (!this.props.userStore.auth.isLoggedIn) {
        console.log('log out');
        this.props.history.push('/login');
      }
      // if (this.props.userStore.auth.isLoggedIn && token && this.isExpired(token)) {
      //   localStorage.removeItem('jwtToken');
      //   console.log('Session has expired. Please log in again');
      //   this.props.history.push('/login');
      // }
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
