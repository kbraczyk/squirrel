import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsInputComponent } from './components/form/ingredients/ingredients.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ErrorFormComponent } from './components/form/error-form/error-form.component';



@NgModule({
  declarations: [IngredientsInputComponent, ErrorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [IngredientsInputComponent, ErrorFormComponent],
})
export class FormModule { }
