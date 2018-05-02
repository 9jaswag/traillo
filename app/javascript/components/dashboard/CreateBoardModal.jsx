import React from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import { action } from "mobx";
import BackgroundGrid from './BackgroundGrid';
import CreateBoardAccessList from './CreateBoardAccessList';


@inject('store')
@observer export default class CreateBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      canSubmit: false
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.toggleAccessDropdown = this.toggleAccessDropdown.bind(this);
    this.setPrivateAccess = this.setPrivateAccess.bind(this);
    this.setPublicAccess = this.setPublicAccess.bind(this);
  }

  onChange(event) {
    this.setState({ title: event.target.value })
  }

  onKeyUp(event) {
    const isFilled = (this.state.title.length > 0) ? true : false;
    this.setState({ canSubmit: isFilled })
  }

  onSubmit(event) {
    const { backgroundProp, createBoardAccess, createBoard } = this.props.store.Dashboard;
    event.preventDefault();
    if (this.state.title.trim().length < 1) {
      return console.log('error')
    }
    const bg_img = backgroundProp['bgImg'];
    const bg_color = backgroundProp['bgColor'];
    createBoard({
      name: this.state.title.trim(),
      bg_img,
      bg_color,
      is_private: createBoardAccess
    })
    .then(response => {
      const board = response.data.board;
      this.props.store.Board.boardDetails = board;
      this.props.history.push(`/board/${board.uid}/${board.name.replace(/ /g, '-').toLocaleLowerCase()}`)
    })
  }

  toggleAccessDropdown() {
    const dropdown = document.querySelector('.access-popover-div');
    // const dropdown = document.querySelector('#createBoardModal');
    dropdown.classList.toggle('show');
  }

  setPrivateAccess() {
    const { setPrivateAccess } = this.props.store.Dashboard;
    setPrivateAccess();
    this.toggleAccessDropdown();
  }

  setPublicAccess() {
    const { setPublicAccess } = this.props.store.Dashboard;
    setPublicAccess();
    this.toggleAccessDropdown();
  }

  render() {
    const { backgroundProp, createBoardAccess } = this.props.store.Dashboard;
    return (
      <div className="modal fade" id="createBoardModal" tabIndex={-1} role="dialog" aria-labelledby="createBoardModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body">
              <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-7 col-sm-8 create-modal-form pl-2"
                    style={{ backgroundColor: backgroundProp.bgColor, backgroundImage: `url(${backgroundProp.bgImg})` }}>
                    <form className="form-inline pt-2 position-relative" onSubmit={this.onSubmit}>
                      <input
                        className="form-control form-control-sm board-name col-10"
                        type="text" value={this.state.title}
                        placeholder="Add board title"
                        onChange={this.onChange}
                        onKeyUp={this.onKeyUp}
                        autoComplete="off"
                        required />
                      <button
                        type="button"
                        className="btn btn-sm bg-transparent board-access-popover mt-1 text-white"
                        onClick={this.toggleAccessDropdown}>
                        {createBoardAccess == 'Public' && <i className="fas fa-globe pr-1 fa-xs"></i>}
                        {createBoardAccess == 'Private' && <i className="fas fa-lock pr-1 fa-xs"></i>}
                        <small className='access type'>{createBoardAccess}</small>
                        <i className="fas fa-caret-down d-inline-block pl-1"></i>
                      </button>
                      <div className="collapse position-absolute access-popover-div bg-light">
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
                      </div>
                    </form>
                  </div>
                  <div className="col-4 col-sm-3 create-modal-background-grid mb-0 pr-1">
                    <ul className='background-grid mb-0'>
                      <BackgroundGrid bgImg='assets/bg-1.jpg' />
                      <BackgroundGrid bgImg='assets/bg-2.jpg' />
                      <BackgroundGrid bgImg='assets/bg-3.jpg' />
                      <BackgroundGrid bgImg='assets/bg-4.jpg' />
                      <BackgroundGrid bgColor='rgb(0, 121, 191)' />
                      <BackgroundGrid bgColor='rgb(210, 144, 52)' />
                      <BackgroundGrid bgColor='rgb(81, 152, 57)' />
                      <BackgroundGrid bgColor='rgb(176, 70, 50)' />
                      <BackgroundGrid bgColor='rgb(25, 8, 4)' />
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success btn-sm mt-2 text-white border-0"
                    onClick={this.onSubmit}
                    disabled={!this.state.canSubmit}>Create Board</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
