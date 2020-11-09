import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandRoutingModule } from './demand-routing.module';
import { DemandComponent } from './demand.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedSquirrelModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';

@NgModule({
  declarations: [DemandComponent],
  imports: [
    CommonModule,
    SharedSquirrelModule,
    DemandRoutingModule,
    MaterialModule,
    NgxChartsModule
  ]
})
export class DemandModule { }
