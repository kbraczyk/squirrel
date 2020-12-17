import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeModel } from '@app/shared/resource/recipe/recipe.interface';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';
import { BehaviorSubject } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';

@Component({
  selector: 'squirrel-recipe-own',
  templateUrl: './recipe-own.component.html',
  styleUrls: ['./recipe-own.component.scss']
})
export class RecipeOwnComponent extends AbstractComponent {
  recipes$: BehaviorSubject<Array<RecipeModel>> = new BehaviorSubject([]);

  constructor(private resource: RecipeRestService) {
    super();
    this.isLoading = true;
    this.resource.getOwnRecipes().pipe(
      filter(f => !!f),
      finalize(() => this.isLoading = false))
      .subscribe(recipes => this.recipes$.next(recipes as any));
  }



}
