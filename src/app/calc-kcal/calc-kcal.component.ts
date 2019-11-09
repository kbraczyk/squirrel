import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalkKcalInfoComponent } from './calk-kcal-info/calk-kcal-info.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'squirrel-calc-kcal',
  templateUrl: './calc-kcal.component.html',
  styleUrls: ['./calc-kcal.component.scss'],
})
export class CalcKcalComponent implements OnInit {

  protected sex: Array<string>;
  protected activity: Array<{}>;
  protected target: Array<{}>;
  public weightPlaceholder: string;
  public heightPlaceholder: string;


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

  public get height() { return this.calcKcalForm.get('height'); }
  public get kg() { return this.calcKcalForm.get('kg'); }
  public get lb() { return this.calcKcalForm.get('lb'); }
  public get cm() { return this.calcKcalForm.get('cm'); }
  public get ft() { return this.calcKcalForm.get('ft'); }

  constructor(private dialogService: MatDialog) {
    this.sex = ['Mężczyzna', 'Kobieta'];
    this.activity = [
      { value: 1.2, name: 'Niska aktywność' },
      { value: 1.4, name: 'Mała aktywność' },
      { value: 1.6, name: 'Średnia aktywność' },
      { value: 1.8, name: 'Duża aktywność' },
      { value: 2, name: ' Bardzo duża aktywność' },
    ];
    this.target = [
      { value: 0.8, name: 'Utrata wagi' },
      { value: 1, name: 'Utrzymanie wagi' },
      { value: 1.2, name: 'Zwiększenie wagi' },
    ];
    this.weightPlaceholder = 'Waga (kg)';
    this.heightPlaceholder = 'Wzrost (cm)';
  }

  ngOnInit() {
    this.kg.setValue(true);
    this.kg.valueChanges.subscribe( val => val ? this.weightPlaceholder = 'Waga (kg)' : this.weightPlaceholder = 'Waga (lb)');
    this.cm.setValue(true);
    this.cm.valueChanges.subscribe( val => val ? this.heightPlaceholder = 'Wzrost (cm)' : this.heightPlaceholder = 'Wzrost (Ft/in)');
  }

  calculate(form: FormGroup) {
    console.log(form, 'Form instance');
    console.log(this.height, 'height');
  }

  toogle(event) {
    if (event.source.name === 'kg') {
      event.checked ? this.lb.setValue(false) : this.lb.setValue(true);
    } else if (event.source.name === 'lb') {
      event.checked ? this.kg.setValue(false) : this.kg.setValue(true);
    } else if (event.source.name === 'cm') {
      event.checked ?  this.ft.setValue(false) : this.ft.setValue(true);
    } else {
      event.checked ? this.cm.setValue(false) : this.cm.setValue(true);
    }
  }
  openInfo() {
    this.dialogService.open(CalkKcalInfoComponent, {data: {name: this.height.value}});
  }
}
