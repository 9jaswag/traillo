import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderDropdownBoard from './HeaderDropdownBoard';
import { inject, observer } from "mobx-react";

@inject('store')
@observer class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { getUserBoards, userBoards } = this.props.store.Dashboard;
    getUserBoards();
  }

  render() {
    const { focus } = this.props
    const { userBoards } = this.props.store.Dashboard;
    const boards = userBoards.map(board => (
      <HeaderDropdownBoard
        key={board.id}
        url={`/board/${board.uid}/${board.name.replace(/ /g, '-').toLocaleLowerCase()}`}
        bgImg={board.bg_img}
        bgColor={board.bg_color}
        name={board.name}
      />
    ));
    return (
      <div className="collapse" id="board-dropdown">
        <div className="p-1 col-7 col-sm-4 col-md-3 col-lg-3">
          <form className="form-inline my-2 my-md-0 ml-1">
            <input className="form-control form-control-sm board-dropdown-search-input col-12" type="text" placeholder="Find boards by name..." ref={focus} />
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

