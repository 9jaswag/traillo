import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      errors: ''
    }
  }

  onSubmit(event) {
    // window.history.pushState({}, 'login', '/login')
    event.preventDefault();
    const { username, email, password, name } = this.state;
    if (!username || !email || !password || !name) {
      return this.setState({
        errors: 'Please fill all fields!'
      })
    }

    if (username.length > 15 || password.length < 6) {
      return this.setState({
        errors: 'Keep username and password within specified lengths'
      })
    }

    console.log({
      username,
      email,
      password,
      name
    })
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errors: ''
    })
  }

  render() {
    // const history = window.history;
    // console.log(history)
    // console.log(history.pushState)
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
                <form action="" className="mt-4" onSubmit={this.onSubmit}>
                  <TextInput
                    type="text"
                    name="name"
                    value={this.state.name}
                    label="Name"
                    placeholder="e.g., Jane Doe"
                    error={this.state.errors}
                    required="true"
                    onChange={this.onChange}
                  />
                  <TextInput
                    type="text"
                    name="username"
                    value={this.state.username}
                    label="Username"
                    placeholder="e.g., janedoe"
                    error={this.state.errors}
                    required="true"
                    onChange={this.onChange}
                    helpId="usernameHelp"
                    helpText="15 characters or less."
                  />
                  <TextInput
                    type="email"
                    name="email"
                    value={this.state.email}
                    label="Email"
                    placeholder="e.g., janedoe@example.com"
                    error={this.state.errors}
                    required="true"
                    onChange={this.onChange}
                  />
                  <TextInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="Password"
                    placeholder="e.g., ******"
                    error={this.state.errors}
                    required="true"
                    onChange={this.onChange}
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
