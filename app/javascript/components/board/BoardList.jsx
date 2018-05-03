import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BoardList extends Component {
  constructor(props) {
    super(props);

    this.showCreateCardForm = this.showCreateCardForm.bind(this);
    this.hideAddCardDropdown = this.hideAddCardDropdown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  showCreateCardForm(event) {
    const forms = document.querySelectorAll('.add-card-wrapper');
    let openFormValue = '';
    forms.forEach(form => {
      if (!form.classList.contains('collapse')) {
        openFormValue = form.firstElementChild.firstElementChild.firstElementChild.value;
        form.classList.add('collapse');
        form.previousElementSibling.classList.remove('collapse');
      }
    });
    const form = event.target.nextElementSibling;
    form.classList.remove('collapse');
    form.firstElementChild.firstElementChild.firstElementChild.value = openFormValue;
    event.target.classList.add('collapse')
  }

  hideAddCardDropdown(event) {
    const button = event.target;
    const form = button.closest("div div");
    form.classList.add('collapse');
    form.previousElementSibling.classList.remove('collapse');
  }

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-content">
          <div className="list-header">
            <h6 className="list-header-name">{this.props.list.name}</h6>
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
          <Link to='#' className="open-card-composer" onClick={this.showCreateCardForm}>Add a card...</Link>
          <div className='add-card-wrapper collapse'>
            <form id='add-card-form position-relative' action="" onSubmit={this.onSubmit}>
              <div className="card-composer p-2 m-2">
                <textarea name="" id="" className="card-compose-textarea" required></textarea>
              </div>
              <button className='btn btn-success btn-sm mx-2 mb-2' type='submit'>Add</button>
              <i className="ion-close-round position-absolute ml-3 add-card-close-icon" onClick={this.hideAddCardDropdown}></i>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardList;

