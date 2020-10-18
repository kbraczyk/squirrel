import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SELECT_ITEM_HEIGHT_EM, SELECT_PANEL_MAX_HEIGHT } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../common/material.module';
import { ShoppingComponent } from './shopping.component';

const routes: Routes = [
    { path : '', component: ShoppingComponent},
  ];

@NgModule({
    declarations: [ShoppingComponent],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class ShoppingModule { }
