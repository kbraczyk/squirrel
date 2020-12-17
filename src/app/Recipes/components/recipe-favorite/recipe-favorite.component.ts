import { Component } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeModel } from '@app/shared/resource/recipe/recipe.interface';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';
import { BehaviorSubject } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';

@Component({
  selector: 'squirrel-recipe-favorite',
  templateUrl: './recipe-favorite.component.html',
  styleUrls: ['./recipe-favorite.component.scss']
})
export class RecipeFavoriteComponent extends AbstractComponent {
  recipes$: BehaviorSubject<RecipeModel[]> = new BehaviorSubject([]);

  constructor(private resource: RecipeRestService) {
    super();
    this.isLoading = true;
    this.resource.getFavoriteRecipe().pipe(
      filter(f => !!f),
      finalize(() => this.isLoading = false))
      .subscribe(recipes => {
        console.log(recipes);
        const recipesData = recipes.map(d => ({ ...d.recipe, isFavorite: true }));
        this.recipes$.next(recipesData);
      });
  }
}
