import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CalcKcalComponent } from './calc-kcal.component';

const routes: Array<Route> = [
  { path: '', component: CalcKcalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalkKcalRoutingModule { }
