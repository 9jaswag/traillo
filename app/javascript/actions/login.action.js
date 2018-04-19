import makeRequest from '../helpers/fetch';

export default (userData) => {
  return makeRequest('/api/login', "POST", userData)
  // .then(data => data);
}
