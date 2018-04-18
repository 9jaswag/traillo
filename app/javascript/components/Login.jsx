import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    // window.history.pushState({}, 'login', '/login')
    const { email, password } = this.state;
    console.log({
      email,
      password
    })
  }

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
                <form action="" className="mt-4" onSubmit={this.onSubmit}>
                  <TextInput
                    type="email"
                    name="email"
                    value={this.state.email}
                    label="Email"
                    placeholder="e.g., janedoe@example.com"
                    error=""
                    required="required"
                    onChange={this.onChange}
                  />
                  <TextInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="Password"
                    placeholder="e.g., ******"
                    error=""
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