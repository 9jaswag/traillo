import axios from 'axios';

export default class BoardAPI {
  getBoardDetailsAction(uid) {
    return axios.get(`/api/boards/${uid}`)
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }
}
