import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import NotificationToast from '../common/NotificationToast'
import SecondaryHeader from "./SecondaryHeader";

@inject('store')
@observer class PasswordResetRequest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
    this.clearErrors();
    const { email } = this.state;
    const { UserStore } = this.props.store;
    if (!email || email.length < 1) {
      return this.setState({
        showNotification: true,
        responseMessage: { message: 'Please enter a valid email!' }
      })
    }

    UserStore.passwordResetRequest({ email: this.state.email })
      .then(response => {
        let responseStatus = Number(response.status) < 300 ? "success" : 'error';
        this.setState({
          showNotification: true,
          responseMessage: response.data,
          responseStatus
        });
      });
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
        <SecondaryHeader />
        <section className="container wrapper__external">
          <div className="password-reset-container">
            <h1 className="mb-4">Reset Your Traillo Password</h1>
            <h5>Submit your email address and we’ll send you a link to reset your password.</h5>
            <div className="signup-form-container">
              <form action="" className="mt-4" onSubmit={this.onSubmit}>
                <TextInput
                  type="email"
                  name="email"
                  value={this.state.email}
                  label="Email"
                  placeholder=""
                  required="required"
                  onChange={this.onChange}
                  extraClass="col-12 col-sm-8"
                />
                <Button
                  type="submit"
                  className="btn btn-success button__external button__auth"
                  text="Submit"
                />
                <span className="mt-3 d-block text-muted">
                  Psst … If it's any help, Traillo requires that passwords be at least 6 characters long and does not require you to include numbers or uppercase letters.
                  If that jogs your memory, you can <Link to="/login" className="auth-link">try logging in again.</Link>
                </span>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PasswordResetRequest
