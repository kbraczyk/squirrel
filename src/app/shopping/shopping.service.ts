import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingListModel } from './components/shopping-list/shopping-list.component';

@Injectable()
export class ShoppingService {
  public shoppingLists$ = new BehaviorSubject<Array<ShoppingListModel>>([]);

  private mockLists: Array<ShoppingListModel> = [
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

  constructor() {
    this.shoppingLists$.next(this.mockLists);
  }

  createNewList(data: ShoppingListModel) {
    this.mockLists.unshift(data);
  }

  editList(name: string, data: ShoppingListModel) {
    const findIndex = this.mockLists.findIndex(f => f.name === name);
    this.mockLists[findIndex] = data;
  }

}
