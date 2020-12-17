import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeModel } from '@app/shared/resource/recipe/recipe.interface';

@Component({
  selector: 'squirrel-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;
  @Input() availableFavorite: boolean = true;
  constructor() { }
}
