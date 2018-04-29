import { observable, decorate, action } from "mobx";
import jwt from 'jsonwebtoken';
import TrailloAPI from "../actions/auth.action";

class TrailloStore {
  auth = {
    isLoggedIn: false,
    user: {}
  };

  constructor() {
    this.Api = new TrailloAPI;
  }

  login = (userData) => this.Api.loginAction(userData)

}

decorate(TrailloStore, {
  auth: observable,
  login: action
})

const store = new TrailloStore();
export default store;
