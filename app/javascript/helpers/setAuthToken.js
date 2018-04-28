import axios from 'axios';

export default (token) => {
  if (token) {
    localStorage.setItem('jwtToken', token)
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    localStorage.removeItem('jwtToken', token)
    delete axios.defaults.headers.common['Authorization'];
  }
};

