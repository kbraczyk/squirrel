import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DemandKcalService } from '@shared/service/demand-kcal.service';

@Component({
  selector: 'squirrel-result-kcal',
  templateUrl: './result-kcal.component.html',
  styleUrls: ['./result-kcal.component.scss']
})
export class ResultKcalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ResultKcalComponent>,
    private kcalService: DemandKcalService) { }

  saveResults = () => this.kcalService.setData(this.data.calorieRequirment);

}
