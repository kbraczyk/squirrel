import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { AnimationsDirective } from '@app/shared/directives/animations.directive';
import { ProfileRestService } from '@app/shared/resource/profile/profile.service';
import { EventService, EventSquirrel } from '@app/shared/service/event.service';
import { SessionService } from '@app/shared/service/session.service';
import { map } from 'rxjs/operators';
import { apiConfig } from 'src/environments/environment';
@Component({
  selector: 'squirrel-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [AnimationsDirective.inOutAnimations]
})
export class MenuComponent extends AbstractComponent implements OnDestroy {
  public userMenuState: boolean = false;
  public userExist: boolean = false;

  public userData$ = this.profile.getUserData().pipe(
    map(data => {
      data.avatar = data.avatar ? apiConfig.baseUrl + 'profile/avatar/' + data.avatar : null;
      return data;
    })
  );


  @Input() isOpen: boolean = false;

  constructor(
    private session: SessionService,
    private eventService: EventService,
    private profile: ProfileRestService,
    private router: Router) {
    super();
    this.sub.push(this.eventService.getEvent(EventSquirrel.login).subscribe(() =>
      this.userExist = !!window.localStorage.getItem('token')
    ));

    this.sub.push(this.eventService.getEvent(EventSquirrel.changeAvatar).subscribe(() =>
      this.userData$ = this.profile.getUserData().pipe(
        map(data => {
          data.avatar = apiConfig.baseUrl + 'profile/avatar/' + data.avatar;
          return data;
        }))
    ));
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  logOut() {
    this.session.clearSession();
    this.userMenuState = false;
    this.userExist = false;
    this.router.navigate(['/recipes/all']);
  }
}
