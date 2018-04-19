import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';
import loginAction from '../actions/login.action';
import NotificationToast from '../components/NotificationToast'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
      showNotification: false,
      responseMessage: ''
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
        errors: 'Please fill all fields properly!'
      })
    }

    loginAction({ email, password })
      .then(response => {
        this.setState({
          showNotification: true,
          responseMessage: response
        });
      });
  }

  clearErrors() {
    this.setState({
      showNotification: false,
      errors: ''
    });
  }

  render() {
    const notification = <NotificationToast message={this.state.responseMessage.message} />
    return (
      <React.Fragment>
        {this.state.showNotification && notification}
        <section className="container wrapper__external">
          <div className="container">
            <div className="signup-container">
              <h1 className="">Log in to Traillo</h1>
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
                    error={this.state.errors}
                    required="required"
                    onChange={this.onChange}
                  />
                  <TextInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="Password"
                    placeholder="e.g., ******"
                    error={this.state.errors}
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
                    <Link to="/signup" className="auth-link">Forgot your password?</Link>
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
