import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import NotificationToast from "../common/NotificationToast";
import jwt from 'jsonwebtoken';

@inject('userStore')
@observer class AccountActivation extends React.Component {
  constructor(props) {
    super(props);

    this.clearErrors = this.clearErrors.bind(this);

    this.state = {
      responseMessage: '',
      validUrl: false,
      showNotification: false,
      responseMessage: '',
      responseStatus: 'error'
    }
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

  componentDidMount() {
    if (this.state.validUrl) {
      const token = location.pathname.split('/')[2];
      const email = location.search.split('=')[1];

      this.props.userStore.activate({ token, email })
        .then(response => {
          let responseStatus = Number(response.status) < 300 ? "success" : 'error';
          if (responseStatus == "success") {
            const token = localStorage.getItem('jwtToken');
            this.props.userStore.auth.isLoggedIn = true;
            this.props.userStore.auth.user = jwt.decode(response.data.token);
            return this.props.history.push('/dashboard')
          }
          this.setState({
            showNotification: true,
            responseMessage: response.data,
            responseStatus
          });
        });
    }
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
    const invalidState = <div className="text-center">
      <i className="far fa-frown fa-spin fa-10x"></i>
      <h1 className="mt-3">We're sorry you ended up here. Something is wrong!</h1>
      <h3>Check the link in your activation mail and try again.</h3>
    </div>;
    const validState = <div className="text-center">
      <i className="far fa-smile fa-spin fa-10x"></i>
      <h1 className="mt-3">Activating your account!</h1>
      {this.state.responseStatus == 'success' && <h4>You can now <Link to='/login'>log in.</Link></h4>}
      {this.state.responseStatus == 'error' && <h4>You can try the link again!</h4>}
    </div>;
    const displayState = this.state.validUrl ? validState : invalidState;
    return (
      <React.Fragment>
        {this.state.showNotification && notification}
        <section className="container-fluid activation-page">
          <div className="container wrapper__external"></div>
          {displayState}
        </section>
      </React.Fragment>
    );
  }
}

export default AccountActivation
