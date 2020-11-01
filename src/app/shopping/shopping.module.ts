import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../common/material.module';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingDetailsComponent } from './components/shopping-details/shopping-details.component';
import { ShoppingService } from './shopping.service';

const routes: Routes = [
    {
        path: '', component: ShoppingComponent, data: { breadcrumb: { label: 'Listy zakupów', route: '/shopping' } }
    },
];

@NgModule({
    declarations: [ShoppingComponent, ShoppingListComponent, ShoppingDetailsComponent],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [ShoppingService]
})
export class ShoppingModule { }
