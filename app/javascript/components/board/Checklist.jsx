import React from 'react';
import { inject, observer } from 'mobx-react';
import classnames from 'classnames';

@inject('store')
@observer class Checklist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }

    this.checkCheckbox = this.checkCheckbox.bind(this);
    this.showAddItemForm = this.showAddItemForm.bind(this);
    this.hideAllAddItemForms = this.hideAllAddItemForms.bind(this);
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
    // console.log(items)
    const checklistItems = items.map(item => (
      <div className="checklist-item px-1" key={item.id}>
        <div className="checklist-item-checkbox d-inline-block">
          <i className={classnames('far text-muted', {
            'fa-check-square': item.is_done,
            'fa-square': !item.is_done
          })} data-id={item.id} onClick={this.checkCheckbox}></i>
        </div>
        <div className="checklist-item-details d-inline-block pl-2">
          <div className="checklist-item-name">
            <span className={classnames({
              'underline': item.is_done
            })}>{item.name}</span>
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
