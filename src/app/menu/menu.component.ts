import { Component, Input } from '@angular/core';
import { AnimationsDirective } from '@app/shared/directives/animations.directive';
import { SessionService } from '@app/shared/service/session.service';
@Component({
  selector: 'squirrel-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [AnimationsDirective.inOutAnimations]
})
export class MenuComponent {
  public userMenuState: boolean = false;
  public userExist: boolean = false;

  @Input() isOpen: boolean = false;

  constructor(private session: SessionService) {
    this.userExist = !!window.localStorage.getItem('token');
  }

  logOut() {
    this.session.clearSession();
    this.userMenuState = false;
    this.userExist = false;
  }
}
