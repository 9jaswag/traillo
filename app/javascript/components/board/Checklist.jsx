import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer class Checklist extends React.Component {
  constructor(props) {
    super(props)

    this.checkCheckbox = this.checkCheckbox.bind(this);
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
    return (
      <section className="card-comment-section mt-2">
        <div>
          <i className="ion-android-checkbox-outline text-muted checklist-icon d-inline-block fa-lg"></i>
          <h6 className='d-inline-block task-modal-title'>{checklist.name}</h6>
        </div>
        <div className="checklist-item px-1">
          <div className="checklist-item-checkbox d-inline-block">
            <i className="far fa-square text-muted" onClick={this.checkCheckbox}></i>
          </div>
          <div className="checklist-item-details d-inline-block pl-2">
            <div className="checklist-item-name">
              <span>TTL needed</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Checklist;
