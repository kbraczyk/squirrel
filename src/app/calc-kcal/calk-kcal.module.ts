import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcKcalComponent } from './calc-kcal.component';
import { CalkKcalRoutingModule } from './calk-kcal-routing.module';
import { CalkKcalInfoComponent } from './calk-kcal-info/calk-kcal-info.component';
import { ResultKcalComponent } from './result-kcal/result-kcal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedSquirrelModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';

const components = [
  CalcKcalComponent,
  CalkKcalInfoComponent,
  ResultKcalComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedSquirrelModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CalkKcalRoutingModule
  ],
  entryComponents: [ResultKcalComponent, CalkKcalInfoComponent]
})
export class CalkKcalModule { }
