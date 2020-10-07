import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'squirrel-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {
  public shoppingLists$ = new BehaviorSubject<Array<ShoppingListModel>>([]);

  constructor() {
    this.shoppingLists$.next(mockLists);
  }

}

interface ShoppingListModel {
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


