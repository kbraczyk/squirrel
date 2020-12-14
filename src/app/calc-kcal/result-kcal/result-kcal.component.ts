import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { CalorieDemandResourceService } from '@app/shared/resource/calorie-demand/calorie-demand.service';
import { SessionService } from '@app/shared/service/session.service';
import { NotificationsService } from 'angular2-notifications';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'squirrel-result-kcal',
  templateUrl: './result-kcal.component.html',
  styleUrls: ['./result-kcal.component.scss']
})
export class ResultKcalComponent extends AbstractComponent {
  public userExist: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ResultKcalComponent>,
    private notification: NotificationsService,
    private demandResource: CalorieDemandResourceService,
    private session: SessionService
  ) {
    super();
    this.userExist = this.session.sessionExist();
  }

  saveResults = () => {
    this.isLoading = true;
    this.demandResource.saveCalorieDemand(this.data.calorieRequirment).pipe(finalize(() => this.isLoading = false)).subscribe(() => {
      this.notification.success(null, 'Obliczone zapotrzebowanie zostało przypisane do profilu.');
    },
      error => this.notification.error(null, 'Wystąpił problem podczas zapisu danych'));
  }

}
