import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default () => (
  <div className="collapse" id="profile-dropdown">
    <div className="p-0 col-12">
      <div className="col-12 text-center p-1"><span className="text-muted">Chuks Opia (troy34)</span></div>
      <hr className='m-0 mr-2 ml-2' />
      <div className='mt-1'>
        <ul className="create-dropdown-list">
          <li>
            <Link to='/' className='create-dropdown-list-item p-2 d-block profile-link'>
              <span className='d-block sub-name'>Profile</span>
            </Link>
          </li>
          <li>
            <Link to='/' className='create-dropdown-list-item p-2 d-block profile-link'>
              <span className='d-block sub-name'>Cards</span>
            </Link>
          </li>
          <li>
            <Link to='/' className='create-dropdown-list-item p-2 d-block profile-link'>
              <span className='d-block sub-name'>Settings</span>
            </Link>
          </li>
          <hr className='m-0 mr-2 ml-2' />
          <li>
            <Link to='/' className='create-dropdown-list-item p-2 d-block profile-link'>
              <span className='d-block sub-name'>Help</span>
            </Link>
          </li>
          <li>
            <Link to='/' className='create-dropdown-list-item p-2 d-block profile-link'>
              <span className='d-block sub-name'>Shortcuts</span>
            </Link>
          </li>
          <hr className='m-0 mr-2 ml-2' />
          <li>
            <Link to='/' className='create-dropdown-list-item p-2 d-block profile-link'>
              <span className='d-block sub-name'>Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
