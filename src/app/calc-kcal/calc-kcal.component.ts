import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalkKcalInfoComponent } from './calk-kcal-info/calk-kcal-info.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResultKcalComponent } from './result-kcal/result-kcal.component';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'squirrel-calc-kcal',
  templateUrl: './calc-kcal.component.html',
  styleUrls: ['./calc-kcal.component.scss'],
})
export class CalcKcalComponent implements OnInit {

  protected sexValues: Array<string>;
  protected activityValues: Array<{}>;
  protected targetValues: Array<{}>;
  public weightPlaceholder: string;
  public heightPlaceholder: string;
  private dialogRef: MatDialogRef<any>;


  public calcKcalForm = new FormGroup({
    height: new FormControl(null, [Validators.required, Validators.max(250), Validators.min(0), Validators.pattern('^[0-9]*$')]),
    weight: new FormControl(null, [Validators.required, Validators.max(200), Validators.min(0), Validators.pattern('^[0-9]*$')]),
    age: new FormControl(null, [Validators.required, Validators.max(99), Validators.min(0), Validators.pattern('^[0-9]*$')]),
    sex: new FormControl(null, Validators.required),
    activity: new FormControl(null, Validators.required),
    target: new FormControl(null, Validators.required),
    kg: new FormControl(null),
    lb: new FormControl(null),
    cm: new FormControl(null),
    ft: new FormControl(null),
  });

  public get age() { return this.calcKcalForm.get('age'); }
  public get sex() { return this.calcKcalForm.get('sex'); }
  public get activity() { return this.calcKcalForm.get('activity'); }
  public get target() { return this.calcKcalForm.get('target'); }
  public get kg() { return this.calcKcalForm.get('kg'); }
  public get lb() { return this.calcKcalForm.get('lb'); }
  public get cm() { return this.calcKcalForm.get('cm'); }
  public get ft() { return this.calcKcalForm.get('ft'); }

  constructor(private dialogService: MatDialog) {
    this.sexValues = ['Mężczyzna', 'Kobieta'];
    this.activityValues = [
      { value: 1.2, name: 'Niska aktywność' },
      { value: 1.35, name: 'Mała aktywność' },
      { value: 1.55, name: 'Średnia aktywność' },
      { value: 1.75, name: 'Duża aktywność' },
      { value: 2, name: ' Bardzo duża aktywność' },
    ];
    this.targetValues = [
      { value: 0.8, name: 'Utrata wagi' },
      { value: 1, name: 'Utrzymanie wagi' },
      { value: 1.2, name: 'Zwiększenie wagi' },
    ];
    this.weightPlaceholder = 'Waga (kg)';
    this.heightPlaceholder = 'Wzrost (cm)';
  }

  ngOnInit() {
    this.setPopulateUnits();
  }

  calculate(formValue) {
    let bmr: number;
    let cpm: number;
    console.log(this.calcKcalForm, 'FROM');
    if (formValue.sex === 'Kobieta') {
      bmr = (9.99 * formValue.weight) + (6.25 * formValue.height - (4.92 * formValue.age)) - 161;
    } else {
      bmr = (9.99 * formValue.weight) + (6.25 * formValue.height - (4.92 * formValue.age)) + 5;
    }
    cpm = (bmr * formValue.activity + formValue.target).toFixed(0);

    if (bmr && cpm && formValue && this.calcKcalForm.valid) {
      this.dialogRef = this.dialogService.open(ResultKcalComponent, {
        height: '250px',
        width: '400px',
        data: { bmr, cpm, ...formValue }
      });
      this.dialogRef.afterClosed().subscribe(() => {
        this.calcKcalForm.reset();
        Object.keys(this.calcKcalForm.controls).forEach(key => this.calcKcalForm.get(key).setErrors(null));
        this.setPopulateUnits();
      });
    } else {
      Object.keys(this.calcKcalForm.controls).forEach(key => this.calcKcalForm.get(key).markAllAsTouched());
      return;
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
    this.dialogService.open(CalkKcalInfoComponent, { data: { name: 'nam' } });
  }

  setPopulateUnits() {
    this.kg.setValue(true);
    this.kg.valueChanges.subscribe(val => val ? this.weightPlaceholder = 'Waga (kg)' : this.weightPlaceholder = 'Waga (lb)');
    this.cm.setValue(true);
    this.cm.valueChanges.subscribe(val => val ? this.heightPlaceholder = 'Wzrost (cm)' : this.heightPlaceholder = 'Wzrost (Ft/in)');
  }

}
