import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private event$: BehaviorSubject<EventApp> = new BehaviorSubject(null);

  constructor() { }

  public getEvent(eventName?: EventSquirrel) {
    return eventName ? this.event$.pipe(filter(d => d !== null && d.event === eventName)) : this.event$;
  }

  public emitEvent(event: EventSquirrel, data?: any) {
    this.event$.next({ data, event });
  }
}

export interface EventApp {
  data: any;
  event: EventSquirrel;
}

export enum EventSquirrel {
  login,
  newShopList,
  updateShopList
}
