import React from "react"
import PropTypes from "prop-types"

export default () => (
  <header>
    <nav className="navbar navbar-expand-sm navbar-light sticky-top" style={{ backgroundColor: '#0079bf' }}>
      <a className="navbar-brand" href="/">
        <img src="logo.png" alt="Trailo logo" id="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mobile-menu">
        <div className="navbar-nav ml-md-auto d-md-flex">
          <button className="btn btn-dark button__external button__external-primary" type="button">Login</button>
          <button className="btn btn-success ml-3 button__external" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  </header>
);

