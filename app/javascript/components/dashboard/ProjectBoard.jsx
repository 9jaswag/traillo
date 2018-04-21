import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export default () => (
  <div className="col-12 col-sm-4 col-md-3 p-3">
    <Link to='/' className='col-12 project-board'>
      <h6 className="d-inline project-name">Project Name</h6>
    </Link>
  </div>
);
