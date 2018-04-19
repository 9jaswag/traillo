import makeRequest from '../helpers/fetch';

export default (userData) => {
  return makeRequest('/api/signup', "POST", userData)
    .then(data => (data));
}
