import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcKcalComponent } from '../calc-kcal/calc-kcal.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'kalkulator-kcal', component: CalcKcalComponent },
  { path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
