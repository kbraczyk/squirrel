import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { ProductTableComponent } from '../products/product-table.component';
import { RecipiesComponent } from '../Recipes/recipies/recipies.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'calc-kcal', loadChildren: () => import('../calc-kcal/calk-kcal.module').then(m => m.CalkKcalModule) },
  { path: 'product', component: ProductTableComponent, data: { breadcrumb: { label: 'Lista dobrych produktów', route: '/products' } } },
  { path: 'recipes', component: RecipiesComponent, data: { breadcrumb: { label: 'Przepisy', route: '/recipes' } } },
  { path: 'shopping', loadChildren: () => import('../shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'demand', loadChildren: () => import('../demand/demand.module').then(m => m.DemandModule) }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false, })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
