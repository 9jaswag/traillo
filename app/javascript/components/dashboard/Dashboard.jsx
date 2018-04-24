import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import InternalHeader from './InternalHeader';
import ProjectBoard from './ProjectBoard';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InternalHeader />
        <div className="container dashboard-wrapper custom-container">
          <div className="row">
            <div className="col-12">
              <i className="far fa-user"></i>
              <h6 className="d-inline-block ml-2 dashboard-header">Personal Boards</h6>
            </div>
          </div>
          <div className="container p-0 custom-container">
            <div className="row align-items-center">
              <ProjectBoard
                bkImg=""
                name="Drama Project"
                url="/login"
              />
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Dashboard
