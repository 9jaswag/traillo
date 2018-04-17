import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    window.history.pushState({}, 'login', '/login')
  }

  render() {
    const history = window.history;
    console.log(history)
    console.log(history.pushState)
    return (
      <React.Fragment>
        <section className="container wrapper__external">
          <div className="container">
            <div className="signup-container">
              <h1 className="">Create a Traillo Account</h1>
              <span> <span>or </span>
                <Link to="/login" className="auth-link"> sign into your account</Link>
              </span>
              <div className="signup-form-container">
                <form action="" className="mt-4">
                  <TextInput
                    type="text"
                    name="name"
                    value=""
                    label="Name"
                    placeholder="e.g., Jane Doe"
                    error=""
                    required="true"
                  />
                  <TextInput
                    type="text"
                    name="username"
                    value=""
                    label="Username"
                    placeholder="e.g., janedoe"
                    error=""
                    required="true"
                    helpId="usernameHelp"
                    helpText="15 characters or less."
                  />
                  <TextInput
                    type="email"
                    name="email"
                    value=""
                    label="Email"
                    placeholder="e.g., janedoe@example.com"
                    error=""
                    required="true"
                  />
                  <TextInput
                    type="password"
                    name="password"
                    value=""
                    label="Password"
                    placeholder="e.g., ******"
                    error=""
                    required="true"
                    helpId="passwordHelp"
                    helpText="6 characters or more."
                  />
                  <Button
                    type="submit"
                    className="btn btn-success button__external btn-block button__auth"
                    text="Create New Account"
                  />
                  <small className="mt-3 d-inline-block">
                    By creating an account, you agree to our non-existent Terms of Service and Privacy Policy.
                  </small>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Signup
