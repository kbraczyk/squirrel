import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SessionGuard } from '@app/session.guard';
import { RecipeFavoriteComponent } from './components/recipe-favorite/recipe-favorite.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeOwnComponent } from './components/recipe-own/recipe-own.component';
import { RecipesHomeComponent } from './components/recipes-home/recipes-home.component';
import { RecipiesComponent } from './recipies.component';

const routes: Array<Route> = [{
  path: '', component: RecipiesComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: RecipesHomeComponent },
    { path: 'own', component: RecipeOwnComponent, canActivate: [SessionGuard] },
    {
      path: 'new', component: RecipeFormComponent,
      //  canActivate: [SessionGuard]
    },
    { path: 'favorite', component: RecipeFavoriteComponent, canActivate: [SessionGuard] }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
