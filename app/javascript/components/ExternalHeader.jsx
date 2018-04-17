import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

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
        <ul className="navbar-nav mr-auto"></ul>
        <div className="">
          <Link
            to="/login"
            className="btn btn-dark button__external button__external-primary"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn btn-success ml-3 button__external"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

