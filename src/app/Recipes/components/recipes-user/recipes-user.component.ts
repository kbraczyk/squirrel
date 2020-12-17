import { Component } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeModel } from '@app/shared/resource/recipe/recipe.interface';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';
import { SessionService } from '@app/shared/service/session.service';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';
@Component({
  selector: 'squirrel-recipes-user',
  templateUrl: './recipes-user.component.html',
  styleUrls: ['./recipes-user.component.scss']
})
export class RecipesUserComponent extends AbstractComponent {
  public recipes$: BehaviorSubject<RecipeModel[]> = new BehaviorSubject([]);
  public availableFavorite = true;

  constructor(private resource: RecipeRestService, private session: SessionService) {
    super();
    this.isLoading = true;
    const sessionExist = session.sessionExist();
    sessionExist ? this.getRecipeWithFavorite() : this.getRecipe();
    sessionExist ? this.availableFavorite = true : this.availableFavorite = false;
  }

  private getRecipeWithFavorite() {
    forkJoin([this.resource.getFavoriteRecipe(), this.resource.getRecipes()]).pipe(
      filter(f => !!f),
      finalize(() => this.isLoading = false),
      map(data => ({ favorite: data[0], recipes: data[1] })),
      map(data => {
        data.favorite.forEach(element => {
          const index = data.recipes.findIndex(f => f.id === element.recipe.id);
          if (index !== -1) {
            data.recipes[index].isFavorite = true;
          }
        });
        return data;
      }
      )).subscribe(data => this.recipes$.next(data.recipes));
  }

  private getRecipe() {
    this.resource.getRecipes().pipe(
      filter(f => !!f),
      finalize(() => this.isLoading = false)).subscribe(data => this.recipes$.next(data));
  }

}
