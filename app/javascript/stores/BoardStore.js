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
        console.log('error')
      }
    });

  createList = (listData) => this.Api.createListAction(listData)
    .then(response => {
      console.log(response)
    })
}

decorate(BoardStore, {
  boardDetails: observable,
  getBoardDetails: action,
  createList: action,
});

export default BoardStore;
