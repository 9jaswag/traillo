import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import InternalHeader from '../dashboard/InternalHeader';
import BoardList from './BoardList';

@inject('store')
@observer class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newListName: ''
    }

    this.toggleAccessDropdown = this.toggleAccessDropdown.bind(this);
    this.hideAddListDropdown = this.hideAddListDropdown.bind(this);
    this.showAddListDropdown = this.showAddListDropdown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleDescriptionEditForm = this.toggleDescriptionEditForm.bind(this);
  }

  componentWillMount() {
    const { getBoardDetails } = this.props.store.Board;
    const params = Object.keys(this.props.match.params);
    if (params.includes('uid')) {
      getBoardDetails(this.props.match.params.uid)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.pathname != this.props.location.pathname) {
      const { getBoardDetails } = this.props.store.Board;
      const params = Object.keys(this.props.match.params);
      if (params.includes('uid')) {
        getBoardDetails(this.props.match.params.uid)
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { createList } = this.props.store.Board;
    if (this.state.newListName.length < 1) {
      console.log('enter a list name');
      return;
    }
    createList({
      name: this.state.newListName,
      board_id: this.props.match.params.uid
    })
    this.setState({ newListName: '' });
    this.hideAddListDropdown();
  }

  onChange(event) {
    this.setState({ newListName: event.target.value })
  }

  toggleAccessDropdown() {
    const dropdown = document.querySelector('.access-popover-div');
    dropdown.classList.toggle('show');
  }

  showAddListDropdown() {
    const formWrapper = document.querySelector('#add-list-wrapper');
    const submitButton = document.querySelector('.add-list-submit');
    const closeButton = document.querySelector('.add-list-close-icon');
    formWrapper.classList.add('focused');
    submitButton.classList.add('show');
    closeButton.classList.add('show');
  }

  hideAddListDropdown() {
    const formWrapper = document.querySelector('#add-list-wrapper');
    const submitButton = document.querySelector('.add-list-submit');
    const closeButton = document.querySelector('.add-list-close-icon');
    formWrapper.classList.remove('focused');
    submitButton.classList.remove('show');
    closeButton.classList.remove('show');
  }

  toggleDescriptionEditForm() {
    const button = document.querySelector('.show-desc-edit');
    const editForm = document.querySelector('.card-detail-edit');
    button.classList.toggle('collapse');
    editForm.classList.toggle('show');
  }

  render() {
    const { boardDetails } = this.props.store.Board;
    const { lists } = boardDetails;
    const boardLists = lists.map(list => (
      <BoardList list={list} key={list.id} />
    ));
    const hostUrl = `${window.location.protocol}//${window.location.host}`
    return (
      <React.Fragment>
        <div
          className='project-page'
          style={{ backgroundColor: `${boardDetails.bg_color}`, backgroundImage: `url(${hostUrl}/${boardDetails.bg_img})` }}>
          <InternalHeader bgColor='rgba(0,0,0,.15)' history={this.props.history} />
          <div className="container-fluid">
            <div className='py-3'>
              <span className="project-page__board-name d-inline-block">{boardDetails.name}</span>
              <span className="d-inline-block project-page__fav-icon"><i className="far fa-star pl-3 text-white fa-xs"></i></span>
              <span className="board-header-btn-divider"></span>
              <div className='d-inline-block'>
                <button
                  type="button"
                  className="btn btn-sm bg-transparent board-access-popover mt-1 text-white"
                  onClick={this.toggleAccessDropdown}>
                  {!boardDetails.is_private && <i className="fas fa-globe pr-1 fa-xs"></i>}
                  {boardDetails.is_private && <i className="fas fa-lock pr-1 fa-xs"></i>}
                  <span className='access type'>{boardDetails.is_private ? "Private" : "Public"}</span>
                </button>
                {/* <div className="collapse position-absolute access-popover-div bg-light">
                  <div className="p-0 access-popover py-2 border">
                    <ul className="access-ul">
                      <CreateBoardAccessList
                        access='Private'
                        text='The board is private. Only people added to the board can view and edit it.'
                        setAccess={this.setPrivateAccess}
                        createBoardAccess={createBoardAccess}
                      />
                      <CreateBoardAccessList
                        access='Public'
                        text="The board is public. It's visible to anyone with the link and will show up in search engines like Google.
                        Only people added to the board can edit it."
                        setAccess={this.setPublicAccess}
                        createBoardAccess={createBoardAccess}
                      />
                    </ul>
                  </div>
                </div> */}
              </div>
              <span className="board-header-btn-divider"></span>
            </div>
          </div>
          <div className="board-canvas">
            <div id="board">
              {lists.length > 0 && boardLists}
              <div id='add-list-wrapper' className="list-wrapper p-2">
                <form className="form-inline position-relative" onSubmit={this.onSubmit}>
                  <input
                    className="form-control col-12 add-list-input"
                    type="text"
                    placeholder="Add a list..."
                    value={this.state.newListName}
                    onChange={this.onChange}
                    onFocus={this.showAddListDropdown}
                    required />
                  <button className='btn btn-success btn-sm mt-2 add-list-submit collapse' type='submit'>Save</button>
                  <i className="ion-close-round position-absolute ml-3 add-list-close-icon collapse" onClick={this.hideAddListDropdown}></i>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="listCardModal" tabIndex={-1} role="dialog" aria-labelledby="listCardModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg " role="document">
            <div className="modal-content">
              <div className="modal-header pb-0">
                <i className="far fa-credit-card text-muted pr-2"></i>
                <h6 className="modal-title task-modal-title" id="exampleModalLongTitle">Card Title</h6>
                <div className="current-list">
                  <small>in list List Name</small>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid p-0">
                  <div className="row">
                    <div className="col-12 col-sm-8 col-lg-9 left">
                      <p className='mb-0'>
                        <button className="show-desc-edit quiet-button btn-block text-left" onClick={this.toggleDescriptionEditForm}>
                          <i className="far fa-edit pr-1"></i>
                          Edit description...
                        </button>
                      </p>
                      <section className="card-detail-edit position-relative collapse">
                        <form action="" className="inline">
                          <textarea name="" id="card-details-textarea" className='col-12 p-2' placeholder="Add a more detailed description…" required></textarea>
                          <button className="btn btn-success btn-sm" type='submit'>Save</button>
                          <i className="ion-close-round position-absolute ml-3 card-detail-close-icon" onClick={this.toggleDescriptionEditForm}></i>
                        </form>
                      </section>
                      <section className="card-comment-section mt-3">
                        <div>
                          <i className="far fa-comment text-muted d-inline-block"></i>
                          <h6 className='d-inline-block pl-2 task-modal-title'>Add Comments</h6>
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
                          <i className="fas fa-list text-muted d-inline-block"></i>
                          <h6 className='d-inline-block pl-2 task-modal-title'>Activity</h6>
                        </div>
                        <div className="new-comment position-relative">
                          <div className="member">
                            <button className="btn btn-sm btn__internal profile-pic p-0"><img className="profile-pic-image" src="https://avatars2.githubusercontent.com/u/8125356?s=460&amp;v=4" alt="Profile Picture" /></button>
                          </div>
                          <div className="activity-desc">
                            <span className="activity-owner">Chuks Opia</span>
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
                    <div className="col-12 col-sm-4 col-lg-3">
                      <h6 className='task-modal-title'>Add</h6>
                      <div className="add-buttons">
                        <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                          <i className="far fa-user pr-1"></i> Members
                        </button>
                        <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                          <i className="ion-android-checkbox-outline pr-1"></i> Checklist
                        </button>
                        <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                          <i className="far fa-clock pr-1"></i> Due Date
                        </button>
                        <button type="button" className="btn btn-secondary btn-block add-btn btn-sm">
                          <i className="fas fa-paperclip pr-1"></i> Attachment
                        </button>
                      </div>
                      <h6 className='task-modal-title mt-4'>Action</h6>
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
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default ProjectPage;

