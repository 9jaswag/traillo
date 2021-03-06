import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import ListCard from './ListCard';

@inject('store')
@observer class BoardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCardName: ''
    }

    this.showCreateCardForm = this.showCreateCardForm.bind(this);
    this.hideAddCardDropdown = this.hideAddCardDropdown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const name = this.state.newCardName;
    const { createCard } = this.props.store.Board;
    if (name.length < 1) {
      console.log('please enter card name')
      return;
    }
    createCard({
      name,
      list_id: this.props.list.id
    })
    this.setState({ newCardName: '' });
  }

  onChange(event) {
    this.setState({ newCardName: event.target.value })
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
    this.setState({
      newCardName: openFormValue
    })
    event.target.classList.add('collapse')
  }

  hideAddCardDropdown(event) {
    const button = event.target;
    const form = button.closest("div div");
    form.classList.add('collapse');
    form.previousElementSibling.classList.remove('collapse');
    this.setState({ newCardName: '' })
  }

  render() {
    const { cards } = this.props.list;
    const listCards = cards.map(card => (
      <ListCard key={card.id} card={card} />
    ));

    return (
      <div className="list-wrapper">
        <div className="list-content">
          <div className="list-header">
            <h6 className="list-header-name">{this.props.list.name}</h6>
          </div>
          <div className="list-cards">
            {cards.length > 0 && listCards}
          </div>
          <Link to='#' className="open-card-composer" onClick={this.showCreateCardForm}>Add a card...</Link>
          <div className='add-card-wrapper collapse'>
            <form id='add-card-form position-relative' action="" onSubmit={this.onSubmit}>
              <div className="card-composer p-2 m-2">
                <textarea name="" id="" className="card-compose-textarea" value={this.state.newCardName} onChange={this.onChange} required></textarea>
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

