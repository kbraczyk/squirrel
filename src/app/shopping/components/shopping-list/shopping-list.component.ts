import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractComponent } from 'src/app/common/components/abstract.component';

@Component({
  selector: 'squirrel-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent extends AbstractComponent {
  public shoppingLists$ = new BehaviorSubject<Array<ShoppingListModel>>([]);

  // tslint:disable-next-line: no-output-rename
  @Output('selected') selectedList = new EventEmitter<ShoppingListModel>();

  constructor() {
    super();
    this.shoppingLists$.next(mockLists);
  }
}

export interface ShoppingListModel {
  name: string;
  creationDate: string;
  products: Array<string>;
  realized: boolean;
  realizationDate?: string;
}

const mockLists: Array<ShoppingListModel> = [
  {
    name: 'Nazwa 1',
    creationDate: '07-10-2020',
    products: ['chleb', 'mleko', 'pepsi', 'mydło', 'powidło'],
    realized: false,
  },
  {
    name: 'Nazwa 2',
    creationDate: '05-10-2020',
    products: ['marchew', 'ser', 'czosnek', 'zioła'],
    realized: false,
  },
  {
    name: 'Moja lista zakupów',
    creationDate: '01-10-2020',
    products: ['mleko', 'piwo'],
    realized: true,
    realizationDate: '02-10-2020'
  },
  {
    name: 'Nazwa 4',
    creationDate: '03-10-2020',
    products: [],
    realized: false,
  },
  {
    name: 'Nazwa 5',
    creationDate: '20-09-2020',
    products: [],
    realized: false,
  }
];
