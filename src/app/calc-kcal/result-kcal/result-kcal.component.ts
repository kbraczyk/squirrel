import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'squirrel-result-kcal',
  templateUrl: './result-kcal.component.html',
  styleUrls: ['./result-kcal.component.scss']
})
export class ResultKcalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
