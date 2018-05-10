import React from 'react';
import { inject, observer } from 'mobx-react';
import classnames from 'classnames';

@inject('store')
@observer class Checklist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      item_name: ''
    }

    this.checkCheckbox = this.checkCheckbox.bind(this);
    this.showAddItemForm = this.showAddItemForm.bind(this);
    this.hideAllAddItemForms = this.hideAllAddItemForms.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.closeEditItemForm = this.closeEditItemForm.bind(this);
    this.closeAllEditItemForm = this.closeAllEditItemForm.bind(this);
    this.showEditItemForm = this.showEditItemForm.bind(this);
    this.onEditFormChange = this.onEditFormChange.bind(this);
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this);
  }

  onEditFormSubmit(event) {
    event.preventDefault();
    const { updateItem } = this.props.store.Board;
    const item = event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild;
    const id = event.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.dataset;
    const is_done = item.classList.contains('underline') ? true : false;

    updateItem({
      name: this.state.item_name,
      checklist_id: this.props.checklist.id,
      is_done,
      id: id.id
    })
    this.closeAllEditItemForm();
  }

  onEditFormChange(event) {
    this.setState({ item_name: event.target.value })
  }

  showEditItemForm(event) {
    event.stopPropagation();
    this.closeAllEditItemForm();
    const button = event.target.closest('div .checklist-item-details');
    button.classList.add('collapse');
    this.setState({ item_name: button.firstElementChild.firstElementChild.textContent })
    const form = button.nextElementSibling
    form.classList.add('show');
  }

  closeEditItemForm(event) {
    const button = event.target.closest('.edit-item-wrapper');
    const form = button.previousElementSibling
    button.classList.remove('show');
    form.classList.remove('collapse');
  }

  closeAllEditItemForm() {
    const forms = document.querySelectorAll('.edit-item-wrapper');
    const buttons = document.querySelectorAll('.checklist-item-details');
    forms.forEach((form, index) => {
      if (form.classList.contains('show')) {
        form.classList.remove('show')
      }
      if (buttons[index].classList.contains('collapse')) {
        buttons[index].classList.remove('collapse')
      }
    })
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
    this.setState({ name: '' })
    this.hideAllAddItemForms();
  }

  showAddItemForm(event) {
    this.hideAllAddItemForms()
    const showButton = event.target;
    const form = event.target.nextElementSibling
    showButton.classList.add('collapse');
    form.classList.add('show');
  }

  hideAllAddItemForms() {
    const showButton = document.querySelectorAll('.show-add-item');
    const form = document.querySelectorAll('.add-item-form');
    showButton.forEach((button, index) => {
      button.classList.remove('collapse');
      form[index].classList.remove('show')
    })

    // hide all forms recursively: params, array of forms, index(0), class to remove
    // if (array.length == (index + 1)) {
    //   array[index].classList.remove(removeClass);
    //   return;
    // } else {
    //   array[index].classList.remove(removeClass);
    //   return this.hideAllAddItemForms(array, (index + 1))
    // }
  }

  checkCheckbox(event) {
    const checkbox = event.target;
    const text = checkbox.parentElement.nextElementSibling.firstElementChild.firstElementChild;
    const { updateItem } = this.props.store.Board;
    let is_done;
    if (checkbox.classList.contains('fa-square')) {
      event.target.classList.remove('fa-square');
      event.target.classList.add('fa-check-square', 'checked');
      text.classList.add('underline');
      is_done = true;
    } else {
      event.target.classList.add('fa-square')
      event.target.classList.remove('fa-check-square', 'checked')
      text.classList.remove('underline')
      is_done = false
    }
    updateItem({
      id: event.target.dataset.id,
      checklist_id: this.props.checklist.id,
      is_done,
      name: text.textContent
    })
  }

  render() {
    const { checklist } = this.props;
    const { items } = checklist;
    const checklistItems = items.map(item => (
      <div className="checklist-item px-1" key={item.id}>
        <div className="checklist-item-checkbox d-inline-block">
          <i className={classnames('far text-muted', {
            'fa-check-square': item.is_done,
            'fa-square': !item.is_done
          })} data-id={item.id} onClick={this.checkCheckbox}></i>
        </div>
        <div className="checklist-item-details pl-2 col-11">
          <div className="checklist-item-name">
            <span className={classnames('d-block', {
              'underline': item.is_done
            })}
              onClick={this.showEditItemForm}
            >{item.name}</span>
          </div>
        </div>
        <div className="edit-item-wrapper collapse">
          <form action="" className='position-relative' onSubmit={this.onEditFormSubmit} >
            <textarea
              className='col-12 edit-item-name' name="" id=""
              value={this.state.item_name}
              onChange={this.onEditFormChange}
              required>
            </textarea>
            <button type="submit" className='btn btn-sm btn-success mb-1'>Save</button>
            <i className="ion-close-round position-absolute ml-3 edit-item-close-icon" onClick={this.closeEditItemForm}></i>
          </form>
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
        <button className="quiet-button btn-block text-left show-add-item" onClick={this.showAddItemForm}>
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
            <i className="ion-close-round position-absolute ml-3 add-item-close-icon" onClick={this.hideAllAddItemForms}></i>
          </form>
        </div>
      </section>
    )
  }
}

export default Checklist;
