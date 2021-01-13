import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CalcKcalService {

  private readonly _sex: Array<string> = ['Mężczyzna', 'Kobieta'];
  private readonly _activity: Array<{ value: number, name: string }> = [
    { value: 1.2, name: 'Niska aktywność' },
    { value: 1.35, name: 'Mała aktywność' },
    { value: 1.55, name: 'Średnia aktywność' },
    { value: 1.75, name: 'Duża aktywność' },
    { value: 2, name: ' Bardzo duża aktywność' },
  ];
  private readonly _target: Array<{ value, name }> = [
    { value: 0.8, name: 'Utrata wagi' },
    { value: 1, name: 'Utrzymanie wagi' },
    { value: 1.2, name: 'Zwiększenie wagi' },
  ];

  get sex(): Array<string> { return this._sex; }
  get activity(): Array<{ value, name }> { return this._activity; }
  get target(): Array<{ value, name }> { return this._target; }

  public calculateKcal(value): number {
    let basicMetabolicRate: number;
    let totalMetabolicRate: number;

    if (value.sex === 'Kobieta') {
      basicMetabolicRate = (10 * value.weight) + (6.25 * value.height - (5 * value.age)) - 161;
    } else {
      basicMetabolicRate = (10 * value.weight) + (6.25 * value.height - (5 * value.age)) + 5;
    }

    totalMetabolicRate = (basicMetabolicRate * value.activity) * value.target;
    return totalMetabolicRate as number;
  }
}

