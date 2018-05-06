import { observable, decorate, action } from "mobx";
import BoardAPI from '../actions/board.action';

class BoardStore {
  boardDetails = {
    lists: [],
  }
  modalCard = {
    name: ''
  }

  constructor() {
    this.Api = new BoardAPI();
  }

  getBoardDetails = (uid) => this.Api.getBoardDetailsAction(uid)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        this.boardDetails = response.data
      } else {
        console.log('error to 404 page')
      }
    });

  createList = (listData) => this.Api.createListAction(listData)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        this.boardDetails = response.data
      } else {
        console.log('error list n ot created')
      }
    });

  createCard = (listData) => this.Api.createCardAction(listData)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        this.boardDetails.lists.forEach(list => {
          if (list.id == response.data.list.id) {
            list.cards.push(response.data)
          }
        });
      } else {
        console.log('error list not created')
      }
    });
  setModalCard = (card) => this.modalCard = card;
  updateCardDescription = (cardData) => this.Api.updateCardDescriptionAction(cardData)
    .then(response => {
      const listIndex = this.getArray(this.boardDetails.lists, response.data.list.id, 0);
      const cardIndex = this.getArray(this.boardDetails.lists[listIndex].cards, response.data.id, 0);
      this.boardDetails.lists[listIndex].cards[cardIndex].description = response.data.description;
    });
  getArray = (array, id, count) => {
    if (array[0].id == id) {
      return count;
    } else {
      return this.getArray(array.slice(1), id, count + 1)
    }
  }
}

decorate(BoardStore, {
  boardDetails: observable,
  modalCard: observable,
  getBoardDetails: action,
  createList: action,
  createCard: action,
  setModalCard: action,
});

export default BoardStore;
