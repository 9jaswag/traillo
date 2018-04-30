import { observable, decorate, action } from "mobx";
import ReactOnRails from 'react-on-rails'

class DashboardStore {
  backgroundProp = {
    bgImg: '',
    bgColor: 'rgb(0, 121, 191)'
  }
  createBoardAccess = 'Private'
  setPrivateAccess = () => {
    this.createBoardAccess = 'Private';
  }

  setPublicAccess = () => {
    this.createBoardAccess = 'Public';
  }
}

decorate(DashboardStore, {
  backgroundProp: observable,
  createBoardAccess: observable,
  setPrivateAccess: action,
  setPublicAccess: action,
})

export default DashboardStore;
