import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcKcalComponent } from '../calc-kcal/calc-kcal.component';
import { ProductTableComponent } from '../products/product-table.component';
import { RecipiesComponent } from '../Recipes/recipies/recipies.component';
import { AppComponent } from '../app.component';
import { ShoppingComponent } from '../shopping/shopping.component';

const routes: Routes = [
  { path : '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'kalkulator-kcal', component: CalcKcalComponent },
  { path: 'product', component: ProductTableComponent},
  { path: 'recipes', component: RecipiesComponent },
  { path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
