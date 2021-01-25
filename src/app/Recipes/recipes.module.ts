import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipiesComponent } from './recipies.component';
import { RecipesUserComponent } from './components/recipes-user/recipes-user.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { MaterialModule } from '@app/shared/material.module';
import { SharedSquirrelModule } from '@app/shared/shared.module';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormModule } from '@app/shared/form.module';
import { RecipeOwnComponent } from './components/recipe-own/recipe-own.component';
import { RecipeFavoriteComponent } from './components/recipe-favorite/recipe-favorite.component';
import { RecipesHomeComponent } from './components/recipes-home/recipes-home.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { MatChipsModule } from '@angular/material';

const components = [
  RecipiesComponent,
  RecipesHomeComponent,
  RecipeItemComponent,
  RecipesUserComponent,
  RecipeFormComponent,
  RecipeOwnComponent,
  RecipeFavoriteComponent,
  RecipeDetailsComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedSquirrelModule,
    MaterialModule,
    MatChipsModule,
    RecipesRoutingModule,
    CKEditorModule,
    FormModule
  ],
})
export class RecipesModule { }
