import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const materialComponent = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  imports: [
    ...materialComponent,
  ],
  exports: [
    ...materialComponent
  ]
})
export class MaterialModule { }
