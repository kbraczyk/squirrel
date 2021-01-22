import { Component, Input } from '@angular/core';
import { RecipeModel } from '@app/shared/resource/recipe/recipe.interface';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';

@Component({
  selector: 'squirrel-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;
  @Input() availableFavorite: boolean = true;
  constructor(private resource: RecipeRestService) { }

  public changeFavoriteState(): void {

    !this.recipe.isFavorite ?
      this.resource.setAsFavorite(this.recipe.id).subscribe() : this.resource.unsetAsFavorite(this.recipe.id).subscribe();

    this.recipe.isFavorite = !this.recipe.isFavorite;
  }
}