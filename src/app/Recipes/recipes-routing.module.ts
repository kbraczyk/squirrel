import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RecipesUserComponent } from './components/recipes-user/recipes-user.component';
import { RecipiesComponent } from './recipies.component';

const routes: Array<Route> = [{
  path: '', component: RecipiesComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: RecipesUserComponent }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
