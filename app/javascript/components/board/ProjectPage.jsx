import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import InternalHeader from '../dashboard/InternalHeader';
import BoardList from './BoardList';
import ListCardModal from './ListCardModal';

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
    this.toggleAddMemberDropdown = this.toggleAddMemberDropdown.bind(this);
    // this.toggleDescriptionEditForm = this.toggleDescriptionEditForm.bind(this);
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

  toggleAddMemberDropdown() {
    const dropdown = document.querySelector('#add-member-dropdown');
    dropdown.classList.toggle('show');
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

  render() {
    const { boardDetails, modalCard } = this.props.store.Board;
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
              <div className="board-header-btns">
                <div className="board-header-facepile">
                  <div className="member">
                    <img src="https://avatars2.githubusercontent.com/u/8125356?s=460&v=4" alt="" className="member-avatar" width="30" height="30" />
                  </div>
                  <div className="member">
                    <img src="https://avatars2.githubusercontent.com/u/8125356?s=460&v=4" alt="" className="member-avatar" width="30" height="30" />
                  </div>
                  <div className="member">
                    <img src="https://avatars2.githubusercontent.com/u/8125356?s=460&v=4" alt="" className="member-avatar" width="30" height="30" />
                  </div>
                  <div className="member">
                    <img src="https://avatars2.githubusercontent.com/u/8125356?s=460&v=4" alt="" className="member-avatar" width="30" height="30" />
                  </div>
                </div>
                <div className="board-header-btns_in">
                  <button className="btn btn-sm btn__internal p-0 member-count">25</button>
                </div>
                <div className="board-header-btns_in ml-1 position-relative">
                  <button className="btn btn-sm btn__internal p-0 member-count" onClick={this.toggleAddMemberDropdown}>
                    <i className="fas fa-user-plus"></i>
                  </button>
                  <div className="collapse" id="add-member-dropdown">
                    <div className="p-0 col-12">
                      <div className="col-12 text-center p-1">
                        <span className="text-muted">Add members</span>
                      </div><hr className="m-0 mr-3 ml-3" />
                      <div className="mt-1 px-3 py-1">
                        <form action="">
                          <input className="form-control form-control-sm add-member-search" type="text" placeholder="e.g janedoe@traillo.com" />
                        </form>
                        <div className="pt-3 pb-2">
                          <p className="m-0 quiet-text">
                            Search for a person in Traillo by name or email address, or enter an email address to invite someone new.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        <ListCardModal modalCard={modalCard} lists={lists} />
      </React.Fragment>
    );
  }
};

export default ProjectPage;

