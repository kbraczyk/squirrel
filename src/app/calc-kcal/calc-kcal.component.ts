import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResultKcalComponent } from './result-kcal/result-kcal.component';
import { CalcKcalService } from './calc-kcal.service';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { DemandKcalService } from '@app/shared/service/demand-kcal.service';

@Component({
  selector: 'squirrel-calc-kcal',
  templateUrl: './calc-kcal.component.html',
  styleUrls: ['./calc-kcal.component.scss'],
})
export class CalcKcalComponent extends AbstractComponent {

  public sexValues: Array<string>;
  public activityValues: Array<{ value, name }>;
  public targetValues: Array<{ value, name }>;
  public weightPlaceholder: string;
  public heightPlaceholder: string;
  private dialogRef: MatDialogRef<any>;


  public calcKcalForm = new FormGroup({
    height: new FormControl(null,
      [Validators.required, Validators.max(250),
      Validators.min(0), Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')
      ]),
    weight: new FormControl(null,
      [Validators.required, Validators.max(200),
      Validators.min(0), Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')
      ]),
    age: new FormControl(null,
      [Validators.required, Validators.max(99),
      Validators.min(0), Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')
      ]),
    sex: new FormControl(null, [Validators.required]),
    activity: new FormControl(null, [Validators.required]),
    target: new FormControl(null, [Validators.required]),
  });

  public get height() { return this.calcKcalForm.get('height'); }
  public get weight() { return this.calcKcalForm.get('weight'); }
  public get age() { return this.calcKcalForm.get('age'); }
  public get sex() { return this.calcKcalForm.get('sex'); }
  public get activity() { return this.calcKcalForm.get('activity'); }
  public get target() { return this.calcKcalForm.get('target'); }


  constructor(private dialogService: MatDialog, private calcService: CalcKcalService, private demandService: DemandKcalService) {
    super();
    this.headerTitle = 'Kalkulator zapotrzebowania kalorycznego';
    this.headerSubtitle = 'Oblicz swoje zapotrzebowanie kaloryczne i kontroluj ilość spożywanego pokarmu';
    this.headerIcon = 'calculate';
    this.weightPlaceholder = 'Waga (kg)';
    this.heightPlaceholder = 'Wzrost (cm)';
    this.sexValues = calcService.sex;
    this.activityValues = calcService.activity;
    this.targetValues = calcService.target;
  }

  calculate(value) {
    if (this.calcKcalForm.invalid) { return; }
    const calorieRequirment = this.demandService.transformKcalToMakro(this.calcService.calculateKcal(value));

    if (calorieRequirment) {
      this.dialogRef = this.dialogService.open(ResultKcalComponent, {
        minWidth: '400px',
        hasBackdrop: true,
        disableClose: true,
        data: { calorieRequirment, ...value }
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.calcKcalForm.reset();
        Object.keys(this.calcKcalForm.controls).forEach(key => this.calcKcalForm.get(key).setErrors(null));
      });

    } else {
      this.calcKcalForm.updateValueAndValidity();
    }
  }
}
