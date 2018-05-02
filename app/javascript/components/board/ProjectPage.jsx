import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import InternalHeader from '../dashboard/InternalHeader';

@inject('store')
@observer class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardDetails: {}
    }

    this.toggleAccessDropdown = this.toggleAccessDropdown.bind(this);
  }

  componentWillMount() {
    const { boardDetails } = this.props.store.Board;

    if (this.props.location.state && this.props.location.state.hasOwnProperty('board')) {
      return this.setState({ boardDetails: this.props.location.state.board })
    }

    if (boardDetails.length > 0) {
      return this.setState({ boardDetails })
    }

    if (boardDetails.length < 1 || !this.props.location.state || !this.props.location.state.hasOwnProperty('board')) {
      this.props.history.push('/dashboard');
    }
  }

  componentDidMount() {
    if (Object.keys(this.state.boardDetails).length < 1) {
      this.props.history.push('/dashboard');
    }
  }

  toggleAccessDropdown() {
    const dropdown = document.querySelector('.access-popover-div');
    dropdown.classList.toggle('show');
  }

  render() {
    const { boardDetails } = this.state;
    const hostUrl = `${window.location.protocol}//${window.location.host}`
    return (
      <React.Fragment>
        <div
          className='project-page'
          style={{ backgroundColor: `${boardDetails.bg_color}`, backgroundImage: `url(${hostUrl}/${boardDetails.bg_img})` }}>
          <InternalHeader bgColor='rgba(0,0,0,.15)' />
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
        </div>
      </React.Fragment>
    );
  }
};

export default ProjectPage;

