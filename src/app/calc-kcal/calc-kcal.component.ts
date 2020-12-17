import { Component, OnInit } from '@angular/core';
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
export class CalcKcalComponent extends AbstractComponent implements OnInit {

  protected sexValues: Array<string>;
  protected activityValues: Array<{ value, name }>;
  protected targetValues: Array<{ value, name }>;
  public weightPlaceholder: string;
  public heightPlaceholder: string;
  private dialogRef: MatDialogRef<any>;


  public calcKcalForm = new FormGroup({
    height: new FormControl(null,
      [
        Validators.required,
        Validators.max(250),
        Validators.min(0),
        Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')
      ]),
    weight: new FormControl(null,
      [
        Validators.required,
        Validators.max(200),
        Validators.min(0),
        Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')
      ]),
    age: new FormControl(null,
      [
        Validators.required,
        Validators.max(99),
        Validators.min(0),
        Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')
      ]),
    sex: new FormControl(null, [Validators.required]),
    activity: new FormControl(null, [Validators.required]),
    target: new FormControl(null, [Validators.required]),
    kg: new FormControl(null),
    lb: new FormControl(null),
    cm: new FormControl(null),
    ft: new FormControl(null),
  });

  public get kg() { return this.calcKcalForm.get('kg'); }
  public get lb() { return this.calcKcalForm.get('lb'); }
  public get cm() { return this.calcKcalForm.get('cm'); }
  public get ft() { return this.calcKcalForm.get('ft'); }

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

  ngOnInit() {
    this.setPopulateUnits();
  }

  calculate(value) {
    if (this.calcKcalForm.invalid) { return; }

    const data = this.calcService.calculateKcal(value);
    const calorieRequirment = this.demandService.transformKcalToMakro(data);

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
        this.setPopulateUnits();
      });

    } else {
      this.calcKcalForm.updateValueAndValidity();
    }
  }

  toogle(event) {
    if (event.source.name === 'kg') {
      event.checked ? this.lb.setValue(false) : this.lb.setValue(true);
    } else if (event.source.name === 'lb') {
      event.checked ? this.kg.setValue(false) : this.kg.setValue(true);
    } else if (event.source.name === 'cm') {
      event.checked ? this.ft.setValue(false) : this.ft.setValue(true);
    } else {
      event.checked ? this.cm.setValue(false) : this.cm.setValue(true);
    }
  }

  setPopulateUnits(): any {
    this.kg.setValue(true);
    this.kg.valueChanges.subscribe(val => val ? this.weightPlaceholder = 'Waga (kg)' : this.weightPlaceholder = 'Waga (lb)');
    this.cm.setValue(true);
    this.cm.valueChanges.subscribe(val => val ? this.heightPlaceholder = 'Wzrost (cm)' : this.heightPlaceholder = 'Wzrost (Ft/in)');
  }
}
