import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer class Checklist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }

    this.checkCheckbox = this.checkCheckbox.bind(this);
    this.toggleAddItemForm = this.toggleAddItemForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const { addItem } = this.props.store.Board;
    if (name.length < 1) {
      console.warn('enter a name');
      return;
    }
    addItem({
      name,
      checklist_id: this.props.checklist.id
    })
  }

  toggleAddItemForm() {
    const showButton = document.querySelector('.show-add-item');
    const form = document.querySelector('.add-item-form');
    showButton.classList.toggle('collapse');
    form.classList.toggle('show');
  }

  checkCheckbox(event) {
    const checkbox = event.target;
    const text = checkbox.parentElement.nextElementSibling.firstElementChild.firstElementChild;
    if (checkbox.classList.contains('fa-square')) {
      event.target.classList.remove('fa-square')
      event.target.classList.add('fa-check-square')
      text.classList.add('underline')
    } else {
      event.target.classList.add('fa-square')
      event.target.classList.remove('fa-check-square')
      text.classList.remove('underline')
    }
  }

  render() {
    const { checklist } = this.props;
    const { items } = checklist;
    const checklistItems = items.map(item => (
      <div className="checklist-item px-1" key={item.id}>
        <div className="checklist-item-checkbox d-inline-block">
          <i className="far fa-square text-muted" onClick={this.checkCheckbox}></i>
        </div>
        <div className="checklist-item-details d-inline-block pl-2">
          <div className="checklist-item-name">
            <span>{item.name}</span>
          </div>
        </div>
      </div>
    ));
    return (
      <section className="card-comment-section mt-2">
        <div>
          <i className="ion-android-checkbox-outline text-muted checklist-icon d-inline-block fa-lg"></i>
          <h6 className='d-inline-block task-modal-title'>{checklist.name}</h6>
        </div>
        <div className="checklist-progress">
          <span className="checklist-progress-percentage">100%</span>
          <div className="checklist-progress-bar">
            <div className="checklist-progress-bar-current" style={{ width: "10%" }}></div>
          </div>
        </div>
        {items.length > 0 && checklistItems}
        {/* <div className="checklist-item px-1">
          <div className="checklist-item-checkbox d-inline-block">
            <i className="far fa-square text-muted" onClick={this.checkCheckbox}></i>
          </div>
          <div className="checklist-item-details d-inline-block pl-2">
            <div className="checklist-item-name">
              <span>TTL needed</span>
            </div>
          </div>
        </div> */}
        <button className="quiet-button btn-block text-left show-add-item" onClick={this.toggleAddItemForm}>
          Add an item...
        </button>
        <div className="add-item-form collapse">
          <form action="" className='position-relative' onSubmit={this.onSubmit}>
            <textarea
              className="add-item-textarea col-12"
              name="name"
              value={this.state.name}
              id=""
              placeholder='Add an item'
              onChange={this.onChange}
              required></textarea>
            <button className='btn btn-sm btn-success'>Add</button>
            <i className="ion-close-round position-absolute ml-3 add-item-close-icon" onClick={this.toggleAddItemForm}></i>
          </form>
        </div>
      </section>
    )
  }
}

export default Checklist;
