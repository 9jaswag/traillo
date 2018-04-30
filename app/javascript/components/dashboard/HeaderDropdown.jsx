import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderDropdownBoard from './HeaderDropdownBoard';

export default ({ focus }) => (
  <div className="collapse" id="board-dropdown">
    <div className="p-1 col-7 col-sm-4 col-md-3 col-lg-3">
      <form className="form-inline my-2 my-md-0 ml-1">
        <input className="form-control form-control-sm board-dropdown-search-input col-12" type="text" placeholder="Find boards by name..." ref={focus} />
      </form>
      <div className=''>
        <div className="col-12 board-dropdown-section position-relative p-3">
          <i className="far fa-star text-muted"></i>
          <span className="section-title ml-1 text-muted">Starred Boards</span>
          <i className="fas fa-minus float-right pr-3 text-muted position-absolute"></i>
        </div>
        <ul className="board-dropdown-projects mt-2">
          <HeaderDropdownBoard
            url='/'
            bkgImg='https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/56d4e601aae022ee7d2c0ce4d04dd372/photo-1519552928909-67ca7aef9265.jpg'
            name='Badass Project'
          />
        </ul>
        <div className="">
          <button className="btn btn-light btn-sm btn-block text-left" data-toggle="modal" data-target="#createBoardModal">Create new board...</button>
        </div>
      </div>
    </div>
  </div>
);
