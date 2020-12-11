import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { SessionService } from './shared/service/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private session: SessionService, private notification: NotificationsService) { }

  canActivate(): boolean {
    const sessionExist = this.session.sessionExist();
    if (!sessionExist) {
      this.notification.info(null, 'Brak uprawnień do przeglądania treści. Zaloguj się i spróbuj ponownie.');
    }
    return sessionExist;
  }

}
