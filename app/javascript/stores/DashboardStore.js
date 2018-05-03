import { observable, decorate, action } from "mobx";
import ReactOnRails from 'react-on-rails';
import DashboardAPI from '../actions/dashboard.action';

class DashboardStore {
  backgroundProp = {
    bgImg: '',
    bgColor: 'rgb(0, 121, 191)'
  };
  createBoardAccess = 'Private';
  userBoards = [];

  constructor() {
    this.Api = new DashboardAPI();
  }

  setPrivateAccess = () => {
    this.createBoardAccess = 'Private';
  }

  setPublicAccess = () => {
    this.createBoardAccess = 'Public';
  }

  createBoard = (boardData) => this.Api.createBoardAction(boardData);
  getUserBoards = () => this.Api.getUserBoardsAction()
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        this.userBoards = response.data
      } else {
        if (localStorage.jwt) {
          localStorage.removeItem('jwt');
        }
        window.location.pathname = '/login';
      }
    });
}

decorate(DashboardStore, {
  backgroundProp: observable,
  createBoardAccess: observable,
  userBoards: observable,
  setPrivateAccess: action,
  setPublicAccess: action,
  getUserBoards: action,
});

export default DashboardStore;
