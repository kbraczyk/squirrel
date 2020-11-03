import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandRoutingModule } from './demand-routing.module';
import { DemandComponent } from './demand.component';
import { CommonSquirrelModule } from '@app/common/common.module';
import { MaterialModule } from '@app/common/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DemandComponent],
  imports: [
    CommonModule,
    CommonSquirrelModule,
    DemandRoutingModule,
    MaterialModule,
    NgxChartsModule
  ]
})
export class DemandModule { }
