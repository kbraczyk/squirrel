import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './common/app-routing.module';
import { CalcKcalComponent } from './calc-kcal/calc-kcal.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './common/material.module';
import { CommonModule } from '@angular/common';
import { ErrorFormComponent } from './common/components/form/error-form/error-form.component';
import { CalkKcalInfoComponent } from './calc-kcal/calk-kcal-info/calk-kcal-info.component';
import { ResultKcalComponent } from './calc-kcal/result-kcal/result-kcal.component';
import { FormaterPipe } from './common/pipe/formater.pipe';
import { TableComponent } from './common/components/table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    CalcKcalComponent,
    HomeComponent,
    ErrorFormComponent,
    CalkKcalInfoComponent,
    ResultKcalComponent,
    FormaterPipe,
    TableComponent
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
  providers: [],
  entryComponents: [CalkKcalInfoComponent, ResultKcalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
