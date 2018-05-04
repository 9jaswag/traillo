import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ListCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { card } = this.props;
    return (
      <Link to='#' className='list-card'>
        <div className="list-card-details">
          <span className="list-card-title">{card.name}</span>
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
    );
  }
}

export default ListCard;
