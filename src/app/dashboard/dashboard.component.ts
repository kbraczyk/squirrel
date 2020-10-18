import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'squirrel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public menuOpenState: boolean = false;
  constructor() { }
}
