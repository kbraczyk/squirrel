import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

const materialComponent = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  imports: [
    ...materialComponent,
  ],
  exports: [
    ...materialComponent
  ],
  declarations: []
})
export class MaterialModule { }
