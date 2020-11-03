import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcKcalComponent } from './calc-kcal.component';
import { CalkKcalRoutingModule } from './calk-kcal-routing.module';
import { CalkKcalInfoComponent } from './calk-kcal-info/calk-kcal-info.component';
import { ResultKcalComponent } from './result-kcal/result-kcal.component';
import { MaterialModule } from '@app/common/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonSquirrelModule } from '@app/common/common.module';

const components = [
  CalcKcalComponent,
  CalkKcalInfoComponent,
  ResultKcalComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CommonSquirrelModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CalkKcalRoutingModule
  ],
  entryComponents: [ResultKcalComponent, CalkKcalInfoComponent]
})
export class CalkKcalModule { }
