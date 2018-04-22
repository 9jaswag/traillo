import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default ({ url, bkgImg, name }) => (
  <li className="dropdown-project">
    <div className="dropdown-project-wrapper position-relative">
      <span className="dropdown-project-background" style={{ backgroundImage: `url(${bkgImg})` }}></span>
      <span className="compact-board-tile-fade"></span>
      <Link to={url} className="dropdown-project-link">
        <span className="dropdown-project-link-thumbnail" style={{ backgroundImage: `url(${bkgImg})` }}></span>
        <span className="dropdown-project-link-text-detail">
          <span className="dropdown-project-link-text-detail-name">{name}</span>
        </span>
      </Link>
    </div>
  </li>
);
