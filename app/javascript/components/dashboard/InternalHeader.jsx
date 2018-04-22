import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderBoardDropdown from './HeaderBoardDropdown'

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
    <div className="collapse" id="board-dropdown">
      <div className="p-1 col-7 col-sm-4 col-md-3 col-lg-3">
        <form className="form-inline my-2 my-md-0 ml-1">
          <input className="form-control form-control-sm board-dropdown-search-input col-12" type="text" placeholder="Find boards by name..." autoFocus />
        </form>
        <div className=''>
          <div className="col-12 board-dropdown-section position-relative p-3">
            <i className="far fa-star text-muted"></i>
            <span className="section-title ml-1 text-muted">Starred Boards</span>
            <i className="fas fa-minus float-right pr-3 text-muted position-absolute"></i>
          </div>
          <ul className="board-dropdown-projects mt-2">
            <HeaderBoardDropdown
              url='/'
              bkgImg='https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/56d4e601aae022ee7d2c0ce4d04dd372/photo-1519552928909-67ca7aef9265.jpg'
              name='Badass Project'
            />
          </ul>
          <div className="">
            <button className="btn btn-light btn-sm btn-block text-left">Create new board...</button>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
