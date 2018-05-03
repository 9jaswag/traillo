import { observable, decorate, action } from "mobx";
import BoardAPI from '../actions/board.action';

class BoardStore {
  boardDetails = []

  constructor() {
    this.Api = new BoardAPI();
  }

  getBoardDetails = (uid) => this.Api.getBoardDetailsAction(uid)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        this.boardDetails = response.data.board
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
