import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

export default () => (
  <div className="jumbotron jumbotron-fluid mb-0 bg-transparent home-hero">
    <div className="container">
      <h1 className="display-4">Traillo lets you work more collaboratively and get more done.</h1>
      <p className="lead">Traillo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
      <hr className="my-4" />
      <p>You're one click away from organizing and prioritizing your project.</p>
      <p className="lead">
        <Link className="btn btn-success btn-lg button__external" to="/signup" role="button">
          Sign Up - It's Free
        </Link>
      </p>
      <p>Already use Traillo? <a href="" className="home-hero-link">Log in</a>.</p>
    </div>
  </div>
);

