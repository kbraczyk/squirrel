import { Component, Input } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'squirrel-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 500 })
  ],
})
export class MenuComponent {
  public userMenuState: boolean = false;
  public userExist: boolean = false;

  @Input() isOpen: boolean = false;

  constructor() {
    this.userExist = !!window.localStorage.getItem('token');
  }
}
