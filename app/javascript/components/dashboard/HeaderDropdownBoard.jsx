import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default ({ url, bgImg, bgColor, name, onClick }) => (
  <li className="dropdown-project">
    <div className="dropdown-project-wrapper position-relative">
      <span className="dropdown-project-background" style={{ backgroundImage: `url(${bgImg})`, backgroundColor: `${bgColor}` }}></span>
      <span className="compact-board-tile-fade"></span>
      <Link to={url} className="dropdown-project-link" onClick={onClick}>
        <span className="dropdown-project-link-thumbnail" style={{ backgroundImage: `url(${bgImg})` }}></span>
        <span className="dropdown-project-link-text-detail">
          <span className="dropdown-project-link-text-detail-name">{name}</span>
        </span>
      </Link>
    </div>
  </li>
);
