import { observable, decorate, action } from "mobx";
import ReactOnRails from 'react-on-rails'
import DashboardAPI from '../actions/dashboard.action';

class DashboardStore {
  backgroundProp = {
    bgImg: '',
    bgColor: 'rgb(0, 121, 191)'
  };
  createBoardAccess = 'Private';

  constructor() {
    console.log(ReactOnRails)
    this.Api = new DashboardAPI();
  }

  setPrivateAccess = () => {
    this.createBoardAccess = 'Private';
  }

  setPublicAccess = () => {
    this.createBoardAccess = 'Public';
  }

  createBoard = (boardData) => this.Api.createBoardAction(boardData);
}

decorate(DashboardStore, {
  backgroundProp: observable,
  createBoardAccess: observable,
  setPrivateAccess: action,
  setPublicAccess: action,
})

export default DashboardStore;
