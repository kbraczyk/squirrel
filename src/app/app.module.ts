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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    CalcKcalComponent,
    HomeComponent,
    ErrorFormComponent,
    CalkKcalInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [CalkKcalInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
