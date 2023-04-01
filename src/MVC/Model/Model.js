import ItemsDB from "./ItemsDB";

class Model {
  constructor() {
    this.itemsDB = ItemsDB;
  }

  getLocal = str => {
    return JSON.parse(localStorage.getItem(str));
  };

  setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  removeLocal = key => {
    localStorage.removeItem(key);
  };
}

export default Model;
