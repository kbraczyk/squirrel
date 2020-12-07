import { Component, Input, OnDestroy } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { AnimationsDirective } from '@app/shared/directives/animations.directive';
import { EventService, EventSquirrel } from '@app/shared/service/event.service';
import { SessionService } from '@app/shared/service/session.service';
@Component({
  selector: 'squirrel-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [AnimationsDirective.inOutAnimations]
})
export class MenuComponent extends AbstractComponent implements OnDestroy {
  public userMenuState: boolean = false;
  public userExist: boolean = false;

  @Input() isOpen: boolean = false;

  constructor(private session: SessionService, private eventService: EventService) {
    super();
    this.sub.push(this.eventService.getEvent(EventSquirrel.login).subscribe(data => {
      this.userExist = !!window.localStorage.getItem('token');
    }));
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  logOut() {
    this.session.clearSession();
    this.userMenuState = false;
    this.userExist = false;
  }
}
