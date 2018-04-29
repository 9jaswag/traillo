import axios from 'axios';
import setAuthToken from '../helpers/setAuthToken';

export default class TrailloAPI {
  loginAction(userData) {
    return axios.post('/api/login', userData)
      .then(response => {
        setAuthToken(response.data.token);
        return response;
      }, ({ response }) => {
        setAuthToken(response.data.token);
        return response;
      });
  }

  signupAction(userData) {
    return axios.post('/api/signup', userData)
      .then((response) => {
        return response
      }, ({ response }) => {
        return response
      });
  }

  accountActivateAction(userData) {
    return axios.get(`/api/activate/${userData.token}?email=${userData.email}`)
      .then((response) => {
        return response
      }, ({ response }) => {
        return response
      });
  }

  passwordResetRequestAction(userData) {
    return axios.post('/api/password-reset', userData)
      .then((response) => {
        return response
      }, ({ response }) => {
        return response
      });
  }

  passwordResetAction(userData) {
    return axios.patch(`/api/reset/${userData.token}?email=${userData.email}`, userData)
      .then((response) => {
        return response
      }, ({ response }) => {
        return response
      });
  }
}
