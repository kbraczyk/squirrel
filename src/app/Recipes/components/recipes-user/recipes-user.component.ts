import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeModel } from '@app/shared/resource/recipe/recipe.interface';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';
import { BehaviorSubject } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';

@Component({
  selector: 'squirrel-recipes-user',
  templateUrl: './recipes-user.component.html',
  styleUrls: ['./recipes-user.component.scss']
})
export class RecipesUserComponent extends AbstractComponent {
  public recipes$: BehaviorSubject<Array<RecipeModel>> = new BehaviorSubject([]);

  constructor(private resource: RecipeRestService) {
    super();
    this.isLoading = true;
    this.resource.getOwnRecipe().pipe(
      filter(f => !!f),
      finalize(() => this.isLoading = false))
      .subscribe(recipes => this.recipes$.next(recipes as any));
  }



}
