import { observable, decorate, action } from "mobx";
import ReactOnRails from 'react-on-rails'
// import jwt from 'jsonwebtoken';
import TrailloAPI from "../actions/auth.action";

class TrailloStore {
  @observable auth = {
    isLoggedIn: false,
    user: {},
    status: 'fasle'
  };

  constructor() {
    this.Api = new TrailloAPI;
  }

  @action login = (userData) => this.Api.loginAction(userData)
  @action signup = (userData) => this.Api.signupAction(userData)

}

// decorate(TrailloStore, {
//   auth: observable,
//   login: action,
//   signup: action
// })

const store = new TrailloStore();
export default store;
