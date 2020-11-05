import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public favoriteRecipe$: BehaviorSubject<any> = new BehaviorSubject([]);
  public ownRecipe$: BehaviorSubject<any> = new BehaviorSubject([]);
  public recipes$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }
}
