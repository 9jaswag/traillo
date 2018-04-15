import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render() {
    const year = new Date(Date.now()).getFullYear();
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-light sticky-top" style={{ backgroundColor: '#0079bf' }}>
          <a className="navbar-brand" href="/">
            <img src="logo.png" alt="Trailo logo" id="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobile-menu">
            <div className="navbar-nav ml-md-auto d-md-flex">
              <button className="btn btn-dark" type="button">Login</button>
              <button className="btn btn-success ml-3" type="button">Sign Up</button>
            </div>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid mb-0 bg-transparent">
          <div className="container">
            <h1 className="display-4">Traillo lets you work more collaboratively and get more done.</h1>
            <p className="lead">Traillo’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
            <hr className="my-4" />
            <p>You're one click away from organizing and prioritizing your project.</p>
            <p className="lead">
              <a className="btn btn-success btn-lg" href="#" role="button">Sign Up - It's Free</a>
            </p>
            <p>Already use Traillo? <a href="" className="">Log in</a>.</p>
          </div>
        </div>
        <footer className="footer fixed-bottom card-footer bg-white">
          <div className="container">
            <span className="text-muted">&copy; {year}</span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home
