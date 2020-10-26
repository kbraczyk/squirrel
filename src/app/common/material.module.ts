import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoContentComponent } from './components/no-content/no-content.component';

const materialComponent = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatListModule
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
