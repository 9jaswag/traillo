import { observable, decorate, action } from "mobx";
import jwt from 'jsonwebtoken';
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

  login = (userData) => {
    this.Api.loginAction(userData).then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        const token = localStorage.getItem('jwtToken');
        this.auth.isLoggedIn = true;
        this.auth.user = jwt.decode(response.data.token);
        this.auth.status = 'true'
      }
    });
  }

}

decorate(TrailloStore, {
  auth: observable,
  login: action
})

const store = new TrailloStore();
export default store;
