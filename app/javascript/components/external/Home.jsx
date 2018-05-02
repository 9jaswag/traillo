import React from "react";
import PropTypes from "prop-types";
import ExternalHeader from './ExternalHeader';
import ExternalFooter from './ExternalFooter';
import HomePageContent from './HomePageContent';
import { inject, observer } from "mobx-react";

@inject('store')
@observer class Home extends React.Component {
  componentWillMount() {
    const { auth } = this.props.store.UserStore;
    if (auth.isLoggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <React.Fragment >
        <ExternalHeader />
        <HomePageContent />
        <ExternalFooter />
      </React.Fragment>
    );
  }
}

export default Home
