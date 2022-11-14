import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipiesComponent } from './recipies.component';
import { RecipesUserComponent } from './components/recipes-user/recipes-user.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { MaterialModule } from '@app/shared/material.module';
import { SharedSquirrelModule } from '@app/shared/shared.module';

const components = [
  RecipiesComponent,
  RecipeItemComponent,
  RecipesUserComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    SharedSquirrelModule,
    MaterialModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule { }
