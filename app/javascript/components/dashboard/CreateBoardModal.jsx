import React from "react";
import PropTypes from "prop-types";

export default () => (
  <div className="modal fade" id="createBoardModal" tabIndex={-1} role="dialog" aria-labelledby="createBoardModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content bg-transparent border-0">
        <div className="modal-body">
          <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="container-fluid">
            <div className="row">
              <div className="col-7 col-sm-8 create-modal-form pl-2">
                <form className="form-inline pt-2">
                  <input className="form-control form-control-sm board-name col-10" type="text" placeholder="Add board title" />
                </form>
              </div>
              <div className="col-4 col-sm-3 create-modal-background-grid mb-0 pr-1">
                <ul className='background-grid mb-0'>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                  <li className="background-grid-item">
                    <button className='background-grid-trigger'></button>
                  </li>
                </ul>
              </div>
              <button type="button" className="btn btn-primary btn-sm mt-2 bg-light text-muted border-0">Create Board</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
