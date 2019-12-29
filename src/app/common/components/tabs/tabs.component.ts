import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from '../../service/rest.service';

@Component({
  selector: 'squirrel-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() tabsOptions: { value: Resource, label: string, icon: string };
  @Output() selectedTab = new EventEmitter();
  public active: number = 0;

  constructor() {
  }

  changeTab(indexTabs) {
    this.active = indexTabs;
    this.selectedTab.emit(indexTabs);
  }
}
