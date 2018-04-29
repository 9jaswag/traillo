import { observable, decorate, action } from "mobx";
import ReactOnRails from 'react-on-rails'

class DashboardStore {
  backgroundProp = {
    bgImg: '',
    bgColor: 'rgb(0, 121, 191)'
  }
}

decorate(DashboardStore, {
  backgroundProp: observable
})

export default DashboardStore;
