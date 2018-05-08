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

  createListAction(listData) {
    return axios.post(`/api/boards/${listData.board_id}/lists`, listData)
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }

  createCardAction(cardData) {
    return axios.post(`/api/lists/${cardData.list_id}/cards`, cardData)
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }

  updateCardDescriptionAction(cardData) {
    return axios.put(`/api/lists/${cardData.list_id}/cards/${cardData.id}`, cardData)
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }

  addChecklistAction(checklistData) {
    return axios.post(`/api/cards/${checklistData.card_id}/checklists`, checklistData)
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }

  getCardAction(id) {
    return axios.get(`/api/cards/${id}`)
      .then(response => {
        return response;
      }, ({ response }) => {
        return response;
      });
  }
}
