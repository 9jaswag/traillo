import React from "react";
import PropTypes from "prop-types";

export default () => (
  <div className="collapse" id="create-dropdown">
    <div className="p-0 col-12">
      <div className="col-12 text-center p-1"><span className="text-muted">Create</span></div>
      <hr className='m-0 mr-3 ml-3' />
      <div className='mt-1'>
        <ul className="create-dropdown-list">
          <li>
            <div className='create-dropdown-list-item p-2'>
              <span className='d-block sub-name'>Create Board...</span>
              <small className="sub-desc d-inline-block">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
