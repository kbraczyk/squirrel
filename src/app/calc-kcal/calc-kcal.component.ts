import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'squirrel-calc-kcal',
  templateUrl: './calc-kcal.component.html',
  styleUrls: ['./calc-kcal.component.scss']
})
export class CalcKcalComponent implements OnInit {

  protected sex: Array<string>;
  protected activity: Array<{}>;
  protected target: Array<{}>;

  public calcKcalForm = new FormGroup({
    height: new FormControl(null, [Validators.required, Validators.max(99), Validators.min(0) ]),
    weight: new FormControl(null, [Validators.required, Validators.max(99), Validators.min(0)]),
    age: new FormControl(null, [Validators.required, Validators.max(99), Validators.min(0)]),
    sex: new FormControl(null, Validators.required),
    activity: new FormControl(null, Validators.required),
    target: new FormControl(null, Validators.required),
  });

  constructor() {
    this.sex = ['Mężczyzna', 'Kobieta'];
    this.activity = [
      { value: 1.2 , name: 'Niska aktywność' },
      { value: 1.4 , name: 'Mała aktywność' },
      { value: 1.6 , name: 'Średnia aktywność' },
      { value: 1.8 , name: 'Duża aktywność' },
      { value: 2 , name: ' Bardzo duża aktywność' },
    ];
    this.target = [
      { value: 0.8 , name: 'Utrata wagi' },
      { value: 1 , name: 'Utrzymanie wagi' },
      { value: 1.2 , name: 'Zwiększenie wagi'},
    ];
   }

  ngOnInit() {}

  calculate(form: FormGroup) {
    console.log(form, 'Form instance');
  }

}
