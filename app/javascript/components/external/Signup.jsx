import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { Consumer } from '../TrailloContext';
import NotificationToast from '../common/NotificationToast';

@inject('store')
@observer class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.clearErrors()
    const { username, email, password, name } = this.state;
    const { UserStore } = this.props.store;
    if (!username || !email || !password || !name) {
      return this.setState({
        showNotification: true,
        responseMessage: 'Please fill all fields properly!'
      })
    }

    if (username.length > 15 || password.length < 6) {
      return this.setState({
        showNotification: true,
        responseMessage: { message: 'Keep username and password within specified lengths!' }
      });
    }

    UserStore.signup({
      username,
      email,
      password,
      name
    }).then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      this.setState({
        showNotification: true,
        responseMessage: response.data,
        responseStatus
      });
    })
    this.clearErrors()
  }

  onChange(event) {
    this.clearErrors();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  clearErrors() {
    this.setState({
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    });
  }

  render() {
    const notification = <NotificationToast type={this.state.responseStatus} message={this.state.responseMessage.message} />
    return (
      <React.Fragment>
        {this.state.showNotification && notification}
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
                    required="true"
                    onChange={this.onChange}
                  />
                  <TextInput
                    type="text"
                    name="username"
                    value={this.state.username}
                    label="Username"
                    placeholder="e.g., janedoe"
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
                    required="true"
                    onChange={this.onChange}
                  />
                  <TextInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="Password"
                    placeholder="e.g., ******"
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
