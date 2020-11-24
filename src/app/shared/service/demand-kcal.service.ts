import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandKcalService {
  constructor(private notification: NotificationsService) {
  }

  public setData(data) {
    this.notification.success(null, 'Obliczone zapotrzebowanie zostało przypisane do profilu.');
  }

  transformKcalToMakro(calories: number) {
    return {
      protein: (calories * 0.25) / 4,
      fat: (calories * 0.4) / 9,
      carbs: (calories * 0.35) / 4,
      calories
    };
  }
}
