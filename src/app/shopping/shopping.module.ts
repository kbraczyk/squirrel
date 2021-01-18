import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@shared/material.module';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingDetailsComponent } from './components/shopping-details/shopping-details.component';
import { ShoppingService } from './shopping.service';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedSquirrelModule } from '@app/shared/shared.module';
@NgModule({
    declarations: [ShoppingComponent, ShoppingListComponent, ShoppingDetailsComponent],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        SharedSquirrelModule,
        ShoppingRoutingModule
    ],
    exports: [RouterModule],
    providers: [ShoppingService]
})
export class ShoppingModule { }
