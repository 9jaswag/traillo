import React from 'react';

class Checklist extends React.Component {
  constructor(props) {
    super(props)
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
