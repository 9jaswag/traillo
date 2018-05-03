import React from 'react';
import { Link } from "react-router-dom";

export default ({ list }) => (
  <div className="list-wrapper">
    <div className="list-content">
      <div className="list-header">
        <h6 className="list-header-name">{list.name}</h6>
      </div>
      <div className="list-cards">
        <Link to='#' className='list-card'>
          <div className="list-card-details">
            <span className="list-card-title">Setup</span>
            <div className="badges">
              <span className="js-badges">
                <div className="badge is-complete">
                  <span className="badge-icon">
                    <i className="ion-android-checkbox-outline fa-lg pr-1"></i>
                  </span>
                  <span className="badge-text">7/7</span>
                </div>
              </span>
            </div>
          </div>
        </Link>
      </div>
      <Link to='#' className="open-card-composer">Add a card...</Link>
    </div>
  </div>
);
