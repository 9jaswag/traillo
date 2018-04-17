import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    window.history.pushState({}, 'login', '/login')
  }

  render() {
    const history = window.history;
    console.log(history)
    console.log(history.pushState)
    return (
      <React.Fragment>
        <section className="container wrapper__external">
          <div className="container">
            <div className="signup-container">
              <h1 className="">Create a Traillo Account</h1>
              <span> <span>or </span>
                <Link to="/login" className="auth-link"> sign into your account</Link>
              </span>
              <div className="signup-form-container">
                <form action="" className="mt-4">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control form-control-lg" id="name" placeholder="e.g., Jane Doe" autoComplete="off" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control form-control-lg" id="username" aria-describedby="usernameHelp" placeholder="e.g., janedoe" autoComplete="off" />
                    <small id="usernameHelp" className="form-text text-muted">15 characters or less.</small>
                  </div>
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
                    Create New Account
                  </button>
                  <small className="mt-3 d-inline-block">
                    By creating an account, you agree to our non-existent Terms of Service and Privacy Policy.
                  </small>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Signup
