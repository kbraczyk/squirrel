import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Resource } from '../../service/rest.service';

@Component({
  selector: 'squirrel-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() tabsOptions: { value: Resource, label: string, icon: string };
  @Output() selectedTab = new EventEmitter<number>();

  public active: number = 0;
  protected showTooltip: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setVisibilityTooltip();
  }

  constructor() {
    this.setVisibilityTooltip();
  }

  public changeTab(indexTabs) {
    this.active = indexTabs;
    this.selectedTab.emit(indexTabs);
  }

  private setVisibilityTooltip(): void {
    innerWidth < 768 ? this.showTooltip = true : this.showTooltip = false;
  }
}
