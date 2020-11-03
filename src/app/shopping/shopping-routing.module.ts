import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';

const routes: Array<Route> = [
  {
    path: '', component: ShoppingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
