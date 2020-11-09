import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractComponent } from '@shared/components/abstract.component';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'squirrel-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent extends AbstractComponent {

  // tslint:disable-next-line: no-output-rename
  @Output('selected') selectedList = new EventEmitter<ShoppingListModel>();

  constructor(public service: ShoppingService) {
    super();
  }

  newList() {
    this.selectedList.emit({} as ShoppingListModel);
  }
}

export interface ShoppingListModel {
  name: string;
  creationDate: string;
  products: Array<string>;
  realized: boolean;
  realizationDate?: string;
}


