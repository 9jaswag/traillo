import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container wrapper__external">
          <div className="container">
            <div className="signup-container">
              <h1 className="">Log in to Traillo</h1>
              <span> <span>or </span>
                <Link to="/signup" className="auth-link">create an account</Link>
              </span>
              <div className="signup-form-container">
                <form action="" className="mt-4">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control form-control-lg" id="email" placeholder="e.g., janedoe@example.com" autoComplete="off" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control form-control-lg" id="password" aria-describedby="passwordHelp" placeholder="e.g., ******" autoComplete="off" />
                    <small id="passwordHelp" className="form-text text-muted">6 characters or more.</small>
                  </div>
                  <button type="submit" className="btn btn-success button__external btn-block button__auth">
                    Log In
                  </button>
                  <span className="mt-3 d-inline-block">
                    <Link to="/signup" className="auth-link">Forgot your password?</Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login
