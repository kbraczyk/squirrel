import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcKcalComponent } from './calc-kcal.component';
import { CalkKcalRoutingModule } from './calk-kcal-routing.module';
import { ResultKcalComponent } from './result-kcal/result-kcal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedSquirrelModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';
import { FormModule } from '@app/shared/form.module';

const components = [
  CalcKcalComponent,
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
    CalkKcalRoutingModule,
    FormModule
  ],
  entryComponents: [ResultKcalComponent]
})
export class CalkKcalModule { }
