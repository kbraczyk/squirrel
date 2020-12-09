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


const components = [
  RecipiesComponent,
  RecipeItemComponent,
  RecipesUserComponent,
  RecipeFormComponent,
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
    RecipesRoutingModule,
    CKEditorModule
  ]
})
export class RecipesModule { }
