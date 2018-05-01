import axios from 'axios';

export default class DashboardAPI {
  createBoardAction(boardData) {
    return axios.post('/api/boards', boardData)
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }

  getUserBoardsAction() {
    return axios.get('/api/boards')
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }
}
