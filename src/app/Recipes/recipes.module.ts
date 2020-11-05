import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSquirrelModule } from '@app/common/common.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipiesComponent } from './recipies.component';
import { RecipesUserComponent } from './components/recipes-user/recipes-user.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { MaterialModule } from '@app/common/material.module';

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
    CommonSquirrelModule,
    MaterialModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule { }
