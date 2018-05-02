import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export default ({ name, bgImg, bgColor, url, extraStyle, board }) => (
  <div className="col-12 col-sm-4 col-md-3 p-3">
    <Link
      to={{
        pathname: url,
        state: { board }
      }}
      className={'col-12 project-board ' + extraStyle}
      style={{ backgroundColor: `${bgColor}`, backgroundImage: `url(${bgImg})` }}>
      <h6 className="d-inline project-name">{name}</h6>
    </Link>
  </div>
);
