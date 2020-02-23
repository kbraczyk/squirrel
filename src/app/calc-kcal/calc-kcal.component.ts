import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalkKcalInfoComponent } from './calk-kcal-info/calk-kcal-info.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResultKcalComponent } from './result-kcal/result-kcal.component';
import { CalcKcalService } from './calc-kcal.service';


@Component({
  selector: 'squirrel-calc-kcal',
  templateUrl: './calc-kcal.component.html',
  styleUrls: ['./calc-kcal.component.scss'],
})
export class CalcKcalComponent implements OnInit {

  protected sexValues: Array<string>;
  protected activityValues: Array<{value, name}>;
  protected targetValues: Array<{value, name}>;
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
    sex: new FormControl(null, Validators.required),
    activity: new FormControl(null, Validators.required),
    target: new FormControl(null, Validators.required),
    kg: new FormControl(null),
    lb: new FormControl(null),
    cm: new FormControl(null),
    ft: new FormControl(null),
  });

  public get kg() { return this.calcKcalForm.get('kg'); }
  public get lb() { return this.calcKcalForm.get('lb'); }
  public get cm() { return this.calcKcalForm.get('cm'); }
  public get ft() { return this.calcKcalForm.get('ft'); }

  constructor(private dialogService: MatDialog, private calcService: CalcKcalService) {
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
    const calorieRequirment = this.calcService.calculateKcal(value).toFixed(0);

    if (calorieRequirment) {
      this.dialogRef = this.dialogService.open(ResultKcalComponent, {
        height: '250px',
        width: '400px',
        data: {calorieRequirment,  ...value }
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

  openInfo() {
    this.dialogRef = this.dialogService.open(CalkKcalInfoComponent);
  }

  setPopulateUnits(): any {
    this.kg.setValue(true);
    this.kg.valueChanges.subscribe(val => val ? this.weightPlaceholder = 'Waga (kg)' : this.weightPlaceholder = 'Waga (lb)');
    this.cm.setValue(true);
    this.cm.valueChanges.subscribe(val => val ? this.heightPlaceholder = 'Wzrost (cm)' : this.heightPlaceholder = 'Wzrost (Ft/in)');
  }
}
