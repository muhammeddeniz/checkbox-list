import { observable, action } from "mobx";
import { observer } from "mobx-react";

class Store {
  @observable
  Checked: Array<string> = [];

  @action
  AddChecked = (newItem: string) => {
    this.Checked.push(newItem);
  };

  @action
  RemoveChecked = (Item: string) => {
    const index = this.Checked.indexOf(Item);
    if (index > -1) {
      this.Checked.splice(index, 1);
    }
  };
}
export default Store;
