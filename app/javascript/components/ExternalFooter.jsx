import React from "react"
import PropTypes from "prop-types"

const year = new Date(Date.now()).getFullYear();

export default () => (
  <footer className="footer fixed-bottom card-footer bg-white">
    <div className="container">
      <span className="text-muted">&copy; {year}</span>
    </div>
  </footer>
);

