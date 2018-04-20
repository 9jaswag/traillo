import axios from 'axios';

export default (token) => {
  if (token) {
    localStorage.setItem('jwt', token)
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    localStorage.removeItem('jwt', token)
    delete axios.defaults.headers.common['Authorization'];
  }
};

