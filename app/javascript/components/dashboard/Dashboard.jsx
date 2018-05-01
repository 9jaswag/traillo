import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import InternalHeader from './InternalHeader';
import ProjectBoard from './ProjectBoard';

@inject('store')
@observer class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { getUserBoards } = this.props.store.Dashboard;
    getUserBoards();
  }

  render() {
    const { userBoards } = this.props.store.Dashboard;
    const boards = userBoards.map(board =>
      (<ProjectBoard
        key={board.id}
        bgImg={board.bg_img}
        bgColor={board.bg_color}
        name={board.name}
        url={`/api/boards/${board.id}`}
      />)
    );
    return (
      <React.Fragment>
        <InternalHeader />
        <div className="container-fluid dashboard-wrapper">
          <div className="row">
            <div className="col-12">
              <i className="far fa-user"></i>
              <h6 className="d-inline-block ml-2 dashboard-header">Personal Boards</h6>
            </div>
          </div>
          <div className="container-fluid p-0">
            <div className="row align-items-center">
              {userBoards.length > 0 && boards}
              <div className="col-12 col-sm-4 col-md-3 p-3">
                <button
                  className="col-12 project-board create-board-card"
                  style={{ backgroundColor: "#d6dadc" }}
                  data-toggle="modal" data-target="#createBoardModal">
                  <h6 className="d-inline project-name">Create new board...</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Dashboard;

// chuks24ng@yahoo.co.uk
