import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcKcalComponent } from '../calc-kcal/calc-kcal.component';
import { DemandComponent } from '../demand/demand.component';
import { ProductTableComponent } from '../products/product-table.component';
import { RecipiesComponent } from '../Recipes/recipies/recipies.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'kalkulator-kcal', component: CalcKcalComponent, data: {
      breadcrumb: { label: 'Kalkulator kalorii', route: '/kalkulator-kcal' }
    }
  },
  { path: 'product', component: ProductTableComponent, data: { breadcrumb: { label: 'Lista dobrych produktów', route: '/products' } } },
  { path: 'recipes', component: RecipiesComponent, data: { breadcrumb: { label: 'Przepisy', route: '/recipes' } } },
  { path: 'shopping', loadChildren: () => import('../shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'demand', component: DemandComponent, data: { breadcrumb: { label: 'Zapotrzebowanie kaloryczne', route: '/demand' } } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
