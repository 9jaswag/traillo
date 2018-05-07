import React from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject('store')
@observer class ListCardModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: ''
    }

    this.toggleDescriptionEditForm = this.toggleDescriptionEditForm.bind(this);
    this.addDesctiption = this.addDesctiption.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleChecklistDropdown = this.toggleChecklistDropdown.bind(this);
  }

  toggleChecklistDropdown(event) {
    const dropdown = document.querySelector('.checklist-dropdown');
    dropdown.classList.toggle('show')
  }

  onChange(event) {
    this.setState({ description: event.target.value })
  }

  addDesctiption(event) {
    event.preventDefault();
    const { description } = this.state;
    const { updateCardDescription } = this.props.store.Board;
    if (description.length < 1) {
      console.log(error);
      return;
    }
    updateCardDescription({
      description: this.state.description,
      list_id: this.props.modalCard.list_id,
      id: this.props.modalCard.id
    })
    this.toggleDescriptionEditForm();
  }

  toggleDescriptionEditForm() {
    const button = document.querySelector('.show-desc-edit');
    const buttonLink = document.querySelector('.show-desc-edit-link');
    const editForm = document.querySelector('.card-detail-edit');
    const descriptionText = document.querySelector('.card-description-text');
    if (button) {
      button.classList.toggle('collapse');
    }
    if (buttonLink) {
      buttonLink.classList.toggle('collapse');
    }
    if (!editForm.classList.contains('show')) {
      if (descriptionText) {
        this.setState({ description: descriptionText.innerHTML })
        descriptionText.classList.remove('d-block');
        descriptionText.classList.add('collapse');
      }
    } else {
      if (descriptionText) {
        descriptionText.classList.remove('collapse');
        descriptionText.classList.add('d-block');
      }
      this.setState({ description: '' })
    }
    editForm.classList.toggle('show');
  }

  render() {
    const { modalCard, lists } = this.props;
    const currentList = lists.filter(list => list.id == modalCard.list_id);
    const addDescBtn = <p className='mb-0'>
      <button className="show-desc-edit quiet-button btn-block text-left" onClick={this.toggleDescriptionEditForm}>
        <i className="far fa-edit pr-1"></i>
        Edit description...
      </button>
    </p>;
    const description = <div className="card-detail-section">
      <small className="text-muted d-block">Description</small>
      <button type="button" className="btn btn-link text-muted p-0 show-desc-edit-link" onClick={this.toggleDescriptionEditForm}>Edit</button>
      <small className="d-block card-description-text">{modalCard.description}</small>
    </div>;
    return (
      <div className="modal" id="listCardModal" tabIndex={-1} role="dialog" aria-labelledby="listCardModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg " role="document">
          <div className="modal-content">
            <div className="modal-header pb-0">
              <i className="far fa-credit-card text-muted d-inline-block fa-lg"></i>
              <h6 className="modal-title d-inline-block task-modal-title" id="exampleModalLongTitle">{modalCard.name}</h6>
              <div className="current-list position-relative">
                <small className='current-list-name'>in list <Link to='#'>{currentList.length > 0 && currentList[0].name}</Link></small>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12 col-sm-9 col-lg-9 left">
                    {modalCard.description ? description : addDescBtn}
                    <section className="card-detail-edit position-relative collapse">
                      <form action="" className="inline" onSubmit={this.addDesctiption}>
                        <textarea name=""
                          id="card-details-textarea"
                          className='col-12 p-2'
                          placeholder="Add a more detailed description…"
                          onChange={this.onChange}
                          value={this.state.description}
                          required></textarea>
                        <button className="btn btn-success btn-sm" type='submit'>Save</button>
                        <i className="ion-close-round position-absolute ml-3 card-detail-close-icon" onClick={this.toggleDescriptionEditForm}></i>
                      </form>
                    </section>
                    <section className="card-comment-section mt-3">
                      <div>
                        <i className="far fa-comment text-muted d-inline-block fa-lg"></i>
                        <h6 className='d-inline-block task-modal-title'>Add Comments</h6>
                      </div>
                      <div className="new-comment position-relative">
                        <div className="member">
                          <button className="btn btn-sm btn__internal profile-pic p-0"><img className="profile-pic-image" src="https://avatars2.githubusercontent.com/u/8125356?s=460&amp;v=4" alt="Profile Picture" /></button>
                        </div>
                        <form action="">
                          <div className="comment-frame">
                            <div className="comment-box">
                              <textarea name="" id="" className="comment-box-input"></textarea>
                              <div className="comment-box-options">
                                <Link to='#' className='comment-box-options-item'>
                                  <span className="fas fa-paperclip add-comment-icon"></span>
                                </Link>
                                <Link to='#' className='comment-box-options-item'>
                                  <span className="fas fa-at add-comment-icon"></span>
                                </Link>
                                <Link to='#' className='comment-box-options-item'>
                                  <span className="far fa-smile add-comment-icon"></span>
                                </Link>
                                <Link to='#' className='comment-box-options-item'>
                                  <span className="far fa-credit-card add-comment-icon"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="comment-controls">
                            <button className="btn btn-success btn-sm btn-disabled">Save</button>
                          </div>
                        </form>
                      </div>
                    </section>
                    <section className="card-comment-section activity-section mt-3">
                      <div>
                        <i className="fas fa-list text-muted d-inline-block fa-lg"></i>
                        <h6 className='d-inline-block task-modal-title'>Activity</h6>
                      </div>
                      <div className="new-comment position-relative">
                        <div className="member">
                          <button className="btn btn-sm btn__internal profile-pic p-0"><img className="profile-pic-image" src="https://avatars2.githubusercontent.com/u/8125356?s=460&amp;v=4" alt="Profile Picture" /></button>
                        </div>
                        <div className="activity-desc">
                          <small className="activity-owner">Chuks Opia</small>
                          <div className="comment-container">
                            <div className="action-comment">
                              <p>lorem ipsum bs lorem ipsum bs  lorem ipsum bs lorem ipsum bs lorem ipsum bslorem ipsum bs lorem ipsum bs lorem ipsum bs lorem ipsum bs</p>
                              <p>lorem ipsum bs</p>
                              <p>lorem ipsum bs</p>
                              <p>lorem ipsum bs</p>
                              <p>lorem ipsum bs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-12 col-sm-3 col-lg-3">
                    <h6 className='task-modal-title modal-sidebar-title'>Add</h6>
                    <div className="add-buttons">
                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                        <i className="far fa-user pr-1"></i> Members
                      </button>
                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm" onClick={this.toggleChecklistDropdown}>
                        <i className="ion-android-checkbox-outline pr-1"></i> Checklist
                      </button>
                      <div className="collapse checklist-dropdown" id="create-dropdown">
                        <div className="p-0 col-12">
                          <div className="col-12 text-center p-1">
                            <span className="text-muted">Add checklist</span></div>
                          <hr className="m-0 mr-3 ml-3" /><div className="mt-1">
                            <div className="container">
                              <h6 className='left-sidebar-dropdown-title'>Title</h6>
                              <form action="">
                                <input type="text" className='form-control form-control-sm' placeholder='Checklist' />
                                <button className='btn btn-sm btn-success my-2'>Add</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                        <i className="far fa-clock pr-1"></i> Due Date
                      </button>
                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                        <i className="fas fa-paperclip pr-1"></i> Attachment
                      </button>
                    </div>
                    <h6 className='task-modal-title mt-4 modal-sidebar-title'>Action</h6>
                    <div className="add-buttons">
                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                        <i className="fas fa-arrow-right pr-1"></i> Move
                        </button>
                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                        <i className="far fa-credit-card pr-1"></i> Copy
                        </button>
                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                        <i className="fas fa-eye pr-1"></i> Watch
                        </button>
                      <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                        <i className="fas fa-trash pr-1"></i> Archive
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCardModal;
