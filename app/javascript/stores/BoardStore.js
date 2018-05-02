import { observable, decorate, action } from "mobx";

class BoardStore {
  boardDetails = []
}

decorate(BoardStore, {
  boardDetails: observable,
});

export default BoardStore;
