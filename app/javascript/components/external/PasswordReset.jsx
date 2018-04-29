import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import NotificationToast from '../common/NotificationToast';
import SecondaryHeader from "./SecondaryHeader";

@inject('store')
@observer class PasswordReset extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      password_confirmation: '',
      responseMessage: '',
      validUrl: false,
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentWillMount() {
    const token = location.pathname.split('/')[2];
    const email = location.search.split('=')[1];
    if (token && email && token.length > 1 && email.length > 1 && token != undefined && email != undefined) {
      return this.setState({
        validUrl: true
      })
    }
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
    const { UserStore } = this.props.store;
    const { password, password_confirmation } = this.state;
    const token = location.pathname.split('/')[2];
    const email = location.search.split('=')[1];
    if (this.state.validUrl) {
      if (!password || password.length < 6 || !password_confirmation || password_confirmation.length < 6 || password != password_confirmation) {
        return this.setState({
          showNotification: true,
          responseMessage: { message: 'Please enter a password. Both passwords should match!' }
        })
      };
    };

    UserStore.passwordReset({ password, password_confirmation, token, email })
      .then(response => {
        let responseStatus = Number(response.status) < 300 ? "success" : 'error';
        this.setState({
          showNotification: true,
          responseMessage: response.data,
          responseStatus,
          password: '',
          password_confirmation: ''
        });
        if (responseStatus == 'success') {
          this.props.history.push('/login')
        }
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
    const notification = <NotificationToast type={this.state.responseStatus} message={this.state.responseMessage.message} />;
    const invalidState = <div className="password-reset-container">
      <div className="text-center">
        <i className="far fa-frown fa-spin fa-10x"></i>
        <h1 className="mt-3">We're sorry you ended up here. Something is wrong!</h1>
        <h3>Check the link in your password reset mail and try again.</h3>
      </div>
    </div>;
    const validState = <div className="password-reset-container">
      <h1 className="mb-4">Reset Your Traillo Password</h1>
      <h5>Use a password that will be easy for you to remember but difficult for others to guess.</h5>
      <div className="signup-form-container">
        <form action="" className="mt-4" onSubmit={this.onSubmit}>
          <TextInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            placeholder=""
            required="required"
            onChange={this.onChange}
            extraClass="col-12 col-sm-8"
          />
          <TextInput
            type="password"
            name="password_confirmation"
            value={this.state.password_confirmation}
            label="Confirm Password"
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
        </form>
      </div>
    </div>;
    const displayState = this.state.validUrl ? validState : invalidState;
    return (
      <React.Fragment>
        {this.state.showNotification && notification}
        <SecondaryHeader />
        <section className="container wrapper__external">
          {displayState}
        </section>
      </React.Fragment>
    );
  }
}

export default PasswordReset
