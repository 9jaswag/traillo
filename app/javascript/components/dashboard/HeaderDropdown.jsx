import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderDropdownBoard from './HeaderDropdownBoard';
import { inject, observer } from "mobx-react";

@inject('store')
@observer class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredBoards: [],
      filterInput: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    const { getUserBoards, userBoards } = this.props.store.Dashboard;
    getUserBoards();
  }

  onChange(event) {
    this.setState({ filterInput: event.target.value })
  }

  onClick(event) {
    const dropdown = document.querySelector('#board-dropdown');
    dropdown.classList.remove('show')
  }

  onKeyUp(event) {
    // filter boards
    const { userBoards } = this.props.store.Dashboard;
    const { filterInput } = this.state;
    const filteredBoards = userBoards.filter(board => {
      if (board.name.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())) {
        return board;
      }
    });
    this.setState({ filteredBoards: filteredBoards });
  }

  render() {
    const { focus } = this.props
    const { userBoards } = this.props.store.Dashboard;
    const { filteredBoards } = this.state;
    const displayedBoards = filteredBoards.length < 1 ? userBoards : filteredBoards;
    const boards = displayedBoards.map(board => (
      <HeaderDropdownBoard
        key={board.id}
        url={`/board/${board.uid}/${board.name.replace(/ /g, '-').toLocaleLowerCase()}`}
        bgImg={board.bg_img}
        bgColor={board.bg_color}
        name={board.name}
        onClick={this.onClick}
      />
    ));
    return (
      <div className="collapse" id="board-dropdown">
        <div className="p-1 col-7 col-sm-4 col-md-3 col-lg-3">
          <form className="form-inline my-2 my-md-0 ml-1">
            <input
              className="form-control form-control-sm board-dropdown-search-input col-12"
              type="text"
              placeholder="Find boards by name..."
              value={this.state.filterInput}
              onKeyUp={this.onKeyUp}
              onChange={this.onChange}
              ref={focus} />
          </form>
          <div className=''>
            <div className="col-12 board-dropdown-section position-relative p-3">
              <i className="far fa-star text-muted"></i>
              <span className="section-title ml-1 text-muted">Personal Boards</span>
              <i className="fas fa-minus float-right pr-3 text-muted position-absolute"></i>
            </div>
            <ul className="board-dropdown-projects mt-2">
              {userBoards.length > 0 && boards}
            </ul>
            <div className="">
              <button className="btn btn-light btn-sm btn-block text-left" data-toggle="modal" data-target="#createBoardModal">Create new board...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderDropdown;

