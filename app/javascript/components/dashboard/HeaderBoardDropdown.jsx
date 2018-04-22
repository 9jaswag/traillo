import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default () => (
  <li className="dropdown-project">
    <div className="dropdown-project-wrapper position-relative">
      <span className="dropdown-project-background"></span>
      <span className="compact-board-tile-fade"></span>
      <Link to='/' className="dropdown-project-link">
        <span className="dropdown-project-link-thumbnail"></span>
        <span className="dropdown-project-link-text-detail">
          <span className="dropdown-project-link-text-detail-name">Project Bench</span>
        </span>
      </Link>
    </div>
  </li>
);
