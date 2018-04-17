import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container wrapper__external">
          <div className="container">
            <div className="signup-container">
              <h1 className="">Log in to Traillo</h1>
              <span> <span>or </span>
                <Link to="/signup" className="auth-link">create an account</Link>
              </span>
              <div className="signup-form-container">
                <form action="" className="mt-4">
                  <TextInput
                    type="email"
                    name="email"
                    value=""
                    label="Email"
                    placeholder="e.g., janedoe@example.com"
                    error=""
                    required="required"
                  />
                  <TextInput
                    type="password"
                    name="password"
                    value=""
                    label="Password"
                    placeholder="e.g., ******"
                    error=""
                    required="required"
                    helpId="passwordHelp"
                    helpText="6 characters or more."
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
