import { observable, decorate, action } from "mobx";
import BoardAPI from '../actions/board.action';

class BoardStore {
  boardDetails = {
    lists: []
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
}

decorate(BoardStore, {
  boardDetails: observable,
  getBoardDetails: action,
  createList: action,
  createCard: action,
});

export default BoardStore;
