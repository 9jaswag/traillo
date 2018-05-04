import React from "react";
import { Link } from "react-router-dom";
import HeaderDropdown from './HeaderDropdown'
import HeaderCreateDropdown from './HeaderCreateDropdown'
import HeaderInfoDropdown from './HeaderInfoDropdown'
import NotificationDropdown from './NotificationDropdown'
import ProfileDropdown from "./ProfileDropdown";
import CreateBoardModal from "./CreateBoardModal";

class InternalHeader extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();

    this.toggleInfoDropdown = this.toggleInfoDropdown.bind(this);
    this.toggleBoardDropdown = this.toggleBoardDropdown.bind(this);
    this.toggleCreateDropdown = this.toggleCreateDropdown.bind(this);
    this.toggleNotificationDropdown = this.toggleNotificationDropdown.bind(this);
    this.toggleProfileDropdown = this.toggleProfileDropdown.bind(this);
    this.closeOpenDropdowns = this.closeOpenDropdowns.bind(this);
  }

  closeOpenDropdowns(currentDropdown) {
    const dropdowns = ['#board-dropdown', '#create-dropdown', '#info-dropdown', '#notification-dropdown', '#profile-dropdown'];
    const toClose = dropdowns.filter(dropdown => dropdown != currentDropdown);
    toClose.forEach(dropdown => {
      if (document.querySelector(dropdown).classList.contains('show')) {
        document.querySelector(dropdown).classList.remove('show');
      }
    });
  }

  toggleBoardDropdown() {
    const dropdown = document.querySelector('#board-dropdown');
    this.closeOpenDropdowns('#board-dropdown')
    dropdown.classList.toggle('show')
    this.textInput.current.focus();
  }

  toggleCreateDropdown() {
    const dropdown = document.querySelector('#create-dropdown');
    this.closeOpenDropdowns('#create-dropdown')
    dropdown.classList.toggle('show')
  }

  toggleInfoDropdown() {
    const dropdown = document.querySelector('#info-dropdown');
    this.closeOpenDropdowns('#info-dropdown')
    dropdown.classList.toggle('show')
  }

  toggleNotificationDropdown() {
    const dropdown = document.querySelector('#notification-dropdown');
    this.closeOpenDropdowns('#notification-dropdown')
    dropdown.classList.toggle('show')
  }

  toggleProfileDropdown() {
    const dropdown = document.querySelector('#profile-dropdown');
    this.closeOpenDropdowns('#profile-dropdown')
    dropdown.classList.toggle('show')
  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand navbar-light sticky-top" style={{ backgroundColor: this.props.bgColor }}>
            <button className="btn btn-sm btn__internal" onClick={this.toggleBoardDropdown}>
              <i className="fas fa-bullseye"></i>
              <span className="ml-1 d-none d-xl-inline-block d-lg-inline-block d-md-inline-block">Board</span>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <form className="form-inline my-2 my-md-0 ml-1">
                  <input className="form-control form-control-sm header-search-input" type="text" placeholder="" />
                </form>
              </ul>
              <div className="">
                <button className="btn btn-sm btn__internal" onClick={this.toggleCreateDropdown}><i className="fas fa-plus"></i></button>
                <button className="btn ml-2 btn-sm btn__internal" onClick={this.toggleInfoDropdown}><i className="fas fa-info-circle"></i></button>
                <button className="btn ml-2 btn-sm btn__internal" onClick={this.toggleNotificationDropdown}><i className="far fa-bell"></i></button>
                <button className="btn ml-2 btn-sm btn__internal profile-pic p-0" onClick={this.toggleProfileDropdown}>
                  <img className='profile-pic-image' src="https://avatars2.githubusercontent.com/u/8125356?s=460&v=4" alt="Profile Picture" />
                </button>
              </div>
            </div>
          </nav>
        </header>
        <HeaderDropdown focus={this.textInput} />
        <HeaderCreateDropdown />
        <HeaderInfoDropdown />
        <NotificationDropdown />
        <ProfileDropdown />
        <CreateBoardModal history={this.props.history} />
      </React.Fragment>
    );
  }
}

export default InternalHeader;
