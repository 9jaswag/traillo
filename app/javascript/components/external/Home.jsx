import React from "react";
import PropTypes from "prop-types";
import ExternalHeader from './ExternalHeader';
import ExternalFooter from './ExternalFooter';
import HomePageContent from './HomePageContent';

class Home extends React.Component {
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
