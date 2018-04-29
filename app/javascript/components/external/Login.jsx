import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import NotificationToast from '../common/NotificationToast';
import { inject, observer } from "mobx-react";
import jwt from 'jsonwebtoken';

@inject('TrailloStore')
@observer class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  onChange(event) {
    this.clearErrors()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.clearErrors()
    const { email, password } = this.state;

    if (!email || !password || password.length < 6) {
      return this.setState({
        showNotification: true,
        responseMessage: { message: 'Please fill all fields properly!' }
      })
    }

    this.props.TrailloStore.login({ email, password })
      .then(response => {
        let responseStatus = Number(response.status) < 300 ? "success" : 'error';
        if (responseStatus == 'success') {
          const token = localStorage.getItem('jwtToken');
          this.props.TrailloStore.auth.isLoggedIn = true;
          this.props.TrailloStore.auth.user = jwt.decode(response.data.token);
          return this.props.history.push('/dashboard');
        }
        this.setState({
          showNotification: true,
          responseMessage: response.data,
          responseStatus
        });
      });
    this.clearErrors();
  }

  clearErrors() {
    this.setState({
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    });
  }

  render() {
    const notification = <NotificationToast type={this.state.responseStatus} message={this.state.responseMessage.message} />;
    return (
      <React.Fragment>
        {this.state.showNotification && notification}
        <section className="container wrapper__external">
          <div className="container">
            <div className="signup-container">
              <h1 className="" >Log in to Traillo</h1>
              <span> <span>or </span>
                <Link to="/signup" className="auth-link">create an account</Link>
              </span>
              <div className="signup-form-container">
                <form action="" className="mt-4" onSubmit={this.onSubmit}>
                  <TextInput
                    type="email"
                    name="email"
                    value={this.state.email}
                    label="Email"
                    placeholder="e.g., janedoe@example.com"
                    required="required"
                    onChange={this.onChange}
                  />
                  <TextInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="Password"
                    placeholder="e.g., ******"
                    required="required"
                    helpId="passwordHelp"
                    helpText="6 characters or more."
                    onChange={this.onChange}
                  />
                  <Button
                    type="submit"
                    className="btn btn-success button__external btn-block button__auth"
                    text="Log In"
                  />
                  <span className="mt-3 d-inline-block">
                    <Link to="/password-reset" className="auth-link">Forgot your password?</Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login
