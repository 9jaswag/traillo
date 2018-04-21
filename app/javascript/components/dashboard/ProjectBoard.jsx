import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export default ({ name, bkImg, url }) => (
  <div className="col-12 col-sm-4 col-md-3 p-3">
    <Link to={url} className='col-12 project-board' style={{ backgroundImage: `url(${bkImg})` }}>
      <h6 className="d-inline project-name">{name}</h6>
    </Link>
  </div>
);
