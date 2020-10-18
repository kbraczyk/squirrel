import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcKcalComponent } from '../calc-kcal/calc-kcal.component';
import { ProductTableComponent } from '../products/product-table.component';
import { RecipiesComponent } from '../Recipes/recipies/recipies.component';

const routes: Routes = [
  { path : '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'kalkulator-kcal', component: CalcKcalComponent },
  { path: 'product', component: ProductTableComponent},
  { path: 'recipes', component: RecipiesComponent },
  { path: 'shopping', loadChildren: () => import('../shopping/shopping.module').then(m => m.ShoppingModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
