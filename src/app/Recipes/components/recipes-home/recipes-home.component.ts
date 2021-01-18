import { Component } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';

@Component({
  selector: 'squirrel-recipes-home',
  templateUrl: './recipes-home.component.html',
  styleUrls: ['./recipes-home.component.scss']
})
export class RecipesHomeComponent extends AbstractComponent {
  constructor() {
    super();
  }
}
