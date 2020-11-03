import { Component } from '@angular/core';
import { AbstractComponent } from '@common/components/abstract.component';

@Component({
  selector: 'squirrel-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent extends AbstractComponent {
  constructor() {
    super();
  }

  setActiveProduct(item) {
    this.setActiveProduct(item);
  }

}
