import axios from 'axios';
import setAuthToken from '../helpers/setAuthToken'

export default (userData) => {
  return axios.post('/api/signup', userData)
    .then((response) => {
      return response
    }, ({ response }) => {
      return response
    });
}

export const loginAction = (userData) => {
  return axios.post('/api/login', userData)
    .then((response) => {
      setAuthToken(response.data.token);
      return response
    }, ({ response }) => {
      setAuthToken(response.data.token);
      return response
    });
}

export const accountActivateAction = (userData) => {
  return axios.get(`/api/activate/${userData.token}?email=${userData.email}`)
    .then((response) => {
      return response
    }, ({ response }) => {
      return response
    });
}