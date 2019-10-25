import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'squirrel-calc-kcal',
  templateUrl: './calc-kcal.component.html',
  styleUrls: ['./calc-kcal.component.scss']
})
export class CalcKcalComponent implements OnInit {

  public calcKcalForm = new FormGroup({
    height: new FormControl(''),
    weight: new FormControl(''),
    age: new FormControl(''),
    sex: new FormControl(''),
    activity: new FormControl(''),
    target: new FormControl(''),
  });

  constructor() {
// tslint:disable-next-line:no-unused-expression
this.calcKcalForm.get('height').setValue(-5);
   }

  ngOnInit() {
  }

}
