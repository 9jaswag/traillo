import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderDropdown from './HeaderDropdown'

export default () => (
  <React.Fragment>
    <header>
      <nav className="navbar navbar-expand navbar-light sticky-top" style={{ backgroundColor: '#026aa7' }}>
        <button className="btn btn-sm btn__internal" type="button" data-toggle="collapse" data-target="#board-dropdown" aria-controls="board-dropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bullseye"></i>
          <span className="ml-1 d-none d-xl-inline-block d-lg-inline-block d-md-inline-block">Board</span>
        </button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <form className="form-inline my-2 my-md-0 ml-1">
              <input className="form-control form-control-sm header-search-input" type="text" placeholder="" />
            </form>
          </ul>
          <div className="">
            <button className="btn btn-sm btn__internal"><i className="fas fa-plus"></i></button>
            <button className="btn ml-2 btn-sm btn__internal"><i className="fas fa-info-circle"></i></button>
            <button className="btn ml-2 btn-sm btn__internal"><i className="far fa-bell"></i></button>
            <button className="btn ml-2 btn-sm btn__internal profile-pic"><i className="far fa-bell"></i></button>
          </div>
        </div>
      </nav>

    </header>
    <HeaderDropdown />
  </React.Fragment>
);
