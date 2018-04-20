import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import Button from './Button';
import NotificationToast from '../components/NotificationToast'
import SecondaryHeader from "./SecondaryHeader";

class PasswordReset extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    }
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

export default PasswordReset
