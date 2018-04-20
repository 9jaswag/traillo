import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <nav className="navbar navbar-light sticky-top">
      <Link
        to="/login"
        className="btn btn-dark btn-outline-secondary"
      >
        Home
      </Link>
      <div className="" id="">
        <ul className="navbar-nav mr-auto"></ul>
        <div className="">
          <Link
            to="/login"
            className="btn btn-dark btn-outline-secondary"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn btn-dark btn-outline-secondary ml-3"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  </header>
);
