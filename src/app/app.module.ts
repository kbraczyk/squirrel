import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './common/app-routing.module';
import { CalcKcalComponent } from './calc-kcal/calc-kcal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './common/material.module';
import { CommonModule } from '@angular/common';
import { ErrorFormComponent } from './common/components/form/error-form/error-form.component';
import { CalkKcalInfoComponent } from './calc-kcal/calk-kcal-info/calk-kcal-info.component';
import { ResultKcalComponent } from './calc-kcal/result-kcal/result-kcal.component';
import { FormaterPipe } from './common/pipe/formater.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { ProductTableComponent } from './products/product-table.component';
import { MatPaginatorIntl } from '@angular/material';
import { CustomPaginator } from './common/components/table/customPaginatorConfig';
import { RecipiesComponent } from './Recipes/recipies/recipies.component';
import { RecipeItemComponent } from './Recipes/recipe-item/recipe-item.component';
import { StorageService } from './common/service/storage.service';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    CalcKcalComponent,
    ErrorFormComponent,
    CalkKcalInfoComponent,
    ResultKcalComponent,
    FormaterPipe,
    ProductTableComponent,
    TabsComponent,
    RecipiesComponent,
    RecipeItemComponent,
    ShoppingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    StorageService,
  { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  entryComponents: [CalkKcalInfoComponent, ResultKcalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
