import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcKcalComponent } from '../calc-kcal/calc-kcal.component';
import { ProductTableComponent } from '../products/product-table.component';

const routes: Routes = [
  { path: 'kalkulator-kcal', component: CalcKcalComponent },
  { path: 'product', component: ProductTableComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
