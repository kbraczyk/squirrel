import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { BehaviorSubject } from 'rxjs';
import { CalorieDemandResourceService } from '../resource/calorie-demand/calorie-demand.service';

@Injectable({
  providedIn: 'root'
})
export class DemandKcalService {
  constructor() {
  }

  public transformKcalToMakro(calories: number) {
    return {
      protein: ((calories * 0.25) / 4).toFixed(0),
      fat: ((calories * 0.4) / 9).toFixed(0),
      carbo: ((calories * 0.35) / 4).toFixed(0),
      energy: calories.toFixed(0)
    };
  }
}
