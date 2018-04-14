import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light  bg-dark">
          <a class="navbar-brand" href="/">
            <img src="logo.png" alt="Trailo logo" id="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mobile-menu">
            <div class="navbar-nav ml-md-auto d-md-flex">
              <button class="btn btn-sm btn-outline-secondary" type="button">Login</button>
              <button class="btn btn-sm btn-outline-secondary ml-3" type="button">Sign Up</button>
            </div>
          </div>
        </nav>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Traillo lets you work more collaboratively and get more done.</h1>
            <p class="lead">Traillo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Sign Up - It's Free</a>
            </p>
            <p>Already use Traillo? <a href="" class="">Log in</a>.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
