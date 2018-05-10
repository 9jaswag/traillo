import { observable, decorate, action } from "mobx";
import BoardAPI from '../actions/board.action';

class BoardStore {
  boardDetails = {
    lists: [],
  }
  modalCard = {
    name: '',
    checklists: []
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
  addChecklist = (checklistData) => this.Api.addChecklistAction(checklistData)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        this.modalCard.checklists.push(response.data)
      } else {
        console.log('error list not created')
      }
    });

  getCard = (id) => this.Api.getCardAction(id)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        this.modalCard = response.data;
      } else {
        console.log('error card not found')
      }
    });

  addItem = (itemData) => this.Api.addItemAction(itemData)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        const index = this.getArray(this.modalCard.checklists, response.data.id, 0)
        this.modalCard.checklists[index].items = response.data.items
      } else {
        console.log('error item not created')
      }
    });

  updateItem = (itemData) => this.Api.updateItemAction(itemData)
    .then(response => {
      let responseStatus = Number(response.status) < 300 ? "success" : 'error';
      if (responseStatus == 'success') {
        const checklistIndex = this.getArray(this.modalCard.checklists, response.data.checklist.id, 0)
        this.modalCard.checklists[checklistIndex].items = response.data.checklist.items
      } else {
        console.log('error item not updated')
      }
    });
}

decorate(BoardStore, {
  boardDetails: observable,
  modalCard: observable,
  getBoardDetails: action,
  createList: action,
  createCard: action,
  addChecklist: action,
  getCard: action,
  addItem: action,
  updateItem: action,
});

export default BoardStore;
