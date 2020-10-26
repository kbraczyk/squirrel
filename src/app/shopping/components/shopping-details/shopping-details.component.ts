import { Component, Input, OnInit } from '@angular/core';
import { AbstractComponent } from 'src/app/common/components/abstract.component';
import { ShoppingListModel } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'squirrel-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailsComponent extends AbstractComponent {
  @Input() list: ShoppingListModel;

  constructor() {
    super();
    this.noContentInfo = 'Nie wybrano listy zakupów.';
    this.sugestionInfo = 'Wybierz jedną z list, aby zobaczyć jej szczegóły.';
  }

}
