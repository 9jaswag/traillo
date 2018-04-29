import { observable, decorate, action } from "mobx";
import ReactOnRails from 'react-on-rails'
// import jwt from 'jsonwebtoken';
import TrailloAPI from "../actions/auth.action";

class TrailloStore {
  auth = {
    isLoggedIn: false,
    user: {},
    status: 'false'
  };

  constructor() {
    this.Api = new TrailloAPI;
  }

  login = (userData) => this.Api.loginAction(userData)
  signup = (userData) => this.Api.signupAction(userData)
  activate = (userData) => this.Api.accountActivateAction(userData)
  passwordResetRequest = (userData) => this.Api.passwordResetRequestAction(userData)
  passwordReset = (userData) => this.Api.passwordResetAction(userData)

}

decorate(TrailloStore, {
  auth: observable,
  login: action,
  signup: action,
  activate: action,
  passwordResetRequest: action,
  passwordReset: action
})

const store = new TrailloStore();
export default store;
