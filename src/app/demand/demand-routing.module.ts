import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DemandComponent } from './demand.component';

const routes: Array<Route> = [
  {
    path: '', component: DemandComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DemandRoutingModule { }
