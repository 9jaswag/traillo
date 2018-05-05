import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject('store')
@observer class ListCard extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { Board } = this.props.store;
    Board.setModalCard(this.props.card);
  }

  render() {
    const { card } = this.props;
    return (
      <React.Fragment>
        <Link to='#' className='list-card' data-toggle="modal" data-target="#listCardModal" onClick={this.onClick}>
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

      </React.Fragment>
    );
  }
}

export default ListCard;
